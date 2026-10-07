import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, NewsletterSection, ContactSection, Footer } from "./App";

const AREAS = [
  {
    number: "01",
    title: "Non-Discrimination Under Title VII",
    body: "Companies must ensure that algorithmic decision-making tools used in hiring, promotion, or termination do not result in a disparate impact against protected classes — such as race, color, religion, sex, or national origin — unless the tools are strictly job-related and consistent with business necessity.",
  },
  {
    number: "02",
    title: "Accessibility and ADA Compliance",
    body: "Organizations are required to provide reasonable accommodations for individuals with disabilities when using AI hiring or assessment tools, ensuring that systems do not unfairly screen out qualified candidates based on sensory, manual, or speaking impairments.",
  },
  {
    number: "03",
    title: "Transparency and Consumer Disclosure",
    body: "Under various federal and state mandates, companies must provide clear notice when AI is involved in decision-making or content generation, ensuring users are informed when they are interacting with an AI system or when their data is being processed by one.",
  },
  {
    number: "04",
    title: "Data Privacy and Protection",
    body: "Organizations must adhere to strict data governance standards to protect personal information used by AI, ensuring that data collection and processing activities align with existing privacy laws and internal security policies.",
  },
  {
    number: "05",
    title: "Proactive Bias Testing and Accountability",
    body: "To mitigate legal liability, companies must establish robust programs for continuous bias testing, audit trail maintenance, and human oversight to identify and correct potential discriminatory outputs before they cause harm.",
  },
];

export default function BlogArticle7() {
  useEffect(() => {
    document.title = "Top 5 AI Compliance Areas for US Companies — Accentrop";
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
            AI Compliance
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-primary mb-4 leading-tight">
          What Are the Most Critical AI Compliance Areas for US Companies to Avoid Legal and Regulatory Risk?
        </h1>
        <p className="text-muted-foreground text-sm mb-10">
          If 100 AI experts were to be asked, these are the top 5 answers you'd get.
        </p>

        <div className="bg-muted rounded-2xl px-6 sm:px-10 py-8 space-y-8 text-foreground leading-relaxed">

          <p className="text-base">
            If you were to ask 100 AI experts —{" "}
            <strong>
              "What are the most critical AI compliance areas that a company operating in the United
              States must prioritize to avoid legal and regulatory risk?"
            </strong>{" "}
            — their answers converge on five urgent priorities every US organization deploying AI must address.
          </p>

          <hr className="border-border" />

          <div className="space-y-8">
            {AREAS.map((area) => (
              <div key={area.number} className="flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-black text-primary">{area.number}</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-foreground mb-2">{area.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{area.body}</p>
                </div>
              </div>
            ))}
          </div>

          <hr className="border-border" />

          <div className="bg-card rounded-xl border border-border px-6 py-5 space-y-2">
            <p className="text-sm font-bold text-foreground">The takeaway</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI compliance in the United States is not a single regulation — it is a layered
              landscape spanning civil rights law, disability law, consumer protection, data privacy,
              and emerging accountability standards. Companies that treat these five areas as
              non-negotiable will be best positioned to deploy AI responsibly and withstand regulatory
              scrutiny.
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
