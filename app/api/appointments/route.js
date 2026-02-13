import { getAdminDb } from "@/lib/firebaseAdmin";
import { siteConfig } from "@/lib/siteConfig";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const service = String(body?.service ?? "").trim();
    const date = String(body?.date ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!name || !email || !phone || !service || !date) {
      return Response.json(
        { ok: false, error: "missing_fields" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { ok: false, error: "invalid_email" },
        { status: 400 }
      );
    }

    const db = getAdminDb();

    const payload = {
      name,
      email,
      phone,
      service,
      date,
      message,
      createdAt: new Date(),
      status: "new",
    };

    await db.collection("appointments").add(payload);

    const [adminEmailResult, userEmailResult] = await Promise.all([
      sendAdminEmail({ name, email, phone, service, date, message, req }),
      sendUserConfirmationEmail({ name, email, phone, service, date, message, req }),
    ]);

    return Response.json({
      ok: true,
      emailSent: adminEmailResult.ok,
      userEmailSent: userEmailResult.ok,
      emailError: adminEmailResult.ok ? null : adminEmailResult.error || "unknown",
      userEmailError: userEmailResult.ok ? null : userEmailResult.error || "unknown",
      emailErrorStatus: adminEmailResult.ok ? null : adminEmailResult.status || null,
      userEmailErrorStatus: userEmailResult.ok ? null : userEmailResult.status || null,
      emailErrorDetails: adminEmailResult.ok ? null : adminEmailResult.details || null,
      userEmailErrorDetails: userEmailResult.ok ? null : userEmailResult.details || null,
    });
  } catch (err) {
    return Response.json(
      { ok: false, error: "server_error" },
      { status: 500 }
    );
  }
}

function getContactToList() {
  const raw = process.env.CONTACT_TO_EMAIL || siteConfig.email || "ozcan@ozcanoto.com.tr";
  return raw
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);
}

function getReplyToEmail() {
  return (
    process.env.CONTACT_REPLY_TO_EMAIL ||
    process.env.CONTACT_TO_EMAIL ||
    siteConfig.email ||
    "ozcan@ozcanoto.com.tr"
  );
}

function getFromEmail() {
  const user = process.env.GMAIL_SMTP_USER;
  return user ? `${siteConfig.shortName} <${user}>` : siteConfig.shortName;
}

function getSmtpTransport() {
  const user = process.env.GMAIL_SMTP_USER;
  const pass = process.env.GMAIL_SMTP_APP_PASSWORD;

  if (!user || !pass) {
    const missing = [];
    if (!user) missing.push("GMAIL_SMTP_USER");
    if (!pass) missing.push("GMAIL_SMTP_APP_PASSWORD");
    throw new Error(`Missing SMTP env: ${missing.join(", ")}`);
  }

  // Cache transporter in dev/hot-reload to avoid creating a new connection repeatedly.
  const g = globalThis;
  if (g.__ozcanotoSmtpTransport) return g.__ozcanotoSmtpTransport;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  g.__ozcanotoSmtpTransport = transport;
  return transport;
}

async function sendAdminEmail({ name, email, phone, service, date, message, req }) {
  let transport;
  try {
    transport = getSmtpTransport();
  } catch (err) {
    return {
      ok: false,
      error: "missing_smtp_env",
      details: String(err?.message || err).slice(0, 500),
    };
  }

  const list = getContactToList();
  const to = list.length === 1 ? list[0] : list;
  const from = getFromEmail();
  const replyTo = email || getReplyToEmail();

  const subject = `Yeni Randevu Talebi: ${service} • ${name}`;

  const text = [
    "Yeni randevu talebi alındı.",
    "",
    `Ad Soyad: ${name}`,
    `E-posta: ${email}`,
    `Telefon: ${phone}`,
    `Hizmet: ${service}`,
    `Tarih: ${date}`,
    `Mesaj: ${message || "-"}`,
    "",
    `Kaynak: ${req?.headers?.get?.("origin") || "-"}`,
  ].join("\n");

  const origin = req?.headers?.get?.("origin") || "";
  const mailtoSubject = `Randevu: ${service} • ${name}`;
  const mailtoBody = [
    `Merhaba ${name},`,
    "",
    "Randevu talebinizle ilgili dönüş yapıyoruz.",
    "",
    `Hizmet: ${service}`,
    `Tarih: ${date}`,
    `Telefon: ${phone}`,
    "",
    `${siteConfig.shortName}`,
  ].join("\n");
  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(
    mailtoSubject
  )}&body=${encodeURIComponent(mailtoBody)}`;

  const html = buildGlassEmailHtml({
    title: "Yeni randevu talebi",
    subtitle: `<strong style=\"color:#fff\">${escapeHtml(
      name
    )}</strong> adlı müşteriden yeni randevu talebi geldi.`,
    rows: [
      { k: "Ad Soyad", v: escapeHtml(name) },
      { k: "E-posta", v: escapeHtml(email) },
      { k: "Telefon", v: escapeHtml(phone) },
      { k: "Hizmet", v: escapeHtml(service) },
      { k: "Tarih", v: escapeHtml(date) },
      { k: "Mesaj", v: escapeHtml(message || "-") },
    ],
    primary: { label: "Müşteriye yaz", href: mailtoHref },
    secondary: { label: "Hemen ara", href: `tel:${phone}` },
    footer: `${escapeHtml(siteConfig.shortName)} • ${escapeHtml(
      siteConfig.phoneDisplay
    )}<br />${escapeHtml(siteConfig.address)}${origin ? `<div style=\"margin-top:6px;color:rgba(255,255,255,0.45)\">Kaynak: ${escapeHtml(origin)}</div>` : ""}`,
  });

  try {
    await transport.sendMail({
      from,
      to,
      replyTo,
      subject,
      text,
      html,
    });

    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error: "smtp_failed",
      details: String(err?.message || err).slice(0, 500),
    };
  }
}

async function sendUserConfirmationEmail({ name, email, phone, service, date, message, req }) {
  let transport;
  try {
    transport = getSmtpTransport();
  } catch (err) {
    return {
      ok: false,
      error: "missing_smtp_env",
      details: String(err?.message || err).slice(0, 500),
    };
  }

  const from = getFromEmail();
  const replyTo = getReplyToEmail();
  const subject = `Randevu talebinizi aldık • ${siteConfig.shortName}`;

  const text = [
    "Merhaba, talebinizi aldık.",
    "Size en kısa sürede geri döneceğiz :)",
    "",
    `Hizmet: ${service}`,
    `Tarih: ${date}`,
    `Telefonunuz: ${phone}`,
    `Mesajınız: ${message || "-"}`,
    "",
    `İletişim: ${siteConfig.phoneDisplay} • ${siteConfig.address}`,
    `Kaynak: ${req?.headers?.get?.("origin") || "-"}`,
  ].join("\n");

  const origin = req?.headers?.get?.("origin") || "";
  const html = buildGlassEmailHtml({
    title: "Randevu talebinizi aldık",
    subtitle: `Merhaba <strong style=\"color:#fff\;font-weight:600\">${escapeHtml(
      name
    )}</strong>, talebinizi aldık. Size en kısa sürede geri döneceğiz :)`,
    rows: [
      { k: "Hizmet", v: escapeHtml(service) },
      { k: "Tarih", v: escapeHtml(date) },
      { k: "Telefon", v: escapeHtml(phone) },
      { k: "Mesaj", v: escapeHtml(message || "-") },
    ],
    primary: { label: "Hemen ara", href: `tel:${siteConfig.phoneTel}` },
    secondary: { label: "Konumu aç", href: siteConfig.mapsUrl },
    footer: `${escapeHtml(siteConfig.shortName)} • ${escapeHtml(
      siteConfig.phoneDisplay
    )}<br />${escapeHtml(siteConfig.address)}${origin ? `<div style=\"margin-top:6px;color:rgba(255,255,255,0.45)\">Kaynak: ${escapeHtml(origin)}</div>` : ""}`,
  });

  try {
    await transport.sendMail({
      from,
      to: email,
      replyTo,
      subject,
      text,
      html,
    });

    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error: "smtp_failed",
      details: String(err?.message || err).slice(0, 500),
    };
  }
}

function buildGlassEmailHtml({ title, subtitle, rows, primary, secondary, footer }) {
  const rowsHtml = rows
    .map(
      (r, i) => `
        <tr>
          <td style="padding:14px 0${
            i === 0 ? "" : ";border-top:1px solid rgba(255,255,255,0.06)"
          };color:rgba(255,255,255,0.5);font-size:13px;font-weight:500;letter-spacing:-0.01em">${r.k}</td>
          <td style="padding:14px 0${
            i === 0 ? "" : ";border-top:1px solid rgba(255,255,255,0.06)"
          };color:#fff;font-size:14px;font-weight:600;text-align:right;letter-spacing:-0.01em">${r.v}</td>
        </tr>
      `
    )
    .join("");

  const buttonBase =
    "display:inline-block;padding:12px 24px;border-radius:10px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:14px;font-weight:600;text-decoration:none;letter-spacing:-0.01em;transition:all 0.2s ease";

  const primaryStyle =
    `${buttonBase};background:#ff8c00;color:#000;border:none;box-shadow:0 2px 8px rgba(255,140,0,0.25)`;

  const secondaryStyle =
    `${buttonBase};background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.12);color:rgba(255,255,255,0.9)`;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin:0;padding:0;background:#0a0a0a">
      <div style="background:#0a0a0a;padding:40px 20px">
        <div style="max-width:600px;margin:0 auto">
          
          <div style="background:rgba(255,255,255,0.03);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden">
            
            <div style="padding:32px 32px 24px 32px">
              <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:rgba(255,255,255,0.5);font-size:11px;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;margin-bottom:12px">
                ${escapeHtml(siteConfig.shortName)}
              </div>
              <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#fff;font-size:24px;font-weight:700;line-height:1.3;letter-spacing:-0.02em;margin-bottom:8px">
                ${title}
              </div>
              <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:rgba(255,255,255,0.65);font-size:15px;line-height:1.6;letter-spacing:-0.01em">
                ${subtitle}
              </div>
            </div>

            <div style="height:1px;background:rgba(255,255,255,0.06);margin:0 32px"></div>

            <div style="padding:24px 32px 32px 32px">
              <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:rgba(255,255,255,0.9);font-size:13px;font-weight:600;margin-bottom:16px;letter-spacing:-0.01em">
                Talep Detayları
              </div>
              <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
                ${rowsHtml}
              </table>

              <div style="margin-top:32px;display:flex;gap:12px;flex-wrap:wrap">
                <a href="${escapeHtml(primary.href)}" style="${primaryStyle}">${escapeHtml(primary.label)}</a>
                <a href="${escapeHtml(secondary.href)}" style="${secondaryStyle}">${escapeHtml(secondary.label)}</a>
              </div>
            </div>

            <div style="padding:20px 32px;background:rgba(0,0,0,0.2);border-top:1px solid rgba(255,255,255,0.06)">
              <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:rgba(255,255,255,0.5);font-size:13px;line-height:1.6;letter-spacing:-0.01em">
                ${footer}
              </div>
            </div>
          </div>

          <div style="margin-top:24px;text-align:center;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:rgba(255,255,255,0.3);font-size:12px;line-height:1.5;letter-spacing:-0.01em">
            Bu e-posta otomatik olarak gönderilmiştir.
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
