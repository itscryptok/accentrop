import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, NewsletterSection, ContactSection, Footer } from "./App";

const ARTICLES = [
  {
    slug: "/blog/enterprise-services",
    tag: "Enterprise Services",
    title: "Enterprise-Grade Services",
    summary:
      "We keep most of our tools free despite real API costs — but when organisations need robust governance infrastructure, advanced compliance frameworks, and tailored safety guardrails, our enterprise services are ready to deliver.",
  },
  {
    slug: "/blog/human-vs-ai",
    tag: "AI Governance",
    title: "Human vs AI",
    summary:
      "As AI takes over everyday work, our role as humans shifts from creating technology to managing it. A personal account of pivoting from software engineering to AI governance — and an invitation to join the collective effort to keep AI safe, fair, and accountable.",
  },
  {
    slug: "/blog",
    tag: "AI Governance",
    title: "Proactive AI Governance Apparatus versus Mandatory AI Compliance Risk",
    summary:
      "Organizations integrating AI must navigate two distinct frameworks: compliance and governance. While compliance centers on mandatory obligations, governance focuses on internal control and organizational excellence — both are essential.",
  },
  {
    slug: "/blog/ai-regulations-global",
    tag: "AI Regulations",
    title: "The Global AI Regulation Landscape: What Every Organisation Needs to Know",
    summary:
      "AI regulation is accelerating worldwide. From the EU AI Act to emerging frameworks in the US, UK, and Africa — understanding where the lines are drawn is no longer optional for any organisation deploying AI.",
  },
  {
    slug: "/blog/ai-governance-accountability",
    tag: "AI Accountability",
    title: "Who Is Accountable? Mapping Responsibility in AI Governance",
    summary:
      "When an AI system causes harm, who is responsible — the developer, the deployer, or the user? Accountability in AI is complex, layered, and still evolving. This piece maps the key stakeholders and their roles.",
  },
  {
    slug: "/blog/ai-governance-collective",
    tag: "Collective Responsibility",
    title: "AI Governance as Collective Action: How Communities Can Shape AI's Future",
    summary:
      "Governance is not just for regulators and corporations. Communities, individuals, and civil society all have a role to play in shaping how AI develops — and the tools to do it are already here.",
  },
  {
    slug: "/blog/ai-governance-corporate-risk",
    tag: "Corporate Risk",
    title: "What Could Happen to a Company in 2026 If it Does not have a Robust AI Governance Framework?",
    summary:
      "If 100 AI experts were to be asked this question, their top 5 answers would cover legal exposure, reputational collapse, data leakage, operational instability, and talent drain — all predictable outcomes of ungoverned AI.",
  },
  {
    slug: "/blog/build-vs-buy-ai",
    tag: "AI Strategy",
    title: "What Is the Most Compelling Reason to Build Your Own AI Instead of Relying on Third-Party Providers?",
    summary:
      "If 100 AI experts were to be asked this question, their top 5 answers would cover data sovereignty, IP protection, operational resilience, custom business logic, and long-term strategic independence.",
  },
  {
    slug: "/blog/ai-compliance-us",
    tag: "AI Compliance",
    title: "What Are the Most Critical AI Compliance Areas for US Companies to Avoid Legal and Regulatory Risk?",
    summary:
      "If 100 AI experts were to be asked this question, their top 5 answers would span non-discrimination under Title VII, ADA accessibility, consumer disclosure, data privacy, and proactive bias testing — the five pillars of AI compliance in the United States.",
  },
  {
    slug: "/blog/cos",
    tag: "Corporate News",
    title: "OpenAI's Chief of Staff Agent",
    summary:
      "A non-profit that started small is now celebrating its Chief of Staff AI agent — a milestone made possible by early investors and a clear mission. Accentrop.com is here to support the next chapter of responsible AI advancement.",
  },
  {
    slug: "/blog/ai-governance-frontier",
    tag: "AI Governance",
    title: "The Real Frontier of AI Development Is Governance — and We Are Building It",
    summary:
      "Faster and smarter models are not enough. The next critical wave of AI innovation is governance. Accentrop.com is building the oversight frameworks and risk assessment tools organizations need to manage complex AI ecosystems responsibly.",
  },
  {
    slug: "/blog/ai-governance-schools",
    tag: "AI Institute",
    title: "The Only Schools Left Will Teach AI Governance",
    summary:
      "As AI learns to build and improve itself, the role of human educators will shift from teaching AI to governing it. The institutes that survive will be those that prepare humans to safely guide, oversee, and control autonomous systems.",
  },
];

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

export default function BlogArticlesPage() {
  useEffect(() => {
    document.title = "Blog Articles — Accentrop | AI Governance";
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
          Blog Articles
        </h1>

        <div className="flex flex-col gap-6">
          {ARTICLES.map((article) => (
            <div key={article.slug} className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-3 hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full px-3 py-0.5">
                  {article.tag}
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-foreground leading-snug">
                {article.title}
              </h2>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {article.summary}
              </p>

              <div className="flex items-center gap-4 pt-1">
                <Link
                  to={article.slug}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
                >
                  Read more <ArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
