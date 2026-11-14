export default function Loading() {
  return (
    <main className="state-page">
      <div className="loading-message" role="status" aria-live="polite">
        <span className="loading-dot" />
        Loading Folio Craft…
      </div>
    </main>
  );
}
