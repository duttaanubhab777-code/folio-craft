import Link from "next/link";

export default function NotFound() {
  return (
    <main className="state-page">
      <section className="state-content">
        <p className="state-eyebrow">404 · NOT FOUND</p>
        <h1>This page wandered off.</h1>
        <p className="state-description">The page you are looking for does not exist or may have moved.</p>
        <Link href="/" className="primary-button">Back to home</Link>
      </section>
    </main>
  );
}
