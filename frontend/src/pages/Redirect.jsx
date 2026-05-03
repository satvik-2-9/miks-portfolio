import React, { useEffect } from "react";

// Same-origin bridge: opens in a new tab safely, then forwards to the external URL.
// Bypasses COOP / sandboxed-iframe popup blocking when the parent frame is sandboxed.
export default function Redirect() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to") || "/";
    // Allow only http/https targets
    const isSafe = /^https?:\/\//i.test(to);
    if (isSafe) {
      // Replace so back button doesn't loop
      window.location.replace(to);
    } else {
      window.location.replace("/");
    }
  }, []);

  return (
    <div className="min-h-screen grid place-items-center bg-paper text-ink font-mono">
      <div className="text-center">
        <div className="text-[11px] tracking-[0.3em] uppercase text-ink/55 mb-3">Redirecting&hellip;</div>
        <div className="text-[14px] text-ink/75">Taking you to the link.</div>
      </div>
    </div>
  );
}
