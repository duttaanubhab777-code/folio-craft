"use client";

import { useEffect } from "react";

export default function ErrorPage({ error, reset }) {
  useEffect(() => {
    // Connect an error-monitoring provider here when one is configured.
    console.error("Application route error:", error);
  }, [error]);

  return (
    <main className="state-page">
      <section className="state-content">
        <p className="state-eyebrow">Something went wrong</p>
        <h1>That page hit a snag.</h1>
        <p className="state-description">You can try rendering this page again.</p>
        <button onClick={() => reset()} className="primary-button">Try again</button>
      </section>
    </main>
  );
}
