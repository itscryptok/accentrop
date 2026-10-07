import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, NewsletterSection, ContactSection, Footer } from "./App";

const STRIPE_DONATE_URL = "https://buy.stripe.com/6oUeVc79r9ItcYq17C7Re00";

export default function DonatePage() {
  useEffect(() => {
    document.title = "Donate to support R & D — Accentrop | Cryp Tok Solutions";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-2xl mx-auto px-6 py-16 w-full">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
            <path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/>
          </svg>
          Back
        </Link>
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">Support Us</p>
        <h1 className="text-3xl sm:text-4xl font-black text-primary mb-4 leading-tight">
          Donate to support R & D
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-xl">
          We need funds to continue to build and maintain these AI Governance apps, and also to subscribe to APIs for running the app.
        </p>

        <a
          href={STRIPE_DONATE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary text-white font-bold text-base py-3.5 hover:bg-primary/90 transition-colors shadow-md mb-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          Donate via Stripe
        </a>

        <div className="bg-muted rounded-2xl px-6 sm:px-10 py-10 space-y-6 text-foreground">
          <p className="text-base leading-relaxed">
            <strong className="text-primary">Accentrop.com</strong> is a free platform built and maintained by{" "}
            <a
              href="https://cryptok.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2 hover:text-primary/80 font-semibold"
            >
              Cryp Tok Solutions
            </a>
            . Every donation, no matter the size, directly funds server costs, AI API subscriptions, and new feature development.
          </p>
          <p className="text-base leading-relaxed">
            Your support helps us keep these tools free and accessible to everyone working towards better human-AI interactions.
          </p>
          <p className="text-xs text-muted-foreground text-center">
            Secure payment powered by Stripe. You will be redirected to a Stripe-hosted page.
          </p>
        </div>
      </main>
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
