import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header, NewsletterSection, ContactSection, Footer } from "./App";

interface ServiceProps {
  number: string;
  title: string;
  tag: string;
  tagline: string;
  description: string;
  capabilities: { heading: string; body: string }[];
}

function ServiceCard({ number, title, tag, tagline, description, capabilities }: ServiceProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <div className="px-6 sm:px-8 py-6 flex items-start gap-4">
        <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
          <span className="text-xs font-black text-primary">{number}</span>
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full px-3 py-0.5 mb-3 inline-block">
            {tag}
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-foreground leading-snug mb-1">{title}</h2>
          <p className="text-sm text-primary font-semibold italic mb-4">{tagline}</p>
          {!open && (
            <button
              onClick={() => setOpen(true)}
              className="text-sm font-bold text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
            >
              Read more
            </button>
          )}
        </div>
      </div>

      {open && (
        <div className="border-t border-border px-6 sm:px-8 py-8 space-y-8 text-foreground leading-relaxed">
          <p className="text-base">{description}</p>

          <div className="space-y-5">
            {capabilities.map((c) => (
              <div key={c.heading} className="flex gap-4">
                <div className="shrink-0 mt-1.5 w-2 h-2 rounded-full bg-primary" />
                <div>
                  <p className="font-bold text-foreground mb-1">{c.heading}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2 flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
            >
              Talk to us about this service
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="text-sm font-bold text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors"
            >
              Read less
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const SERVICES: ServiceProps[] = [
  {
    number: "01",
    title: "Agentic Shadow Auditor (CI/CD Governance Bot)",
    tag: "AI Governance Tooling",
    tagline: "Catch AI risk before it merges into your codebase.",
    description:
      "As AI integrations proliferate across engineering teams, ungoverned model calls, unreviewed system prompt changes, and accidental data exposure are becoming real compliance risks. We build a purpose-built agent that automatically evaluates every pull request for AI-related changes and scores them against your governance framework — before anything reaches production.",
    capabilities: [
      {
        heading: "Pre-merge AI risk detection",
        body: "Automatically identifies AI-related changes in every pull request and assesses them before code can reach production.",
      },
      {
        heading: "Governance scoring on every PR",
        body: "Each scan produces a structured risk score with severity classifications and targeted remediation guidance, delivered directly into your pull request workflow.",
      },
      {
        heading: "Configurable to your policies",
        body: "Risk thresholds and compliance boundaries are defined by your governance team — not by generic defaults.",
      },
      {
        heading: "Merge gate enforcement",
        body: "High-risk pull requests can be blocked from merging until flagged issues are resolved, keeping your delivery pipeline governance-compliant.",
      },
    ],
  },
  {
    number: "02",
    title: "The Deterministic Guardrail Studio",
    tag: "AI Runtime Governance",
    tagline: "Visual policy controls between your app and the LLM — no guesswork, no probabilistic safety.",
    description:
      "A low-code visual environment for engineering and governance teams to define, test, and deploy deterministic controls between applications and large language models. Policies are built visually, validated against real payloads in real time, and exported as portable configuration files — ready to enforce compliance at the middleware layer without introducing model-based uncertainty into your safety stack.",
    capabilities: [
      {
        heading: "Visual policy builder",
        body: "Define evaluation rules through a structured interface — no raw code required, making governance accessible to compliance and legal teams as well as engineers.",
      },
      {
        heading: "Deterministic enforcement",
        body: "Controls run as code, not models. Policies pass or fail with certainty, providing the audit-trail reliability that regulated industries require.",
      },
      {
        heading: "Real-time payload testing",
        body: "Validate policies against sample inputs and outputs before any deployment — see exactly which rules fire and why, without touching production.",
      },
      {
        heading: "Portable configuration output",
        body: "Policies export as clean, lightweight files that drop directly into application middleware — versionable in git, reviewable in PRs, and deployable across teams.",
      },
    ],
  },
  {
    number: "03",
    title: "AI Use-Case Intake & SLA Tracker",
    tag: "AI Governance Lifecycle",
    tagline: "Govern AI before it enters your development queue.",
    description:
      "Most enterprise AI risk is introduced before a single line of code is written — at the point where a product team decides to build an AI-powered feature. This service is the structured front door for that decision: a guided intake and lifecycle management system that captures proposed AI use cases, assesses their regulatory exposure, and tracks them through Security, Legal, and Compliance review under defined SLAs until the use case is approved, rejected, or conditionally closed.",
    capabilities: [
      {
        heading: "Structured AI use-case intake",
        body: "Product and engineering teams submit proposed AI features through a guided wizard that surfaces the information governance teams actually need — model type, data inputs, affected user populations, and intended decision scope.",
      },
      {
        heading: "Automatic regulatory triage",
        body: "Submissions are assessed against active regulatory frameworks to determine which formal reviews are required before development can proceed — including exposure to the EU AI Act, HIPAA, and other applicable standards.",
      },
      {
        heading: "SLA-driven review workflow",
        body: "Each use case is assigned a tracked review status with defined timelines across Security, Legal, and Compliance — keeping approvals moving, escalations visible, and accountability clear.",
      },
      {
        heading: "Conditions of approval and audit trail",
        body: "Approved use cases carry documented conditions that remain attached throughout the model's operational lifecycle, providing a complete governance record from intake to closure.",
      },
    ],
  },
  {
    number: "04",
    title: "Continuous Model Eval & Bias Monitor",
    tag: "AI Production Governance",
    tagline: "Know when your models stop behaving the way you approved them.",
    description:
      "Deploying a model is not the end of the governance process — it is the beginning of a continuous monitoring obligation. This service is a centralized dashboard for live tracking of model drift, hallucination frequencies, and fairness metrics across production features. It ingests anonymized inference logs, surfaces degradation patterns before they become compliance incidents, and maintains a structured audit trail aligned to frameworks like ISO 42001 — giving GRC and engineering teams a shared, always-current view of model health.",
    capabilities: [
      {
        heading: "Production inference log ingestion",
        body: "Anonymized inference logs flow into a centralized monitoring pipeline, giving governance teams visibility into real-world model behaviour without exposing user data.",
      },
      {
        heading: "Drift and hallucination detection",
        body: "Output distributions are continuously compared against established performance baselines, surfacing degradation patterns and hallucination frequency spikes before they escalate into compliance incidents.",
      },
      {
        heading: "Fairness and bias metrics",
        body: "Model outputs are evaluated across demographic and contextual dimensions to detect systematic disparities that may indicate bias creep — behaviour that often only becomes visible at production scale over time.",
      },
      {
        heading: "ISO 42001-aligned audit trail",
        body: "Every monitoring event, threshold breach, data lineage record, and remediation action is logged in a structured format aligned to external AI management system standards, ready for audit on demand.",
      },
    ],
  },
  {
    number: "05",
    title: "Vendor & Frontier Model Risk Assessor",
    tag: "Third-Party AI Risk",
    tagline: "Govern the AI your vendors have already embedded in your stack.",
    description:
      "Most enterprise AI risk programmes focus on models built internally — but the faster-growing exposure is AI that arrives pre-embedded in the SaaS tools your teams are already using. This service is a structured procurement and third-party risk management tool focused exclusively on vendor-embedded AI. It walks procurement and compliance teams through a rigorous evaluation of any vendor's AI claims, cross-referencing their data-handling policies against established frameworks and compiling the findings into a scored risk profile with a custom mitigation playbook.",
    capabilities: [
      {
        heading: "Structured vendor AI evaluation",
        body: "Procurement teams are guided through a consistent assessment of any third-party SaaS vendor that claims to use embedded AI — capturing data inputs, model provenance, retention policies, and subprocessor arrangements.",
      },
      {
        heading: "Framework cross-referencing",
        body: "Vendor disclosures are mapped against NIST AI RMF, SOC 2, and other applicable standards to identify gaps between what vendors claim and what the framework requires.",
      },
      {
        heading: "Automated risk scoring",
        body: "Each vendor assessment produces a quantified risk score across data-sharing, model transparency, incident response, and compliance posture — giving procurement committees a comparable, auditable basis for decisions.",
      },
      {
        heading: "Custom vendor-risk mitigation playbooks",
        body: "For vendors that pass with conditions, the system generates a tailored mitigation playbook specifying contractual protections, data-handling addenda, and monitoring obligations your team should put in place.",
      },
    ],
  },
];

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Services — Accentrop lab";
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

        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">What we build</p>
        <h1 className="text-3xl sm:text-4xl font-black text-primary mb-3 leading-tight">Services</h1>
        <p className="text-muted-foreground text-sm mb-12 max-w-xl">
          Beyond the free governance tools on this platform, we build custom AI governance infrastructure for organizations that need deeper technical integration. Tap any service to expand it.
        </p>

        <div className="flex flex-col gap-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>
      </main>
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
