// Example-only string construction; this module makes no network requests.
export function authorizationHeader(credential: string): string {
  if (!credential.trim()) throw new Error("A credential is required");
  return `Bearer ${credential}`;
}
