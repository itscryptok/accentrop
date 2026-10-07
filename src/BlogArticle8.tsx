import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, NewsletterSection, ContactSection, Footer } from "./App";

export default function BlogArticle8() {
  useEffect(() => {
    document.title = "OpenAI's Chief of Staff Agent — Accentrop";
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
            Corporate News
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-primary mb-4 leading-tight">
          OpenAI's Chief of Staff Agent Being Celebrated and Talked About
        </h1>
        <p className="text-muted-foreground text-sm mb-10">
          Accentrop.com can help too.
        </p>

        <div className="bg-muted rounded-2xl px-6 sm:px-10 py-8 space-y-8 text-foreground leading-relaxed">

          <p className="text-base">
            There was once a non-profit organization that started small — right where we are now.
            Today, they are at the forefront of AI tech advancement. On YouTube, Lee Spacagna
            discusses their state-of-the-art AI agent Chief of Staff, among other innovations. This
            progress was made possible through the support of major investors who stood by them in
            their early days.
          </p>

          <div className="bg-card rounded-xl border border-border px-6 py-5 space-y-2">
            <p className="text-sm font-bold text-foreground">Where Accentrop fits in</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <a
                href="https://accentrop.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:text-primary/80 font-semibold"
              >
                Accentrop.com
              </a>{" "}
              would love to help as well. All you need to do is use the free AI Governance tools for
              sharing your AI conversation history anytime it seems the AI tool steps on your toe —
              hallucinates, shows bias, creates an unwanted outcome, discriminates, and more. The
              Risk Management slider is there for your corporate needs. We look forward to seeing you
              support our AI governance initiatives through this webapp.
            </p>
          </div>

          <p className="text-base">
            Remember, AI Governance is our collective responsibility, especially now that it is
            nearly impossible to roll back the trend of AI advancement.
          </p>

          <div className="space-y-1 text-sm text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">Portfolio:</span>{" "}
              <a
                href="https://cryptok.online"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                cryptok.online
              </a>
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {[
              "#AIForAll",
              "#AIGovernance",
              "#Corporate",
              "#AI",
              "#News",
              "#CorporateNews",
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-primary/70 bg-primary/5 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>
      </main>
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
