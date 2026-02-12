import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

function getServiceAccount() {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function getAdminDb() {
  const serviceAccount = getServiceAccount();
  if (!serviceAccount) {
    throw new Error(
      "Missing FIREBASE_SERVICE_ACCOUNT. Set it in .env.local as JSON string."
    );
  }

  if (!getApps().length) {
    initializeApp({ credential: cert(serviceAccount) });
  }

  return getFirestore();
}
