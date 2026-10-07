import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, NewsletterSection, ContactSection, Footer } from "./App";

export default function BlogArticle2() {
  useEffect(() => {
    document.title = "The Global AI Regulation Landscape — Accentrop";
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
          <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full px-3 py-0.5">AI Regulations</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-primary mb-10 leading-tight">
          The Global AI Regulation Landscape: What Every Organisation Needs to Know
        </h1>

        <div className="bg-muted rounded-2xl px-6 sm:px-10 py-8 space-y-8 text-foreground leading-relaxed">
          <p>
            AI regulation is no longer a future concern — it is a present reality. Governments and international bodies across the world are actively legislating, drafting standards, and establishing enforcement bodies to govern how artificial intelligence is built and deployed. For any organisation using or building AI, understanding this landscape is now a baseline operational requirement.
          </p>

          <hr className="border-border" />

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">The EU AI Act: Setting a Global Benchmark</h2>
            <p className="mb-4">
              The European Union's AI Act is the world's first comprehensive legal framework for artificial intelligence. It classifies AI systems by risk level — from minimal to unacceptable — and imposes obligations on developers and deployers accordingly.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                { term: "Unacceptable Risk", def: "Systems such as social scoring by governments and real-time biometric surveillance in public spaces are outright banned." },
                { term: "High Risk", def: "AI used in critical infrastructure, education, employment, and law enforcement must meet strict transparency and accuracy standards." },
                { term: "Limited Risk", def: "Chatbots and deepfake generators must clearly disclose their AI nature to users." },
                { term: "Minimal Risk", def: "AI in spam filters or recommendation engines faces minimal obligations but remains under the broader framework." },
              ].map(({ term, def }) => (
                <li key={term} className="flex gap-2">
                  <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-primary" />
                  <span><strong className="text-foreground">{term}:</strong> {def}</span>
                </li>
              ))}
            </ul>
            <p className="bg-card rounded-lg px-5 py-4 text-sm font-medium text-muted-foreground border border-border">
              <strong className="text-foreground">Key Takeaway:</strong> The EU AI Act has extraterritorial reach — any organisation providing AI systems to EU users must comply, regardless of where they are based.
            </p>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Emerging Frameworks Globally</h2>
            <p className="mb-4">
              While the EU leads with binding legislation, other regions are developing their own approaches — creating a patchwork of obligations that global organisations must navigate simultaneously.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                { term: "United States", def: "Sector-specific guidance from agencies like the FDA, FTC, and NIST, plus executive orders directing federal departments to assess AI risk. A federal AI law remains in progress." },
                { term: "United Kingdom", def: "A principles-based approach through the AI Safety Institute and sector regulators, favouring flexibility over prescriptive rules." },
                { term: "China", def: "Strict rules on generative AI content, recommendation algorithms, and deep synthesis technology, with strong state oversight requirements." },
                { term: "Africa & Global South", def: "The African Union AI policy framework encourages member states to develop national strategies. Countries like Kenya, Rwanda, and Egypt are leading continent-wide adoption." },
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
            <h2 className="text-2xl font-bold text-foreground mb-4">What Organisations Must Do Now</h2>
            <ul className="space-y-3 mb-6">
              {[
                { term: "Audit Your AI Inventory", def: "Know what AI systems you operate, procure, or embed into products. Regulation applies to the full chain." },
                { term: "Map Regulatory Exposure", def: "Identify which jurisdictions you operate in and which laws apply to each AI use case." },
                { term: "Assign Accountability", def: "Designate clear internal ownership for AI compliance across your technical, legal, and product teams." },
                { term: "Document Everything", def: "Most frameworks require evidence of risk assessments, testing results, and transparency disclosures. Start building records now." },
                { term: "Engage in Policy Dialogue", def: "Regulation is still being shaped. Organisations that participate in consultations have a real chance to influence outcomes." },
              ].map(({ term, def }) => (
                <li key={term} className="flex gap-2">
                  <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-primary/60" />
                  <span><strong className="text-foreground">{term}:</strong> {def}</span>
                </li>
              ))}
            </ul>
            <p className="bg-card rounded-lg px-5 py-4 text-sm font-medium text-muted-foreground border border-border">
              <strong className="text-foreground">Bottom Line:</strong> AI regulation is converging globally. The organisations that treat compliance as a foundation — rather than a checkbox — will be best positioned to build trust, avoid penalties, and scale responsibly.
            </p>
          </section>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <Link
            to="/blog-articles"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
              <path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/>
            </svg>
            All Articles
          </Link>
          <Link
            to="/blog/ai-governance-accountability"
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
