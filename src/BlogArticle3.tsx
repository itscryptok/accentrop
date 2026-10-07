import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, NewsletterSection, ContactSection, Footer } from "./App";

export default function BlogArticle3() {
  useEffect(() => {
    document.title = "Who Is Accountable in AI Governance — Accentrop";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 w-full">
        <Link
          to="/blog-articles"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
            <path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/>
          </svg>
          More Blog Articles
        </Link>

        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full px-3 py-0.5">AI Accountability</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-primary mb-10 leading-tight">
          Who Is Accountable? Mapping Responsibility in AI Governance
        </h1>

        <div className="bg-muted rounded-2xl px-6 sm:px-10 py-8 space-y-8 text-foreground leading-relaxed">
          <p>
            When an AI system causes harm — a biased hiring decision, a dangerous medical recommendation, a discriminatory loan denial — the first question asked is always: who is responsible? The answer in AI is rarely simple. Accountability is distributed across a chain of stakeholders, and without clear mapping, it falls through the gaps entirely.
          </p>

          <hr className="border-border" />

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">The AI Accountability Chain</h2>
            <p className="mb-4">
              AI systems pass through many hands before they reach end users. Each transition point carries with it a share of responsibility that must be explicitly owned — not assumed.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                { term: "AI Developers", def: "Responsible for the foundational design choices — training data, model architecture, safety testing, and documentation. Developers set the outer limits of what an AI can and cannot do." },
                { term: "AI Deployers", def: "Organisations that take a model and integrate it into a product or service carry responsibility for how it is configured, what use cases it is applied to, and how users are informed." },
                { term: "Platform Operators", def: "Companies that host AI capabilities on their infrastructure (cloud providers, API platforms) bear responsibility for access controls, uptime, and preventing misuse at scale." },
                { term: "End Users", def: "Individuals using AI tools bear some responsibility for how they act on AI outputs — particularly in professional contexts where human judgement should remain in the loop." },
                { term: "Regulators and Governments", def: "Public institutions are accountable for setting rules that are enforceable, accessible, and reflective of public interest — including for communities that may not have a seat at the table." },
              ].map(({ term, def }) => (
                <li key={term} className="flex gap-2">
                  <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-primary" />
                  <span><strong className="text-foreground">{term}:</strong> {def}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Where Accountability Breaks Down</h2>
            <p className="mb-4">
              The complexity of modern AI supply chains creates conditions where no single actor feels fully responsible — and harms go unaddressed as a result. Common failure points include:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                { term: "The Black Box Problem", def: "When AI decision-making cannot be explained, it becomes nearly impossible to assign blame for a harmful outcome or fix the underlying cause." },
                { term: "Contractual Dilution", def: "Terms of service and API agreements often allow developers to disclaim liability, leaving deployers — and ultimately users — exposed." },
                { term: "Cross-Border Gaps", def: "When a model is developed in one country, deployed by a company in a second, and affects users in a third, no single regulator has clear jurisdiction." },
                { term: "Speed vs. Scrutiny", def: "Competitive pressure to ship fast leads teams to skip thorough impact assessments, creating accountability gaps that only surface after harm has occurred." },
              ].map(({ term, def }) => (
                <li key={term} className="flex gap-2">
                  <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-primary/60" />
                  <span><strong className="text-foreground">{term}:</strong> {def}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Building Genuine Accountability</h2>
            <ul className="space-y-3 mb-6">
              {[
                { term: "Name Owners Explicitly", def: "Every AI system should have a named accountable individual or team — not just a policy document." },
                { term: "Create Incident Mechanisms", def: "Users must have a real, accessible way to report AI harm. Feedback loops matter." },
                { term: "Publish Impact Assessments", def: "Proactive transparency about what an AI system can and cannot do, and what tests it passed, builds trust before problems arise." },
                { term: "Reward Reporting", def: "Organisations that surface their own AI failures and act on them should be seen as leaders — not liabilities." },
              ].map(({ term, def }) => (
                <li key={term} className="flex gap-2">
                  <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-primary" />
                  <span><strong className="text-foreground">{term}:</strong> {def}</span>
                </li>
              ))}
            </ul>
            <p className="bg-card rounded-lg px-5 py-4 text-sm font-medium text-muted-foreground border border-border">
              <strong className="text-foreground">Core Principle:</strong> Accountability without mechanism is just rhetoric. Real governance means named owners, real consequences, and accessible routes for those affected by AI to be heard.
            </p>
          </section>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <Link
            to="/blog/ai-regulations-global"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
              <path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/>
            </svg>
            Previous Article
          </Link>
          <Link
            to="/blog/ai-governance-collective"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
          >
            Next Article
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </main>
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
