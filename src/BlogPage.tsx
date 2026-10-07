import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, NewsletterSection, ContactSection, Footer } from "./App";

export default function BlogPage() {
  useEffect(() => {
    document.title = "Blog — Accentrop | Cryp Tok Solutions";
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
          Back
        </Link>
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">Blog</p>
        <h1 className="text-3xl sm:text-4xl font-black text-primary mb-10 leading-tight">
          Proactive AI Governance Apparatus versus Mandatory AI Compliance Risk
        </h1>

        <div className="bg-muted rounded-2xl px-6 sm:px-10 py-8 space-y-8 text-foreground leading-relaxed">
          <p>
            To effectively integrate artificial intelligence, organizations must navigate two distinct but complementary frameworks: AI compliance and AI governance. While both aim to manage the risks and opportunities presented by emerging technology, they operate from different motivations and utilize different operational triggers.
          </p>

          <hr className="border-border" />

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">AI Compliance: Navigating Necessary Obligations</h2>
            <p className="mb-4">
              Compliance focuses on adhering to mandatory standards, industry-specific frameworks, and formal contractual commitments. It is a structured effort to ensure that an organization fulfills its required obligations to avoid legal, financial, or operational repercussions.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                { term: "Externally Defined", def: "Requirements originate from independent standards bodies, industry-specific benchmarks, or formal agreements with partners." },
                { term: "Mandatory", def: "These obligations are non-negotiable; failure to meet them often leads to direct penalties or loss of license." },
                { term: "Auditable", def: "Adherence must be proven through rigorous documentation, reporting, and verifiable evidence." },
                { term: "Specific", def: "Obligations are typically granular, requiring precise tasks such as standardized risk assessments, conformity tests, or formal disclosures." },
                { term: "Reactive", def: "This approach is fundamentally responsive, centering on the requirements established by outside entities." },
              ].map(({ term, def }) => (
                <li key={term} className="flex gap-2">
                  <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-primary" />
                  <span><strong className="text-foreground">{term}:</strong> {def}</span>
                </li>
              ))}
            </ul>
            <p className="bg-muted rounded-lg px-5 py-4 text-sm font-medium text-muted-foreground">
              <strong className="text-foreground">Core Question:</strong> Are we meeting our essential legal and professional obligations?
            </p>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">AI Governance: Cultivating Organizational Excellence</h2>
            <p className="mb-4">
              Governance moves beyond minimum requirements to focus on internal control. It is the framework an organization builds to ensure AI behavior remains consistent with its unique risk appetite, operational objectives, and corporate standards.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                { term: "Internally Defined", def: "These controls are born from your organization's specific strategic goals, technical capabilities, and cultural values." },
                { term: "Discretionary", def: "The depth and style of control are determined by your leadership based on what is appropriate for your specific environment." },
                { term: "Operational", def: "Controls are woven into the daily execution of AI, shifting the focus from paperwork to real-time performance." },
                { term: "Comprehensive", def: "Governance covers the entire lifecycle of AI usage, reaching into areas that may not yet be subject to external scrutiny." },
                { term: "Proactive", def: "This approach is preventive and forward-looking, defining how the organization should behave to prevent failure and maximize success." },
              ].map(({ term, def }) => (
                <li key={term} className="flex gap-2">
                  <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-primary" />
                  <span><strong className="text-foreground">{term}:</strong> {def}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-bold text-foreground mb-3">Key Control Areas</h3>
            <ul className="space-y-3 mb-6">
              {[
                { term: "Access and Usage", def: "Defining who interacts with AI tools and which datasets they are permitted to utilize." },
                { term: "Lifecycle Management", def: "Establishing criteria for when a model is commissioned, monitored, and eventually decommissioned." },
                { term: "Output and Behavior", def: "Implementing technical guardrails to manage the quality, tone, and accuracy of generated content." },
                { term: "Autonomy Limits", def: "Setting clear boundaries regarding which AI tasks require human intervention or approval." },
                { term: "Efficiency", def: "Monitoring consumption, costs, and resource allocation to ensure AI initiatives remain sustainable." },
              ].map(({ term, def }) => (
                <li key={term} className="flex gap-2">
                  <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-primary/60" />
                  <span><strong className="text-foreground">{term}:</strong> {def}</span>
                </li>
              ))}
            </ul>

            <p className="bg-muted rounded-lg px-5 py-4 text-sm font-medium text-muted-foreground">
              <strong className="text-foreground">Core Question:</strong> Are we managing our AI capabilities in a way that aligns with our own goals and risk tolerance?
            </p>
          </section>
        </div>
      </main>
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
