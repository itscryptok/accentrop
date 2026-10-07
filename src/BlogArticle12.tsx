import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, NewsletterSection, ContactSection, Footer } from "./App";

export default function BlogArticle12() {
  useEffect(() => {
    document.title = "Enterprise-Grade Services — Accentrop";
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
            Enterprise Services
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-primary mb-10 leading-tight">
          Enterprise-Grade Services
        </h1>

        <div className="bg-muted rounded-2xl px-6 sm:px-10 py-8 space-y-8 text-foreground leading-relaxed">

          <p className="text-base">
            We are proud to provide those free-to-use tools that you see on our homepage for collective AI governance, but we also want you to be aware that we offer premium, enterprise-grade professional services that you'll see when you click the Services menu at{" "}
            <a href="https://accentrop.com" className="text-primary underline underline-offset-2 hover:text-primary/80">accentrop.com</a>.
            Our team of experts is fully equipped and ready to deploy customized solutions whenever your organization needs to implement strict guardrails and advanced risk management. So reach out to us for all those private-sector and government contracts.
          </p>

          <p className="text-base">
            Our comprehensive suite of enterprise-grade services is specifically built to handle heavy technical demands and advanced compliance frameworks — from pre-deployment risk assessment and CI/CD governance automation, to runtime enforcement controls, lifecycle tracking, production monitoring, and third-party vendor risk evaluation.
          </p>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">The Bigger Picture</h2>
            <p className="text-base">
              And just remember we said this first — when all is said and done, and AI is fully integrated into the entire human workforce by pioneers like OpenAI, Anthropic, and several others, the primary role left for humans will be managing and governing these autonomous systems.
            </p>
            <p className="text-base mt-4">
              To effectively oversee a fully automated workforce, companies will absolutely need automated tools capable of quickly mitigating risks and keeping agents from going wild. This is exactly why we are seeking to pioneer this crucial area of AI advancement. Securing the future of technology is a shared responsibility, and we warmly invite you to come support what we are building at{" "}
              <a href="https://accentrop.com" className="text-primary underline underline-offset-2 hover:text-primary/80">Accentrop.com</a>.
            </p>
          </div>

          <div className="pt-2 flex flex-col gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors shadow self-start"
            >
              Get in touch
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
            <p className="text-xs text-muted-foreground tracking-wide">
              #AIGovernance #OpenAI #Anthropic #FutureOfAI #AI #Robotics
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
