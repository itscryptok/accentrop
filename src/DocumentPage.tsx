import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Header, NewsletterSection, ContactSection, Footer } from "./App";

interface DocumentPageProps {
  category: string;
  title: string;
  description: string;
  experiencePlaceholder?: string;
}

const AI_TOOLS = [
  "ChatGPT",
  "Claude (Anthropic)",
  "Gemini (Google)",
  "Copilot (Microsoft)",
  "Grok (xAI)",
  "Perplexity",
  "Meta AI",
  "Other / Not listed",
];

function aiLabel(aiTool: string, otherPlatform: string) {
  if (!aiTool || aiTool === "Other / Not listed") return otherPlatform.trim() || "AI";
  return aiTool.replace(/\s*\(.*?\)/, "").trim();
}

type Message = { speaker: "user" | "ai"; text: string };

function ConversationCapture({
  aiName,
  onChange,
}: {
  aiName: string;
  onChange: (value: string) => void;
}) {
  const [mode, setMode] = useState<"full" | "messages">("full");
  const [fullText, setFullText] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentSpeaker, setCurrentSpeaker] = useState<"user" | "ai">("user");
  const [currentText, setCurrentText] = useState("");
  const [uploadOpen, setUploadOpen] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "ok" | "error">("idle");
  const [uploadFileName, setUploadFileName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function updateFull(val: string) {
    setFullText(val);
    onChange(JSON.stringify({ mode: "full", text: val }));
  }

  function addMessage() {
    if (!currentText.trim()) return;
    const next: Message[] = [...messages, { speaker: currentSpeaker, text: currentText.trim() }];
    setMessages(next);
    setCurrentText("");
    setCurrentSpeaker(currentSpeaker === "user" ? "ai" : "user");
    onChange(JSON.stringify({ mode: "messages", messages: next }));
    setTimeout(() => textareaRef.current?.focus(), 0);
  }

  function removeMessage(i: number) {
    const next = messages.filter((_, idx) => idx !== i);
    setMessages(next);
    onChange(JSON.stringify({ mode: "messages", messages: next }));
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      addMessage();
    }
  }

  function switchMode(m: "full" | "messages") {
    setMode(m);
    onChange("");
  }

  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.name.endsWith(".txt")) {
      setUploadStatus("error");
      setUploadFileName(file.name);
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = (ev.target?.result as string) ?? "";
      setFullText(text);
      setMode("full");
      onChange(JSON.stringify({ mode: "full", text, sourceFile: file.name }));
      setUploadStatus("ok");
      setUploadFileName(file.name);
    };
    reader.onerror = () => {
      setUploadStatus("error");
      setUploadFileName(file.name);
    };
    reader.readAsText(file);
    e.target.value = "";
  }

  return (
    <div className="rounded-xl border border-border bg-background overflow-hidden">
      <div className="px-4 pt-4 pb-3 border-b border-border">
        <p className="text-sm font-semibold text-foreground mb-3">
          Share the conversation{" "}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => switchMode("full")}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border ${
              mode === "full"
                ? "bg-foreground text-background border-foreground"
                : "bg-transparent text-foreground/60 border-border hover:border-foreground/40"
            }`}
          >
            Full conversation
          </button>
          <button
            type="button"
            onClick={() => switchMode("messages")}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border ${
              mode === "messages"
                ? "bg-foreground text-background border-foreground"
                : "bg-transparent text-foreground/60 border-border hover:border-foreground/40"
            }`}
          >
            Message by message
          </button>
        </div>
      </div>

      {mode === "full" ? (
        <div className="p-4">
          <textarea
            rows={6}
            value={fullText}
            onChange={(e) => updateFull(e.target.value)}
            placeholder="Paste your full conversation here…"
            className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-sm"
          />
          {fullText && (
            <p className="text-xs text-muted-foreground mt-1">{fullText.length} characters</p>
          )}
        </div>
      ) : (
        <div className="p-4 space-y-4">
          {messages.length > 0 && (
            <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
              {messages.map((m, i) => (
                <div key={i} className={`flex gap-2 ${m.speaker === "user" ? "" : "flex-row-reverse"}`}>
                  <div
                    className={`flex-1 rounded-xl px-3 py-2 text-sm leading-relaxed ${
                      m.speaker === "user"
                        ? "bg-primary text-white"
                        : "bg-card border border-border text-foreground"
                    }`}
                  >
                    <span className="block text-[10px] font-bold uppercase tracking-wider opacity-60 mb-0.5">
                      {m.speaker === "user" ? "You" : aiName}
                    </span>
                    {m.text}
                  </div>
                  <button
                    type="button"
                    onClick={() => removeMessage(i)}
                    className="self-start mt-1 text-muted-foreground hover:text-destructive transition-colors flex-shrink-0"
                    aria-label="Remove message"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}

          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2">Who said this next message?</p>
            <div className="flex rounded-xl border border-border overflow-hidden mb-3">
              <button
                type="button"
                onClick={() => setCurrentSpeaker("user")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold transition-colors ${
                  currentSpeaker === "user"
                    ? "bg-foreground text-background"
                    : "bg-transparent text-foreground/50 hover:text-foreground"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                </svg>
                You
              </button>
              <button
                type="button"
                onClick={() => setCurrentSpeaker("ai")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold transition-colors border-l border-border ${
                  currentSpeaker === "ai"
                    ? "bg-foreground text-background"
                    : "bg-transparent text-foreground/50 hover:text-foreground"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                </svg>
                {aiName}
              </button>
            </div>

            <textarea
              ref={textareaRef}
              rows={3}
              value={currentText}
              onChange={(e) => setCurrentText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={currentSpeaker === "user" ? "Paste the message you sent…" : `Paste ${aiName}'s response…`}
              className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-sm"
            />
            <div className="flex items-center justify-between mt-1 mb-3">
              <p className="text-xs text-muted-foreground">
                {currentText.length} characters · {messages.length} message{messages.length !== 1 ? "s" : ""}
              </p>
              <p className="text-xs text-muted-foreground">⌘/Ctrl + Enter to add</p>
            </div>

            <button
              type="button"
              onClick={addMessage}
              disabled={!currentText.trim()}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-dashed border-border text-sm font-semibold text-muted-foreground hover:border-primary hover:text-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
              </svg>
              Add message
            </button>
          </div>
        </div>
      )}

      {/* Upload .txt file */}
      <div className="border-t border-border">
        <button
          type="button"
          onClick={() => setUploadOpen((o) => !o)}
          className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M9.25 13.25a.75.75 0 0 0 1.5 0V4.636l2.955 3.129a.75.75 0 0 0 1.09-1.03l-4.25-4.5a.75.75 0 0 0-1.09 0l-4.25 4.5a.75.75 0 1 0 1.09 1.03L9.25 4.636v8.614Z" />
              <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
            </svg>
            Or upload a .txt file
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`w-4 h-4 transition-transform ${uploadOpen ? "rotate-180" : ""}`}
          >
            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </button>

        {uploadOpen && (
          <div className="px-4 pb-4 space-y-3">
            <p className="text-xs text-muted-foreground">
              Export your AI chat as a text file and upload it here. The contents will load into the conversation field above.
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept=".txt"
              className="hidden"
              onChange={handleFileUpload}
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-dashed border-border text-sm font-semibold text-muted-foreground hover:border-primary hover:text-primary transition-colors w-full justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M3 3.5A1.5 1.5 0 0 1 4.5 2h6.879a1.5 1.5 0 0 1 1.06.44l4.122 4.12A1.5 1.5 0 0 1 17 7.622V16.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 16.5v-13Zm10.5 5a.5.5 0 0 0-.5-.5h-2v-2a.5.5 0 0 0-1 0v2H8a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2a.5.5 0 0 0 .5-.5Z" />
              </svg>
              Choose .txt file
            </button>

            {uploadStatus === "ok" && (
              <p className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
                  <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                </svg>
                Loaded: <span className="font-medium">{uploadFileName}</span>
              </p>
            )}
            {uploadStatus === "error" && (
              <p className="text-xs text-destructive flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
                  <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 1.06L8 11.06l-1.72 1.72a.75.75 0 0 1-1.06-1.06L6.94 10 5.22 8.28a.75.75 0 0 1 1.06-1.06L8 8.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 10l1.72 1.72Z" clipRule="evenodd" />
                </svg>
                {uploadFileName ? `"${uploadFileName}" is not a .txt file. Please upload a plain text file.` : "Failed to read file. Please try again."}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function DocumentPage({
  category,
  title,
  description,
  experiencePlaceholder = "Describe what happened in as much detail as you can…",
}: DocumentPageProps) {
  const [form, setForm] = useState({
    aiTool: "",
    otherPlatform: "",
    experience: "",
    conversation: "",
    occurrenceDate: "",
    name: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function resetForm() {
    setForm({ aiTool: "", otherPlatform: "", experience: "", conversation: "", occurrenceDate: "", name: "", email: "" });
  }

  const aiName = aiLabel(form.aiTool, form.otherPlatform);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const base = import.meta.env.BASE_URL.replace(/\/$/, "");
      const res = await fetch(`${base}/api/reports`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, ...form }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError((data as { error?: string }).error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 px-4 py-12 sm:py-20">
        <div className="max-w-xl mx-auto">

          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/70 font-semibold mb-8 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
            </svg>
            Back
          </Link>

          <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-snug mb-3">{title}</h1>
          <p className="text-muted-foreground text-base mb-10 leading-relaxed">{description}</p>

          {submitted ? (
            <div className="rounded-2xl bg-card border border-border p-10 text-center shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-primary">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-2xl font-bold text-primary mb-2">Thank you!</p>
              <p className="text-muted-foreground mb-6">Your experience has been reported. This helps us build a better picture of how AI is performing in the real world.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => { setSubmitted(false); resetForm(); }}
                  className="px-5 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
                >
                  Report another
                </button>
                <Link to="/" className="px-5 py-2 rounded-lg border border-border text-foreground font-semibold hover:bg-card transition-colors">
                  Back to home
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 shadow-md space-y-5">

              {/* AI Tool */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5" htmlFor="aiTool">
                  Which AI tool or platform was this about?
                </label>
                <select
                  id="aiTool"
                  name="aiTool"
                  required
                  value={form.aiTool}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                >
                  <option value="" disabled>Select an AI tool…</option>
                  {AI_TOOLS.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Other platform text field */}
              {form.aiTool === "Other / Not listed" && (
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5" htmlFor="otherPlatform">
                    Which platform or tool?{" "}
                    <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <input
                    id="otherPlatform"
                    name="otherPlatform"
                    type="text"
                    value={form.otherPlatform}
                    onChange={handleChange}
                    placeholder="e.g. Jasper, Poe, Mistral…"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                  />
                </div>
              )}

              {/* Experience description */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5" htmlFor="experience">
                  Describe your experience <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  required
                  rows={4}
                  value={form.experience}
                  onChange={handleChange}
                  placeholder={experiencePlaceholder}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                />
              </div>

              {/* Conversation capture */}
              <ConversationCapture
                aiName={aiName}
                onChange={(val) => setForm((prev) => ({ ...prev, conversation: val }))}
              />

              {/* Date */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5" htmlFor="occurrenceDate">
                  Approximately when did this happen?{" "}
                  <span className="text-muted-foreground font-normal">(optional)</span>
                </label>
                <input
                  id="occurrenceDate"
                  name="occurrenceDate"
                  type="date"
                  value={form.occurrenceDate}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                />
              </div>

              {/* Name / email */}
              <div className="border-t border-border pt-5 space-y-4">
                <p className="text-xs text-muted-foreground">
                  Your name and email are optional — only provide them if you're happy to be contacted for follow-up.
                </p>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5" htmlFor="name">
                    Name <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5" htmlFor="email">
                    Email <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                  />
                </div>
              </div>

              {error && <p className="text-sm text-destructive font-medium">{error}</p>}

              <button
                type="submit"
                disabled={sending}
                className="w-full py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors shadow-sm text-base disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "Submitting…" : "Submit your report"}
              </button>
            </form>
          )}

        </div>
      </main>

      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
