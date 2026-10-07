import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header, Footer } from "./App";

type TokenState =
  | { status: "loading" }
  | { status: "valid"; expiresAt: Date; downloadedAt: Date | null }
  | { status: "expired" }
  | { status: "not_found" }
  | { status: "error" };

function formatTimeRemaining(expiresAt: Date): string {
  const ms = expiresAt.getTime() - Date.now();
  if (ms <= 0) return "expired";
  const h = Math.floor(ms / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  const s = Math.floor((ms % 60_000) / 1_000);
  if (h > 0) return `${h}h ${m}m remaining`;
  if (m > 0) return `${m}m ${s}s remaining`;
  return `${s}s remaining`;
}

export default function EbookDownloadPage() {
  const { token } = useParams<{ token: string }>();
  const [state, setState] = useState<TokenState>({ status: "loading" });
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    document.title = "Download Algorithms of Abundance — Accentrop";
  }, []);

  useEffect(() => {
    if (!token) {
      setState({ status: "not_found" });
      return;
    }

    const validate = async () => {
      try {
        const res = await fetch(`/api/ebook/validate-token/${token}`);
        if (res.status === 404) {
          setState({ status: "not_found" });
          return;
        }
        if (res.status === 410) {
          setState({ status: "expired" });
          return;
        }
        if (!res.ok) {
          setState({ status: "error" });
          return;
        }
        const data = (await res.json()) as {
          valid: boolean;
          expiresAt: string;
          downloadedAt: string | null;
          reason?: string;
        };
        if (!data.valid) {
          if (data.reason === "expired") setState({ status: "expired" });
          else setState({ status: "not_found" });
          return;
        }
        setState({
          status: "valid",
          expiresAt: new Date(data.expiresAt),
          downloadedAt: data.downloadedAt ? new Date(data.downloadedAt) : null,
        });
      } catch {
        setState({ status: "error" });
      }
    };

    void validate();
  }, [token]);

  useEffect(() => {
    if (state.status !== "valid") return;
    const update = () => setTimeLeft(formatTimeRemaining(state.expiresAt));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [state]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-2xl mx-auto px-6 py-16 w-full flex flex-col items-center justify-center text-center gap-8">
        {state.status === "loading" && (
          <svg
            className="animate-spin text-primary"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
        )}

        {state.status === "valid" && (
          <>
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-primary mb-3 leading-tight">
                Thank you for your purchase!
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
                Your copy of{" "}
                <strong className="text-foreground">Algorithms of Abundance</strong>{" "}
                by Captain Tok is ready to download.
              </p>
            </div>

            <div className="w-full max-w-md rounded-2xl border-4 border-red-500 bg-red-50 dark:bg-red-950/30 px-6 py-5">
              <p className="text-red-600 dark:text-red-400 font-black text-lg uppercase tracking-wide mb-1">
                ⚠ This link expires in 3 hours
              </p>
              <p className="text-red-700 dark:text-red-300 font-bold text-2xl tabular-nums">
                {timeLeft}
              </p>
              <p className="text-red-600 dark:text-red-400 text-sm mt-2">
                Download your PDF now — this link cannot be shared or reused
                after it expires.
              </p>
            </div>

            <a
              href={`/api/ebook/download/${token}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold text-base hover:bg-primary/90 transition-colors shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download PDF Now
            </a>

            <div className="rounded-xl border border-border bg-card px-6 py-5 w-full max-w-md text-left">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Algorithms of Abundance</strong> —
                Building operational control into AI systems to solve the
                world's problem, not add to it.
                <br />
                <span className="text-xs">by Captain Tok · © 2026</span>
              </p>
            </div>

            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← Back to home
            </Link>
          </>
        )}

        {state.status === "expired" && (
          <>
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-orange-500"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h1 className="text-2xl font-black text-foreground">
              This download link has expired
            </h1>
            <p className="text-muted-foreground max-w-md">
              Download links are valid for 3 hours after purchase. If you
              believe this is an error, contact us at{" "}
              <a
                href="mailto:admin@accentrop.com"
                className="underline text-primary"
              >
                admin@accentrop.com
              </a>
              .
            </p>
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← Back to home
            </Link>
          </>
        )}

        {(state.status === "not_found" || state.status === "error") && (
          <>
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-500"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </div>
            <h1 className="text-2xl font-black text-foreground">
              Invalid download link
            </h1>
            <p className="text-muted-foreground max-w-md">
              This link doesn't exist or has already been used. If you've
              purchased the ebook, contact us at{" "}
              <a
                href="mailto:admin@accentrop.com"
                className="underline text-primary"
              >
                admin@accentrop.com
              </a>
              .
            </p>
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← Back to home
            </Link>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
