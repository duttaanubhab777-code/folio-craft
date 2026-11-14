import Link from "next/link";
import { ArrowRight, Check, LayoutTemplate, Palette, Sparkles } from "lucide-react";

const features = [
  { icon: LayoutTemplate, title: "Thoughtful templates", description: "Start with a clear structure and make every section your own." },
  { icon: Palette, title: "Your visual identity", description: "Shape colors, typography, and details around your personal brand." },
  { icon: Sparkles, title: "A polished result", description: "Create a responsive portfolio that is ready to share with the world." }
];

export default function HomePage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-24rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute right-[-12rem] top-[28rem] h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label="Folio Craft home">
          <span className="grid size-10 place-items-center rounded-xl bg-violet-300 text-lg font-black text-zinc-950">F</span>
          <span className="text-lg font-semibold tracking-tight">folio craft<span className="text-violet-300">.</span></span>
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-3">
          <Link href="#features" className="hidden rounded-full px-4 py-2 text-sm text-zinc-400 transition hover:text-white sm:inline-flex">Features</Link>
          <Link href="https://vercel.com/new" className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition hover:border-violet-300/60 hover:bg-white/5">Deploy on Vercel <ArrowRight className="ml-2 inline size-4" /></Link>
        </nav>
      </header>
      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 pb-24 pt-24 text-center sm:pt-32">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/[0.07] px-4 py-2 text-xs font-medium tracking-wide text-violet-200">
          <Sparkles className="size-3.5" /> YOUR WORK. YOUR STORY. YOUR PORTFOLIO.
        </div>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.06] tracking-[-0.055em] sm:text-7xl">
          Make your next opportunity <span className="bg-gradient-to-r from-violet-200 via-fuchsia-200 to-indigo-200 bg-clip-text text-transparent">find you.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
          Folio Craft is being built to help creators, students, and professionals turn their work into a portfolio they are proud to share.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Link href="#features" className="inline-flex items-center justify-center rounded-full bg-violet-300 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-violet-200">
            Explore the foundation <ArrowRight className="ml-2 size-4" />
          </Link>
          <span className="inline-flex items-center gap-2 px-4 py-3 text-sm text-zinc-500"><Check className="size-4 text-emerald-400" /> Built with Next.js App Router</span>
        </div>
      </section>
      <section id="features" className="mx-auto grid max-w-6xl gap-4 px-6 pb-28 md:grid-cols-3 lg:px-10">
        {features.map(({ icon: Icon, title, description }) => (
          <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:border-violet-300/30">
            <span className="mb-6 grid size-11 place-items-center rounded-xl bg-violet-300/10 text-violet-200"><Icon className="size-5" /></span>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{description}</p>
          </article>
        ))}
      </section>
      <footer className="border-t border-white/10 px-6 py-7 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} Folio Craft. Crafted with intention.
      </footer>
    </main>
  );
}
