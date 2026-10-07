import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, NewsletterSection, ContactSection, Footer } from "./App";

const REASONS = [
  {
    number: "01",
    title: "Total Control Over Data Sovereignty and Security",
    body: "By building proprietary systems, a company ensures that sensitive data never leaves its secure perimeter, eliminating the risks associated with third-party data handling.",
  },
  {
    number: "02",
    title: "Protection Against Intellectual Property Theft",
    body: "Developing in-house models mitigates the risk that a third-party vendor might train on or inadvertently expose proprietary company trade secrets, effectively safeguarding the organization's unique competitive advantage.",
  },
  {
    number: "03",
    title: "Mitigation of Operational Instability",
    body: "Relying on external vendors introduces dependency risks; building internally prevents the operational instability that can occur if a third-party system is not properly vetted, experiences downtime, or updates in a way that breaks core workflows.",
  },
  {
    number: "04",
    title: "Alignment with Custom Business Logic",
    body: "Proprietary systems can be fine-tuned to reflect the specific operational nuances, industry standards, and internal culture of the organization, offering a level of precision that generic third-party models often lack.",
  },
  {
    number: "05",
    title: "Long-Term Strategic Independence",
    body: "Building internal capabilities reduces vendor lock-in, providing the company with the autonomy to pivot its AI strategy based on internal needs rather than being constrained by the roadmap or pricing changes of a service provider.",
  },
];

export default function BlogArticle6() {
  useEffect(() => {
    document.title = "Build vs. Buy AI? 100 Experts on Why to Build Your Own — Accentrop";
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
            AI Strategy
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-primary mb-4 leading-tight">
          What Is the Most Compelling Reason to Build Your Own AI Instead of Relying on Third-Party Providers?
        </h1>
        <p className="text-muted-foreground text-sm mb-10">
          If 100 AI experts were to be asked, these are the top 5 answers you'd get.
        </p>

        <div className="bg-muted rounded-2xl px-6 sm:px-10 py-8 space-y-8 text-foreground leading-relaxed">

          <p className="text-base">
            If you were to ask 100 AI experts —{" "}
            <strong>
              "What is the most compelling reason for a company to prioritize building its own AI
              systems over relying exclusively on third-party providers?"
            </strong>{" "}
            — the answers cluster around five consistent strategic imperatives.
          </p>

          <hr className="border-border" />

          <div className="space-y-8">
            {REASONS.map((reason) => (
              <div key={reason.number} className="flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-black text-primary">{reason.number}</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-foreground mb-2">{reason.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.body}</p>
                </div>
              </div>
            ))}
          </div>

          <hr className="border-border" />

          <div className="bg-card rounded-xl border border-border px-6 py-5 space-y-2">
            <p className="text-sm font-bold text-foreground">The takeaway</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building internal AI capability is not just a technical decision — it is a strategic one.
              Data sovereignty, IP protection, operational resilience, precision alignment, and
              long-term independence are five reasons that consistently emerge when experts consider
              the build-versus-buy question seriously.
            </p>
          </div>

        </div>
      </main>
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
