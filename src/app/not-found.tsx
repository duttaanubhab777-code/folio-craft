import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-zinc-950 px-6 text-center text-zinc-100">
      <section>
        <p className="text-sm font-semibold tracking-[0.25em] text-violet-300">404 · NOT FOUND</p>
        <h1 className="mt-4 text-4xl font-semibold">This page wandered off.</h1>
        <p className="mt-3 text-sm text-zinc-400">The page you are looking for does not exist or may have moved.</p>
        <Link href="/" className="mt-7 inline-flex rounded-full bg-violet-300 px-5 py-3 text-sm font-semibold text-zinc-950">Back to home</Link>
      </section>
    </main>
  );
}
