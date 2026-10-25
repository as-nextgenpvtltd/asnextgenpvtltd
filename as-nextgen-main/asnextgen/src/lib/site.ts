/**
 * Canonical public URL of the site (no trailing slash).
 * Set NEXT_PUBLIC_SITE_URL in your host's environment settings.
 * Falls back to the Vercel-provided production URL, then to localhost for dev.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();
