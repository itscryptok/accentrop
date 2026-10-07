import { useState, useEffect, useCallback } from "react";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

const QUESTIONS = [
  "AI produces incorrect or fabricated information (hallucinations)",
  "AI violates user data privacy or leaks sensitive information",
  "AI produces biased or discriminatory responses",
  "AI exceeds its defined operational boundaries or instructions",
  "AI generates deepfake or synthetic media without clear disclosure",
  "AI fails to meet accessibility needs for users with disabilities",
  "AI generates insecure code or security-compromising recommendations",
  "AI infrastructure causes significant local environmental or energy impact",
];
const FREQ = ["Never", "Rarely", "Sometimes", "Often", "Always"];

const SESSION_KEY = "accentrop_admin_pw";

type Tab = "risk" | "reports" | "recordings";

interface RiskRow {
  id: number;
  sliders: number[];
  comments: string[];
  report: string;
  createdAt: string;
}
interface ReportRow {
  id: number;
  category: string;
  aiTool: string;
  experience: string;
  name: string;
  email: string;
  occurrenceDate: string;
  createdAt: string;
}
interface RecordingRow {
  id: number;
  origin: string | null;
  spokenText: string;
  heardText: string;
  createdAt: string;
}

function fmt(iso: string) {
  return new Date(iso).toLocaleString(undefined, {
    year: "numeric", month: "short", day: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}

export default function AdminPage() {
  const [pw, setPw] = useState("");
  const [authed, setAuthed] = useState(() => !!sessionStorage.getItem(SESSION_KEY));
  const [loginErr, setLoginErr] = useState("");
  const [tab, setTab] = useState<Tab>("risk");
  const [riskRows, setRiskRows] = useState<RiskRow[]>([]);
  const [reportRows, setReportRows] = useState<ReportRow[]>([]);
  const [recordingRows, setRecordingRows] = useState<RecordingRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [expandedRisk, setExpandedRisk] = useState<number | null>(null);
  const [expandedReport, setExpandedReport] = useState<number | null>(null);
  const [expandedRecording, setExpandedRecording] = useState<number | null>(null);

  const savedPw = sessionStorage.getItem(SESSION_KEY) ?? "";

  const fetchTab = useCallback(async (t: Tab, password: string) => {
    setLoading(true);
    const path = t === "risk" ? "risk-assessments" : t === "reports" ? "ai-reports" : "recordings";
    const res = await fetch(`${BASE}/api/admin/${path}`, {
      headers: { "x-admin-password": password },
    });
    setLoading(false);
    if (!res.ok) return;
    const data = await res.json() as unknown[];
    if (t === "risk") setRiskRows(data as RiskRow[]);
    else if (t === "reports") setReportRows(data as ReportRow[]);
    else setRecordingRows(data as RecordingRow[]);
  }, []);

  useEffect(() => {
    if (authed) fetchTab(tab, savedPw);
  }, [authed, tab, fetchTab, savedPw]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginErr("");
    const res = await fetch(`${BASE}/api/admin/verify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pw }),
    });
    if (res.ok) {
      sessionStorage.setItem(SESSION_KEY, pw);
      setAuthed(true);
    } else {
      setLoginErr("Incorrect password.");
    }
  }

  function handleLogout() {
    sessionStorage.removeItem(SESSION_KEY);
    setAuthed(false);
    setPw("");
  }

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm bg-card border border-border rounded-2xl shadow-lg p-8 flex flex-col gap-5"
        >
          <div>
            <h1 className="text-2xl font-black text-primary tracking-tight">Admin Login</h1>
            <p className="text-sm text-muted-foreground mt-1">Accentrop Dashboard</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-foreground" htmlFor="pw">Password</label>
            <input
              id="pw"
              type="password"
              autoFocus
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="Enter admin password"
            />
          </div>
          {loginErr && <p className="text-sm text-red-500">{loginErr}</p>}
          <button
            type="submit"
            className="w-full rounded-lg bg-primary text-white font-bold text-sm py-2.5 hover:bg-primary/90 transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    );
  }

  const TABS: { key: Tab; label: string; count: number }[] = [
    { key: "risk", label: "Risk Assessments", count: riskRows.length },
    { key: "reports", label: "AI Reports", count: reportRows.length },
    { key: "recordings", label: "Accent Recordings", count: recordingRows.length },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl font-black text-primary tracking-tight">Accentrop</span>
            <span className="text-sm text-muted-foreground font-medium">/ Admin</span>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Sign out
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Tab bar */}
        <div className="flex gap-1 mb-8 border border-border rounded-xl p-1 w-fit bg-card">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 ${
                tab === t.key
                  ? "bg-primary text-white shadow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
              <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${tab === t.key ? "bg-white/20" : "bg-muted"}`}>
                {t.count}
              </span>
            </button>
          ))}
        </div>

        {loading && (
          <div className="flex items-center gap-2 text-muted-foreground text-sm py-8">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            Loading…
          </div>
        )}

        {/* Risk Assessments */}
        {!loading && tab === "risk" && (
          <div className="flex flex-col gap-4">
            {riskRows.length === 0 && (
              <p className="text-muted-foreground text-sm py-8">No risk assessments saved yet.</p>
            )}
            {riskRows.map((row) => (
              <div key={row.id} className="border border-border rounded-2xl bg-card overflow-hidden shadow-sm">
                <button
                  type="button"
                  onClick={() => setExpandedRisk(expandedRisk === row.id ? null : row.id)}
                  className="w-full px-6 py-4 flex items-start justify-between gap-4 text-left hover:bg-muted/30 transition-colors"
                >
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="text-xs text-muted-foreground font-mono">#{row.id}</span>
                    <span className="text-sm text-muted-foreground">{fmt(row.createdAt)}</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {(row.sliders ?? []).map((v, i) => (
                        <span
                          key={i}
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            v === 0 ? "bg-muted text-muted-foreground"
                            : v === 1 ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : v === 2 ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                            : v === 3 ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                            : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                          }`}
                        >
                          {FREQ[v] ?? "?"}
                        </span>
                      ))}
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    className={`shrink-0 mt-1 transition-transform ${expandedRisk === row.id ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>

                {expandedRisk === row.id && (
                  <div className="border-t border-border px-6 py-5 flex flex-col gap-5">
                    {/* Sliders + comments */}
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Selections</p>
                      <div className="flex flex-col gap-2">
                        {QUESTIONS.map((q, i) => {
                          const val = (row.sliders ?? [])[i] ?? 0;
                          const comment = (row.comments ?? [])[i] ?? "";
                          return (
                            <div key={i} className="rounded-lg border border-border bg-background px-4 py-3">
                              <div className="flex items-center justify-between gap-3 flex-wrap">
                                <span className="text-sm text-foreground flex-1">{q}</span>
                                <span className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 ${
                                  val === 0 ? "bg-muted text-muted-foreground"
                                  : val === 1 ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                  : val === 2 ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                                  : val === 3 ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                                  : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                                }`}>
                                  {FREQ[val] ?? "?"}
                                </span>
                              </div>
                              {comment && (
                                <p className="text-xs text-muted-foreground mt-1.5 italic">"{comment}"</p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    {/* Generated report */}
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Generated Report</p>
                      <pre className="whitespace-pre-wrap text-sm text-foreground leading-relaxed bg-muted/30 rounded-lg px-4 py-4 font-sans border border-border overflow-auto max-h-96">
                        {row.report}
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* AI Reports */}
        {!loading && tab === "reports" && (
          <div className="flex flex-col gap-4">
            {reportRows.length === 0 && (
              <p className="text-muted-foreground text-sm py-8">No AI reports saved yet.</p>
            )}
            {reportRows.map((row) => (
              <div key={row.id} className="border border-border rounded-2xl bg-card overflow-hidden shadow-sm">
                <button
                  type="button"
                  onClick={() => setExpandedReport(expandedReport === row.id ? null : row.id)}
                  className="w-full px-6 py-4 flex items-start justify-between gap-4 text-left hover:bg-muted/30 transition-colors"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground font-mono">#{row.id}</span>
                      <span className="text-xs font-bold uppercase tracking-wide bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                        {row.category}
                      </span>
                    </div>
                    {row.aiTool && <span className="text-sm text-foreground font-medium">{row.aiTool}</span>}
                    <span className="text-xs text-muted-foreground">{fmt(row.createdAt)}</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    className={`shrink-0 mt-1 transition-transform ${expandedReport === row.id ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>

                {expandedReport === row.id && (
                  <div className="border-t border-border px-6 py-5 flex flex-col gap-4">
                    {row.name && (
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Submitted by</p>
                        <p className="text-sm text-foreground">{row.name}{row.email ? ` — ${row.email}` : ""}</p>
                      </div>
                    )}
                    {row.occurrenceDate && (
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Date of occurrence</p>
                        <p className="text-sm text-foreground">{row.occurrenceDate}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Experience</p>
                      <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">{row.experience}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Recordings */}
        {!loading && tab === "recordings" && (
          <div className="flex flex-col gap-4">
            {recordingRows.length === 0 && (
              <p className="text-muted-foreground text-sm py-8">No accent recordings saved yet.</p>
            )}
            {recordingRows.map((row) => (
              <div key={row.id} className="border border-border rounded-2xl bg-card overflow-hidden shadow-sm">
                <button
                  type="button"
                  onClick={() => setExpandedRecording(expandedRecording === row.id ? null : row.id)}
                  className="w-full px-6 py-4 flex items-start justify-between gap-4 text-left hover:bg-muted/30 transition-colors"
                >
                  <div className="flex flex-col gap-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground font-mono">#{row.id}</span>
                      {row.origin && (
                        <span className="text-xs font-medium text-muted-foreground">{row.origin}</span>
                      )}
                    </div>
                    <span className="text-sm text-foreground font-medium truncate">{row.spokenText || "(no spoken text)"}</span>
                    <span className="text-xs text-muted-foreground">{fmt(row.createdAt)}</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    className={`shrink-0 mt-1 transition-transform ${expandedRecording === row.id ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>

                {expandedRecording === row.id && (
                  <div className="border-t border-border px-6 py-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">What they said</p>
                      <p className="text-sm text-foreground leading-relaxed">{row.spokenText || "—"}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">What AI heard</p>
                      <p className="text-sm text-foreground leading-relaxed">{row.heardText || "—"}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
