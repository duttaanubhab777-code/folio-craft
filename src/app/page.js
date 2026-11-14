import Link from "next/link";
import { ArrowRight, Check, LayoutTemplate, Palette, Sparkles } from "lucide-react";

const features = [
  { icon: LayoutTemplate, title: "Thoughtful templates", description: "Start with a clear structure and make every section your own." },
  { icon: Palette, title: "Your visual identity", description: "Shape colors, typography, and details around your personal brand." },
  { icon: Sparkles, title: "A polished result", description: "Create a responsive portfolio that is ready to share with the world." }
];

export default function HomePage() {
  return (
    <main className="site-main">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="site-header">
        <Link href="/" className="brand" aria-label="Folio Craft home">
          <span className="brand-mark">F</span>
          <span>folio craft<span className="brand-dot">.</span></span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="#features" className="nav-link">Features</Link>
          <Link href="https://vercel.com/new" className="nav-cta">Deploy on Vercel <ArrowRight size={16} /></Link>
        </nav>
      </header>

      <section className="hero">
        <div className="eyebrow"><Sparkles size={14} /> YOUR WORK. YOUR STORY. YOUR PORTFOLIO.</div>
        <h1>Make your next opportunity <span>find you.</span></h1>
        <p className="hero-description">
          Folio Craft is being built to help creators, students, and professionals turn their work into a portfolio they are proud to share.
        </p>
        <div className="hero-actions">
          <Link href="#features" className="primary-button">Explore the foundation <ArrowRight size={16} /></Link>
          <span className="built-note"><Check size={16} /> Built with Next.js App Router</span>
        </div>
      </section>

      <section id="features" className="features-grid">
        {features.map(({ icon: Icon, title, description }) => (
          <article key={title} className="feature-card">
            <span className="feature-icon"><Icon size={21} /></span>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </section>

      <footer className="site-footer">
        © {new Date().getFullYear()} Folio Craft. Crafted with intention.
      </footer>
    </main>
  );
}
