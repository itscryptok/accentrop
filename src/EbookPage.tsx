import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { Header, NewsletterSection, ContactSection, Footer } from "./App";

const stripePromise = loadStripe(
  import.meta.env["VITE_STRIPE_PUBLISHABLE_KEY"] as string,
);

export default function EbookPage() {
  const [showCheckout, setShowCheckout] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Algorithms of Abundance — E-Book | Accentrop";
  }, []);

  const fetchClientSecret = useCallback(async () => {
    const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
    const returnUrl = `${window.location.origin}${basePath}/ebook/return`;

    const res = await fetch("/api/ebook/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ returnUrl }),
    });

    if (!res.ok) throw new Error("Failed to start checkout");
    const data = (await res.json()) as { clientSecret: string };
    return data.clientSecret;
  }, []);

  const handleBuyClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const secret = await fetchClientSecret();
      setClientSecret(secret);
      setShowCheckout(true);
    } catch {
      setError("Could not start checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-2xl mx-auto px-6 py-16 w-full">
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

        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">
          E-Book
        </p>
        <h1 className="text-3xl sm:text-4xl font-black text-primary mb-2 leading-tight">
          Algorithms of Abundance
        </h1>
        <p className="text-base text-muted-foreground mb-1">
          Building operational control into AI systems to solve the world's
          problem, not add to it
        </p>
        <p className="text-sm text-muted-foreground/70 mb-10">
          by <span className="font-semibold">Captain Tok</span> · © 2026
        </p>

        <div className="bg-muted rounded-2xl px-6 sm:px-10 py-8 space-y-6 text-foreground mb-8">

          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <img
              src="/book-cover.png"
              alt="Dominating Hunger book cover"
              className="w-40 sm:w-48 rounded-xl shadow-lg shrink-0"
            />
            <div className="space-y-4">
              <p className="text-base leading-relaxed">
                We are living through the fastest technological revolution in
                history. Every day, Artificial Intelligence becomes more capable —
                yet our global approach to it is becoming more dangerous. We treat
                AI as an arms race rather than a gift to humanity.
              </p>
              <p className="text-base leading-relaxed">
                <em>"Algorithms of Abundance"</em> is an urgent letter to the
                human race. It shows that there is another path: one where AI is
                built as a collaborative tool to protect and uplift us all —
                governed by operational controls that keep machines aligned with
                our shared survival.
              </p>
            </div>
          </div>

          <hr className="border-border" />

          {!showCheckout ? (
            <div className="space-y-4">
              <button
                onClick={handleBuyClick}
                disabled={loading}
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary text-white font-bold text-base py-3.5 hover:bg-primary/90 transition-colors shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <svg
                    className="animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                ) : (
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
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                )}
                {loading ? "Starting checkout…" : "Buy E-Book — $3.99"}
              </button>
              {error && (
                <p className="text-sm text-red-500 text-center">{error}</p>
              )}
              <p className="text-xs text-muted-foreground text-center">
                Secure payment powered by Stripe · PDF delivered instantly after
                purchase
              </p>
            </div>
          ) : clientSecret ? (
            <div className="rounded-xl overflow-hidden -mx-4">
              <EmbeddedCheckoutProvider
                stripe={stripePromise}
                options={{ clientSecret }}
              >
                <EmbeddedCheckout />
              </EmbeddedCheckoutProvider>
            </div>
          ) : null}
        </div>
      </main>
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
