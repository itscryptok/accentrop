import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Header, NewsletterSection, ContactSection, Footer } from "./App";

type SurveyResult = {
  question: string;
  intro: string;
  answers: { rank: string; title: string; body: string }[];
  takeaway: string;
};

const ARTICLES = [
  {
    slug: "/survey/ai-governance-2026",
    question: "What Could Happen to a Company in 2026 If it Does not have a Robust AI Governance Framework?",
    tag: "Corporate Risk",
    preview:
      "If 100 AI experts were asked — the answers converge around five consistent, urgent themes: legal exposure, reputational collapse, data leakage, operational instability, and talent drain.",
  },
];

function SurveyTool() {
  const [question, setQuestion] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [result, setResult] = useState<SurveyResult | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = (data: SurveyResult) => {
    const text = [
      data.question,
      "",
      data.intro,
      "",
      ...data.answers.flatMap((a) => [`${a.rank}. ${a.title}`, a.body, ""]),
      "THE TAKEAWAY",
      data.takeaway,
    ].join("\n");
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const generate = async () => {
    if (!question.trim()) return;
    setStatus("loading");
    setResult(null);
    setErrorMsg("");
    try {
      const res = await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: question.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setResult(data);
      setStatus("done");
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section id="tool" className="mb-14 scroll-mt-24">
      <h2 className="text-xl font-black text-foreground mb-2">Try It</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Paste any AI governance question{" "}
        <span className="bg-[#f5e6c8] text-foreground px-0.5 rounded-sm">you'd like to survey in the box below</span>
        {" "}— for example <em>What are the biggest risks of deploying AI without human oversight?</em> or{" "}
        <em>What Could Happen to a Company in 2026 If it Does not have a Robust AI Governance Framework?</em>
      </p>

      <div className="space-y-3">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows={6}
          placeholder="What are the biggest risks of deploying AI without human oversight? or What Could Happen to a Company in 2026 If it Does not have a Robust AI Governance Framework?"
          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
        />
        <button
          onClick={generate}
          disabled={status === "loading" || !question.trim()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors shadow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
              </svg>
              Surveying experts…
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
              </svg>
              Ask 100 experts
            </>
          )}
        </button>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-500 font-medium">{errorMsg}</p>
      )}

      {status === "done" && result && (
        <div ref={resultRef} className="mt-8 bg-muted rounded-2xl px-6 sm:px-10 py-8 space-y-8 text-foreground leading-relaxed border border-border">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full px-3 py-0.5 mb-3 inline-block">
                100 AI Experts
              </span>
              <h3 className="text-lg sm:text-xl font-black text-primary leading-snug">
                {result.question}
              </h3>
              <p className="text-sm text-muted-foreground mt-2">{result.intro}</p>
            </div>
            <button
              onClick={() => copyToClipboard(result)}
              className="shrink-0 mt-1 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-semibold text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              title="Copy to clipboard"
            >
              {copied ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Copied
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                  Copy
                </>
              )}
            </button>
          </div>

          <hr className="border-border" />

          <div className="space-y-8">
            {result.answers.map((answer) => (
              <div key={answer.rank} className="flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-black text-primary">{answer.rank}</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-foreground mb-2">{answer.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{answer.body}</p>
                </div>
              </div>
            ))}
          </div>

          <hr className="border-border" />

          <div className="bg-card rounded-xl border border-border px-6 py-5">
            <p className="text-sm font-bold text-foreground mb-1">The takeaway</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{result.takeaway}</p>
          </div>

          <div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors shadow self-start"
            >
              Discuss AI governance for your organisation
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

export default function SurveyPage() {
  const [toolOpen, setToolOpen] = useState(false);

  useEffect(() => {
    document.title = "100 AI Experts Survey Tool — Accentrop lab";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 w-full">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
            <path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/>
          </svg>
          Home
        </Link>

        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">AI Governance</p>
        <h1 className="text-3xl sm:text-4xl font-black text-primary mb-3 leading-tight">100 AI Experts Survey</h1>
        <p className="text-muted-foreground text-sm mb-4 max-w-xl">
          What would 100 leading AI experts say if we ask them some AI Governance-related questions
        </p>
        <button
          onClick={() => setToolOpen((o) => !o)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors shadow mb-4"
        >
          Try out the 100 AI experts survey tool
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${toolOpen ? "rotate-180" : ""}`}>
            <path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>
          </svg>
        </button>

        {/* Interactive tool — collapsible, directly below button */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${toolOpen ? "max-h-[2000px] opacity-100 mb-10" : "max-h-0 opacity-0 mb-0"}`}>
          <SurveyTool />
        </div>

        {/* The Prompt */}
        <section className="mb-14">
          <h2 className="text-xl font-black text-foreground mb-4">The Prompt</h2>
          <div className="bg-muted rounded-2xl px-6 sm:px-10 py-8 border border-border">
            <p className="text-sm text-foreground leading-relaxed font-mono">
              If 100 AI experts were asked this question, what would your top 3 to 5 answers be?
            </p>
          </div>
        </section>

        {/* Sample articles */}
        <section>
          <h2 className="text-xl font-black text-foreground mb-6">Survey Answers</h2>
          <div className="flex flex-col gap-4">
            {ARTICLES.map((article) => (
              <div key={article.slug} className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-3 hover:border-primary/40 transition-colors">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full px-3 py-0.5 w-fit">
                  {article.tag}
                </span>
                <h3 className="text-base font-bold text-foreground leading-snug">{article.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{article.preview}</p>
                <Link
                  to={article.slug}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary/80 transition-colors w-fit"
                >
                  Read the full survey
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
