/**
 * Unlock with Face ID, Touch ID, fingerprint or Windows Hello (WebAuthn, the phone's built-in lock).
 *
 * It replaces typing the PIN on this device only. Turning it on makes the phone create a key that
 * never leaves it; unlocking asks the phone to prove the owner is there (face/finger/device PIN).
 * No face or fingerprint data ever reaches the app. The PIN always keeps working as a backup.
 *
 * Like the PIN, this is a lock on this device - the account itself is still protected by
 * email + password and the online session.
 */
const KEY = "rep-ledger:biometric";

type Saved = Record<string, string>; // account id -> credential id (base64url)
const read = (): Saved => { try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch { return {}; } };
const write = (m: Saved) => { try { localStorage.setItem(KEY, JSON.stringify(m)); } catch { /* storage blocked */ } };

const b64 = (buf: ArrayBuffer) => btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
const unb64 = (s: string) => Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0));
const challenge = () => crypto.getRandomValues(new Uint8Array(32));

let supported: Promise<boolean> | null = null;
/** True when this device has a built-in biometric / screen-lock authenticator the browser can use. */
export function biometricSupported(): Promise<boolean> {
  if (!supported) {
    supported = (async () => {
      try {
        if (!window.isSecureContext || !window.PublicKeyCredential || !navigator.credentials) return false;
        return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
      } catch { return false; }
    })();
  }
  return supported;
}

export const hasBiometric = (id: string) => !!read()[id];

const ua = () => navigator.userAgent;
const apple = () => /iPhone|iPad|iPod|Macintosh/.test(ua()) && (navigator.maxTouchPoints > 0 || /Mac OS X/.test(ua()));
/** What to call it on this device. */
export function biometricName(): string {
  if (/iPhone|iPad|iPod/.test(ua()) || (/Macintosh/.test(ua()) && navigator.maxTouchPoints > 1)) return "Face ID";
  if (/Macintosh/.test(ua())) return "Touch ID";
  if (/Windows/.test(ua())) return "Windows Hello";
  if (/Android/.test(ua())) return "fingerprint";
  return "fingerprint or face";
}
/** iPhone/iPad only start Face ID from a tap; elsewhere it can start by itself. */
export const biometricNeedsTap = () => apple();

/** Ask the phone to set it up. Returns an error message, or null when it worked. */
export async function enableBiometric(acc: { id: string; name: string; email?: string }): Promise<string | null> {
  if (!(await biometricSupported())) return "This device doesn't support it.";
  try {
    const cred = (await navigator.credentials.create({
      publicKey: {
        challenge: challenge(),
        rp: { name: "Rep Ledger" },
        user: { id: new TextEncoder().encode(acc.id).slice(0, 64), name: acc.email || acc.name, displayName: acc.name },
        pubKeyCredParams: [{ type: "public-key", alg: -7 }, { type: "public-key", alg: -257 }],
        authenticatorSelection: { authenticatorAttachment: "platform", userVerification: "required", residentKey: "discouraged" },
        timeout: 60000,
        attestation: "none",
      },
    })) as PublicKeyCredential | null;
    if (!cred) return "It wasn't set up.";
    write({ ...read(), [acc.id]: b64(cred.rawId) });
    return null;
  } catch (e) {
    const n = (e as Error).name;
    if (n === "NotAllowedError" || n === "AbortError") return "Cancelled - nothing was changed.";
    if (n === "InvalidStateError") return "It's already set up on this device - try turning it off and on again.";
    return "Couldn't set it up on this device.";
  }
}

export function disableBiometric(id: string) {
  const m = read();
  delete m[id];
  write(m);
}

export type BioResult = "ok" | "cancelled" | "failed" | "missing";
/** Ask for the face / finger. "ok" means the phone confirmed its owner is holding it. */
export async function verifyBiometric(id: string): Promise<BioResult> {
  const raw = read()[id];
  if (!raw) return "missing";
  try {
    const a = (await navigator.credentials.get({
      publicKey: {
        challenge: challenge(),
        allowCredentials: [{ type: "public-key", id: unb64(raw), transports: ["internal"] }],
        userVerification: "required",
        timeout: 60000,
      },
    })) as PublicKeyCredential | null;
    const resp = a?.response as AuthenticatorAssertionResponse | undefined;
    if (!a || !resp || b64(a.rawId) !== raw) return "failed";
    // flags byte: bit 0 = user present, bit 2 = user verified (face / finger / device passcode)
    const flags = new Uint8Array(resp.authenticatorData)[32];
    return flags & 0x04 ? "ok" : "failed";
  } catch (e) {
    const n = (e as Error).name;
    if (n === "NotAllowedError" || n === "AbortError") return "cancelled";
    return "failed";
  }
}
