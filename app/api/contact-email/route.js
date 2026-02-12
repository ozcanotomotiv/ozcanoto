export async function POST(req) {
  try {
    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const service = String(body?.service ?? "").trim();
    const date = String(body?.date ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!name || !phone || !service || !date) {
      return Response.json(
        { ok: false, error: "missing_fields" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return Response.json(
        { ok: false, error: "missing_resend_api_key" },
        { status: 500 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL || "ozcan@ozcanoto.com.tr";
    const from = process.env.RESEND_FROM || "onboarding@resend.dev";

    const subject = `Yeni Randevu Talebi: ${service} • ${name}`;

    const text = [
      "Yeni randevu talebi alındı.",
      "",
      `Ad Soyad: ${name}`,
      `Telefon: ${phone}`,
      `Hizmet: ${service}`,
      `Tarih: ${date}`,
      `Mesaj: ${message || "-"}`,
      "",
      `Kaynak: ${req.headers.get("origin") || "-"}`,
    ].join("\n");

    const html = `
      <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto;line-height:1.6">
        <h2 style="margin:0 0 12px">Yeni randevu talebi</h2>
        <table cellpadding="0" cellspacing="0" style="border-collapse:collapse">
          <tr><td style="padding:6px 12px 6px 0;font-weight:600">Ad Soyad</td><td style="padding:6px 0">${escapeHtml(
            name
          )}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:600">Telefon</td><td style="padding:6px 0">${escapeHtml(
            phone
          )}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:600">Hizmet</td><td style="padding:6px 0">${escapeHtml(
            service
          )}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:600">Tarih</td><td style="padding:6px 0">${escapeHtml(
            date
          )}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:600">Mesaj</td><td style="padding:6px 0">${escapeHtml(
            message || "-"
          )}</td></tr>
        </table>
      </div>
    `;

    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject,
        text,
        html,
      }),
    });

    if (!r.ok) {
      const raw = await r.text();
      return Response.json(
        { ok: false, error: "resend_failed", details: raw.slice(0, 500) },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
