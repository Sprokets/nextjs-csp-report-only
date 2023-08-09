import { headers } from "next/headers";
import Script from "next/script";

export default function ExternalScript() {
  const nonce = headers().get("x-nonce") || "";

  return (
    <Script
      nonce={nonce}
      strategy="lazyOnload"
      data-domain="nextjs-csp-report-only.vercel.app"
      src="https://plausible.io/js/script.js"
    />
  );
}
