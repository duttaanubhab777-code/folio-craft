"use client";

import { useEffect } from "react";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Connect an error-monitoring provider here when one is configured.
    console.error("Application route error:", error);
  }, [error]);

  return (
    <main className="grid min-h-screen place-items-center bg-zinc-950 px-6 text-center text-zinc-100">
      <section className="max-w-md">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Something went wrong</p>
        <h1 className="mt-4 text-3xl font-semibold">That page hit a snag.</h1>
        <p className="mt-3 text-sm leading-7 text-zinc-400">You can try rendering this page again.</p>
        <button onClick={() => reset()} className="mt-7 rounded-full bg-violet-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-violet-200">Try again</button>
      </section>
    </main>
  );
}
