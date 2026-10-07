import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, NewsletterSection, ContactSection, Footer } from "./App";

export default function BlogArticle11() {
  useEffect(() => {
    document.title = "Human vs AI — Accentrop";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 w-full">
        <Link
          to="/blog-articles"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:-translate-x-1 transition-transform"
          >
            <path d="M19 12H5" />
            <path d="M12 5l-7 7 7 7" />
          </svg>
          More Blog Articles
        </Link>

        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full px-3 py-0.5">
            AI Governance
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-primary mb-10 leading-tight">
          Human vs AI
        </h1>

        <div className="bg-muted rounded-2xl px-6 sm:px-10 py-8 space-y-8 text-foreground leading-relaxed">

          <p className="text-base">
            As artificial intelligence continues to advance, it will eventually take over most
            everyday work. When that happens, our main job as humans will shift from creating
            technology to managing and nurturing it.
          </p>

          <p className="text-base">
            After AI changed the job market and made it slightly more difficult to find software
            Engineering and Architect positions, I decided to pivot to a new path — one that led me
            straight to AI governance. I became deeply interested in how we control and guide these
            systems, so I used my technical background to start building tools to solve these big
            challenges.
          </p>

          <div className="bg-card rounded-xl border border-border px-6 py-5 space-y-2">
            <p className="text-sm font-bold text-foreground">What we are building</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I would love for you to take a moment to look at the tools I have built so far at{" "}
              <a
                href="https://accentrop.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:text-primary/80 font-semibold"
              >
                Accentrop.com
              </a>
              . Today, AI governance is something that no company can afford to ignore.
            </p>
          </div>

          <p className="text-base">
            We warmly invite you to join us, support our work, and collaborate. Keeping AI safe,
            fair, and accountable is a massive responsibility that belongs to all of us — and it
            must be a collective global effort.
          </p>

        </div>
      </main>
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
