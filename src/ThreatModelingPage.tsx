import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Header, NewsletterSection, ContactSection, Footer } from "./App";

const ARTICLES = [
  {
    slug: "/threats/rail",
    title: "Modelling AI Threat for an Autonomous Perception Layer in Autonomous Rail Transit",
    domain: "Autonomous Rail Transit — Sensor Fusion & Dynamic Object Classification Layer",
  },
  {
    slug: "/threats/banking",
    title: "Modelling AI Threat for a Model Monitoring and Drift Detection Layer in AI-driven Credit Scoring",
    domain: "Retail Banking — Model Monitoring & Drift Detection Layer",
  },
  {
    slug: "/threats/telecom",
    title: "Modelling AI Threat in a Telecom Infrastructure",
    domain: "Telecom — Logical Execution Layer",
    preview:
      "In zero-touch, self-healing telecommunications infrastructure, two autonomous AI agents accessed the same SDN routing table simultaneously without a shared-state lock — triggering an autonomous control-loop race condition that dropped connectivity for over 150,000 active subscribers.",
  },
  {
    slug: "/threats/aerospace",
    title: "Modelling AI Threat for an Autonomous Collision-Avoidance Layer in Aerospace and Satellite Operations",
    domain: "Aerospace — Sensor-to-Actuation Edge Inference Layer",
    preview:
      "As mega-constellations crowd Low Earth Orbit, an onboard neural network optimized only for pairwise avoidance geometry miscalculates the probability of collision in a multi-object conjunction scenario — burning critical propellant reserves and vectoring the spacecraft directly into an oncoming debris cluster.",
  },
];

interface ThreatModel {
  title: string;
  domain: string;
  problemStatement: string;
  operationalIntervention: string;
  strategicReadiness: string;
  governanceGaps: string[];
}

function ThreatModelTool() {
  const [domain, setDomain] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [result, setResult] = useState<ThreatModel | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = (data: ThreatModel) => {
    const text = [
      data.title,
      "",
      "THE PROBLEM STATEMENT",
      data.problemStatement,
      "",
      "OPERATIONAL INTERVENTION",
      data.operationalIntervention,
      "",
      "STRATEGIC FUTURE READINESS",
      data.strategicReadiness,
      "",
      "KEY GOVERNANCE GAPS",
      ...data.governanceGaps.map((g) => `• ${g}`),
    ].join("\n");
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const generate = async () => {
    if (!domain.trim()) return;
    setStatus("loading");
    setResult(null);
    setErrorMsg("");

    try {
      const res = await fetch("/api/threat-model", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain: domain.trim() }),
      });
      const data = await res.json() as ThreatModel & { error?: string };
      if (!res.ok || data.error) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setResult(data);
      setStatus("done");
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section id="tool" className="mb-14 scroll-mt-24">
      <h2 className="text-xl font-black text-foreground mb-2">Try It</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Paste the industry domain{" "}
        <span className="bg-[#f5e6c8] text-foreground px-0.5 rounded-sm">you'd like to model in the box below</span>
        {" "}— for example <em>autonomous surgical robotics</em> or <em>AI-driven credit scoring in retail banking</em>.
      </p>

      <div className="space-y-3">
        <textarea
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="Enter your industry domain here…"
          rows={6}
          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none leading-relaxed"
        />
        <button
          onClick={generate}
          disabled={status === "loading" || !domain.trim()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors shadow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
              </svg>
              Generating case study…
            </>
          ) : (
            <>
              Generate case study
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
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
                {result.domain}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-primary leading-snug">
                {result.title}
              </h3>
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

          <div>
            <h4 className="text-base font-bold text-foreground mb-3">The Problem Statement</h4>
            <p className="text-sm leading-relaxed">{result.problemStatement}</p>
          </div>

          <div>
            <h4 className="text-base font-bold text-foreground mb-3">Operational Intervention</h4>
            <p className="text-sm leading-relaxed">{result.operationalIntervention}</p>
          </div>

          <div>
            <h4 className="text-base font-bold text-foreground mb-3">Strategic Future Readiness</h4>
            <p className="text-sm leading-relaxed">{result.strategicReadiness}</p>
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-sm font-bold text-foreground mb-3">Key governance gaps identified</p>
            <ul className="space-y-2">
              {result.governanceGaps.map((gap) => (
                <li key={gap} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60" />
                  {gap}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors shadow self-start"
            >
              Discuss threat modeling for your organisation
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

export default function ThreatModelingPage() {
  const [toolOpen, setToolOpen] = useState(false);

  useEffect(() => {
    document.title = "AI Threat Modeling — Accentrop lab";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 w-full">
        <Link
          to="/"
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
          Back
        </Link>

        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">AI Governance</p>
        <h1 className="text-3xl sm:text-4xl font-black text-primary mb-3 leading-tight">AI Threat Modeling</h1>
        <p className="text-muted-foreground text-sm mb-4 max-w-xl">
          As the world's reliance on AI continues to expand, let's model AI intervention strategies across industry domains — from problem statement through operational response to strategic prevention.
        </p>
        <button
          onClick={() => setToolOpen((o) => !o)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors shadow mb-4"
        >
          Try out the AI threat modeling tool
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${toolOpen ? "rotate-180" : ""}`}>
            <path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>
          </svg>
        </button>

        {/* Interactive Tool — collapsible, directly below button */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${toolOpen ? "max-h-[2000px] opacity-100 mb-10" : "max-h-0 opacity-0 mb-0"}`}>
          <ThreatModelTool />
        </div>

        {/* The Prompt */}
        <section className="mb-14">
          <h2 className="text-xl font-black text-foreground mb-4">The Prompt</h2>
          <div className="bg-muted rounded-2xl px-6 sm:px-8 py-6 text-sm text-foreground/80 leading-relaxed space-y-4 border border-border">
            <p>
              Can you develop an AI Governance case study for me and my audience, that models AI intervention strategies for the industry domain that I am going to paste next. Focus on three knowledge areas:
            </p>
            <ul className="space-y-2 pl-4">
              <li className="flex gap-2">
                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/70" />
                <span><strong className="text-foreground">The problem statement</strong> — what happens when the AI system misfire/fails at one specific layer (in one paragraph).</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/70" />
                <span><strong className="text-foreground">The operational intervention</strong> — a logical analysis of the steps taken to resolve the issue (in one paragraph).</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/70" />
                <span><strong className="text-foreground">Strategic future readiness</strong> — a final recommendation on how to prevent a situational occurrence of this kind.</span>
              </li>
            </ul>
            <p>
              The article header should show as: <em className="text-foreground font-medium">Modelling AI threat for a [Domain area]</em> (for example — logical operation layer in a Telecom infrastructure).
            </p>
          </div>
        </section>

        {/* Case Study Previews */}
        <section>
          <h2 className="text-xl font-black text-foreground mb-6">Case Studies</h2>
          <div className="flex flex-col gap-6">
            {ARTICLES.map((article) => (
              <div
                key={article.slug}
                className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-3 hover:border-primary/40 transition-colors"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full px-3 py-0.5 self-start">
                  {article.domain}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {article.preview}
                </p>
                <div className="pt-1">
                  <Link
                    to={article.slug}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
                  >
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
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
