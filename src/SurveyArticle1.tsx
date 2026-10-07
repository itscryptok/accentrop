import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, NewsletterSection, ContactSection, Footer } from "./App";

const ANSWERS = [
  {
    rank: "01",
    title: "Legal and Regulatory Exposure",
    body: "The company would face significant risks of non-compliance with evolving global AI regulations, leading to heavy fines, costly litigation, and potential forced operational shutdowns. With the EU AI Act, US executive orders, and sector-specific mandates accelerating in 2026, companies without documented governance frameworks have no defensible audit trail.",
  },
  {
    rank: "02",
    title: "Reputational Damage and Loss of Trust",
    body: "Any unintended bias, toxic output, or security breach caused by ungoverned AI models would permanently damage the brand's credibility with customers, partners, and stakeholders. In 2026, customers are increasingly AI-literate and will hold brands accountable for how their AI systems behave.",
  },
  {
    rank: "03",
    title: "Intellectual Property and Data Leakage",
    body: "Without strict internal guardrails, proprietary data and trade secrets could be inadvertently leaked into public AI models, eroding the company's competitive advantage. Employees using ungoverned AI tools to assist with sensitive work is one of the most common and underestimated vectors for IP loss.",
  },
  {
    rank: "04",
    title: "Operational Instability & AI Hallucinations",
    body: "Reliance on unverified AI systems would likely lead to unpredictable business decisions, erroneous automated customer interactions, and internal process failures that disrupt core services. Without a governance layer to validate AI outputs, hallucinations can propagate silently into product decisions and customer-facing communications.",
  },
  {
    rank: "05",
    title: "Strategic Misalignment & Talent Drain",
    body: "The lack of a clear governance structure would hinder long-term AI strategy, discouraging top-tier technical talent from joining or remaining at an organization that fails to prioritize ethical and technical standards. In 2026, senior AI engineers and ethics leads actively evaluate governance maturity before accepting roles.",
  },
];

export default function SurveyArticle1() {
  useEffect(() => {
    document.title = "What Could Happen to a Company in 2026 Without AI Governance? 100 Experts Answer — Accentrop";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 w-full">
        <Link
          to="/survey"
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
          100 AI Experts Survey
        </Link>

        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full px-3 py-0.5">
            Corporate Risk
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-primary mb-4 leading-tight">
          What Could Happen to a Company in 2026 If it Does not have a Robust AI Governance Framework?
        </h1>
        <p className="text-muted-foreground text-sm mb-10">
          If 100 AI experts were asked, these are the top 5 answers you'd get.
        </p>

        <div className="bg-muted rounded-2xl px-6 sm:px-10 py-8 space-y-8 text-foreground leading-relaxed">

          <p className="text-base">
            If you were to ask 100 AI experts the question —{" "}
            <strong>
              "What could happen to a company in 2026 if it lacks a robust AI governance framework?"
            </strong>{" "}
            — the answers converge around five consistent, urgent themes. Here are the top five responses you'd hear.
          </p>

          <hr className="border-border" />

          <div className="space-y-8">
            {ANSWERS.map((answer) => (
              <div key={answer.rank} className="flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-black text-primary">{answer.rank}</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-foreground mb-2">{answer.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{answer.body}</p>
                </div>
              </div>
            ))}
          </div>

          <hr className="border-border" />

          <div className="bg-card rounded-xl border border-border px-6 py-5 space-y-2">
            <p className="text-sm font-bold text-foreground">The takeaway</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI governance is no longer a nice-to-have — it is a survival requirement for any company deploying AI in 2026. Legal exposure, reputational collapse, data leakage, operational chaos, and talent loss are not theoretical risks. They are the predictable outcomes of operating without a framework.
            </p>
          </div>

          <div className="pt-2">
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
      </main>
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
