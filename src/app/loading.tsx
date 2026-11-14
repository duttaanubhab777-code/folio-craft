export default function Loading() {
  return (
    <main className="grid min-h-screen place-items-center bg-zinc-950">
      <div className="flex items-center gap-3 text-sm text-zinc-400" role="status" aria-live="polite">
        <span className="size-2 animate-pulse rounded-full bg-violet-300" />
        Loading Folio Craft…
      </div>
    </main>
  );
}
