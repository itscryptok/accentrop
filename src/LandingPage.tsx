import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, NewsletterSection, ContactSection, Footer } from "./App";

function InfoPopover({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, [open]);

  return (
    <div ref={ref} className="relative flex-shrink-0" style={{ zIndex: open ? 100 : "auto" }}>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); setOpen((o) => !o); }}
        aria-label="More information"
        className="flex items-center justify-center w-7 h-7 rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5A.75.75 0 0 0 12 9Z" clipRule="evenodd" />
        </svg>
      </button>
      {open && (
        <div
          className="absolute right-0 top-9 w-72 rounded-xl border border-border bg-card shadow-xl px-4 py-3 text-sm text-foreground leading-relaxed"
          style={{ zIndex: 9999, position: "absolute" }}
        >
          {text}
        </div>
      )}
    </div>
  );
}

interface ActionCardProps {
  label: string;
  infoText: string;
  to: string;
}

function ActionCard({ label, infoText, to }: ActionCardProps) {
  return (
    <div className="flex items-center gap-3 w-full rounded-2xl border border-border bg-card px-5 py-4 shadow-sm hover:shadow-md hover:border-primary/40 transition-all group">
      <Link
        to={to}
        className="flex items-center gap-3 flex-1 min-w-0 text-foreground group-hover:text-primary transition-colors"
      >
        <span className="flex-1 font-semibold text-base sm:text-lg leading-snug">{label}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 flex-shrink-0 text-primary opacity-70">
          <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
        </svg>
      </Link>
      <InfoPopover text={infoText} />
    </div>
  );
}

const CARDS = [
  {
    to: "/accent",
    label: "Is your accent ready for domestic robots? Check",
    infoText: "Sometimes your AI robot or tool may not understand your verbal intonations or accent.",
  },
  {
    to: "/hallucination",
    label: "Have you ever experienced AI hallucination? Share",
    infoText: "AI hallucination is when an artificial intelligence model confidently generates factually incorrect, fabricated, or nonsensical information that has no basis in reality.",
  },
  {
    to: "/boundary",
    label: "Have you ever experienced your AI tool violating set boundaries? Share",
    infoText: "If your AI does not understand to stay within set instruction boundaries — like sometimes overspends.",
  },
  {
    to: "/culture",
    label: "Have you ever experienced your AI lacking cultural nuance or idiom awareness? Share",
    infoText: "This includes your AI's ability to understand local slang, regional idioms, or cultural context.",
  },
  {
    to: "/discrimination",
    label: "Have you ever experienced any form of AI bias? Share",
    infoText: "This could be during a regular conversation, or interview, or AI assisted job application.",
  },
  {
    to: "/intellectual-property",
    label: "Have you ever experienced an intellectual property concern with your AI? Share",
    infoText: "If an AI tool exposed, reproduced, or generated content that may infringe on your intellectual property or trade secrets, document it here.",
  },
  {
    to: "/deepfake",
    label: "Have you ever experienced a deepfake in your AI output? Share",
    infoText: "Share only if you have proof.",
  },
  {
    to: "/accessibility",
    label: "Have you ever experienced an accessibility compliance issue with your AI? Share",
    infoText: "In case your AI isn't providing the necessary capability to ease your access to information you couldn't get due to your disability.",
  },
  {
    to: "/privacy-issue",
    label: "Have you ever experienced a data privacy issue with your AI? Share",
    infoText: "In case you have noticed your AI responses contain someone's public digital footprint.",
  },
  {
    to: "/environment",
    label: "Have you ever experienced adverse environmental impact from AI infrastructure in your area? Share",
    infoText: "Document the environmental effects of AI infrastructure — energy use, heat output, noise, or other local impacts — in your community.",
  },
  {
    to: "/other",
    label: "Have you ever experienced any other AI concern not listed above? Share",
    infoText: "If your AI experience doesn't fit any of the above, share it here.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-start px-4 py-16 sm:py-24">
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-10">

          <div className="text-center space-y-4">
            <h1 className="text-5xl sm:text-6xl font-black leading-tight text-foreground tracking-tight">
              Tools for AI governance
            </h1>
            <p className="text-base sm:text-lg text-muted-deep leading-relaxed max-w-lg mx-auto">
              Many are building apps with AI, we are building guardrails for AI. These are free-to-use tools.{" "}
              <a href="/donate" className="underline underline-offset-2 hover:text-foreground transition-colors">Donate to support R & D</a>
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Link
              to="/threats"
              className="flex items-center justify-between w-full rounded-2xl bg-primary text-white font-bold text-base px-6 py-4 hover:bg-primary/90 transition-colors shadow-md"
            >
              <span>AI Threat Modeling</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link
              to="/ai-risk"
              className="flex items-center justify-between w-full rounded-2xl bg-primary text-white font-bold text-base px-6 py-4 hover:bg-primary/90 transition-colors shadow-md"
            >
              <span>AI Risk Management Slider</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link
              to="/survey"
              className="flex items-center justify-between w-full rounded-2xl bg-primary text-white font-bold text-base px-6 py-4 hover:bg-primary/90 transition-colors shadow-md"
            >
              <span>AI experts survey</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            {CARDS.map((card) => (
              <ActionCard key={card.to} {...card} />
            ))}
          </div>

        </div>
      </main>

      <div className="max-w-2xl mx-auto px-6 py-6 w-full">
        <p className="text-sm text-foreground/70 text-center leading-relaxed border border-border/50 rounded-xl px-5 py-4 bg-card/50">
          <span className="font-semibold text-foreground/90">Disclaimer:</span> Data volunteered to this platform is used for insight to help train AI better for a more seamless human-AI interaction and is not for the pursuit of any legal causes.
        </p>
      </div>

      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
