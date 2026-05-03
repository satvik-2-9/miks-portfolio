// Build a same-origin redirect URL so that target="_blank" links work reliably
// even when the page is hosted inside a sandboxed iframe (e.g. Emergent preview).
// The /go page does an immediate window.location.replace to the external URL.
export function ext(url) {
  if (!url) return "/";
  return `/go?to=${encodeURIComponent(url)}`;
}
