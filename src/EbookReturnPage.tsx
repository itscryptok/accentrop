import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Header, Footer } from "./App";

type SessionStatus = "loading" | "complete" | "open" | "expired" | "error";

export default function EbookReturnPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<SessionStatus>("loading");

  useEffect(() => {
    document.title = "Completing Purchase — Accentrop";
  }, []);

  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    if (!sessionId) {
      setStatus("error");
      return;
    }

    const check = async () => {
      try {
        const res = await fetch(
          `/api/ebook/session-status?session_id=${encodeURIComponent(sessionId)}`,
        );
        if (!res.ok) throw new Error("Server error");
        const data = (await res.json()) as {
          status: string;
          token: string | null;
        };

        if (data.status === "complete" && data.token) {
          navigate(`/ebook/download/${data.token}`, { replace: true });
        } else if (data.status === "open") {
          setStatus("open");
        } else if (data.status === "expired") {
          setStatus("expired");
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    };

    void check();
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-xl mx-auto px-6 py-24 w-full flex flex-col items-center justify-center text-center gap-6">
        {status === "loading" && (
          <>
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
            <p className="text-lg font-semibold text-foreground">
              Confirming your payment…
            </p>
            <p className="text-sm text-muted-foreground">
              Please wait while we verify your purchase.
            </p>
          </>
        )}

        {status === "open" && (
          <>
            <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center">
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
                className="text-yellow-600"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <h1 className="text-2xl font-black text-foreground">
              Payment Incomplete
            </h1>
            <p className="text-muted-foreground">
              Your payment was not completed. Please go back and try again.
            </p>
            <a
              href="/ebook"
              className="px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-colors"
            >
              Back to E-Book
            </a>
          </>
        )}

        {(status === "error" || status === "expired") && (
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
              Something went wrong
            </h1>
            <p className="text-muted-foreground">
              We couldn't verify your purchase. If you were charged, please
              contact us at{" "}
              <a
                href="mailto:admin@accentrop.com"
                className="underline text-primary"
              >
                admin@accentrop.com
              </a>{" "}
              and we'll sort it out right away.
            </p>
            <a
              href="/ebook"
              className="px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-colors"
            >
              Back to E-Book
            </a>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
