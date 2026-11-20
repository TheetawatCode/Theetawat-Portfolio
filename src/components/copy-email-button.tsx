"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

/** Copies the address for visitors without a configured mail client; mailto stays the primary action. */
export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard can be blocked (insecure context, permissions); the address stays visible to copy by hand.
    }
  }

  return (
    <button className="copy-email" type="button" onClick={copy} aria-label={copied ? "Email copied" : `Copy ${email}`}>
      <span>{email}</span>
      {copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
      <span className="copy-email-status" aria-live="polite">{copied ? "Copied" : ""}</span>
    </button>
  );
}
