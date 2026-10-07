import { useEffect } from "react";
import { Header, NewsletterSection, ContactSection, Footer } from "./App";

export default function HowItWorksPage() {
  useEffect(() => {
    document.title = "How It Works — Accentrop lab";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 w-full">
        <h1 className="text-4xl font-black text-primary mb-2">How It Works</h1>
        <p className="text-muted-foreground text-sm mb-10">Accentrop lab — technical reference for platform tools and services</p>

        <div className="space-y-16 text-foreground leading-relaxed">

          {/* ── Accent Readiness Tool ───────────────────────── */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-semibold">Platform Tool</p>
            <h2 className="text-2xl font-black text-foreground mb-6">Accent Readiness Lab</h2>

            <div className="space-y-8">
              <section>
                <h3 className="text-lg font-bold mb-3">What It Does</h3>
                <p>
                  The Accent Readiness Lab measures how well a domestic robot's AI would understand your accent. You type a sentence, say it out loud, and the system transcribes what it hears using the same class of AI that powers modern home robots. The closer the transcription is to what you typed, the higher your Home Robot Accent score.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold mb-3">Step 1 — Type What You Want to Say</h3>
                <p>
                  Enter a sentence in the <strong>What I am trying to say</strong> box. You can type anything you like, or pick one of the pre-written domestic instructions from the dropdown. These are realistic commands you might give a home robot — asking it to start the laundry, lock the doors, or bring you coffee.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold mb-3">Step 2 — Record Your Voice</h3>
                <p>
                  Press <strong>Record</strong> and read the sentence aloud naturally — the same way you would speak to a robot in your home. Do not change your accent; the whole point is to test how the AI processes <em>your</em> voice as it is. Press <strong>Stop</strong> when you are done.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold mb-3">Step 3 — AI Transcription</h3>
                <p>
                  Your audio is sent to a speech recognition model — the same family used in many smart home and robotics platforms. The model converts your spoken audio into text, producing what a domestic robot would "hear" when you give it that command.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold mb-3">Step 4 — Your Score</h3>
                <p>
                  The system compares the transcription word-by-word against what you typed. Punctuation is ignored; only the words matter. The percentage of words matched correctly becomes your <strong>Home Robot Accent score</strong>. A score of 100% means the robot heard every word exactly as you intended.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold mb-3">Why This Matters</h3>
                <p>
                  Domestic robots are entering homes around the world. Most voice-recognition systems are trained on a narrow range of accents, which means speakers of certain languages and regional dialects are systematically misunderstood. This tool surfaces that gap — giving real people a live measurement of how prepared their accent is for the robots already on the market, and the ones coming next.
                </p>
              </section>
            </div>
          </div>

          <hr className="border-border" />

          {/* ── Agentic Shadow Auditor ───────────────────────── */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-semibold">Service 01</p>
            <h2 className="text-2xl font-black text-foreground mb-2">Agentic Shadow Auditor</h2>
            <p className="text-sm text-primary font-semibold italic mb-6">CI/CD Governance Bot</p>

            <div className="space-y-8">
              <section>
                <h3 className="text-lg font-bold mb-3">What It Does</h3>
                <p>
                  The Agentic Shadow Auditor is an automated governance agent that integrates directly into a software team's CI/CD pipeline. It fires on every pull request, reads the code changes, and evaluates them against a configurable AI governance framework — before the code can merge into the main branch.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold mb-3">How It Detects AI Changes</h3>
                <p className="mb-4">
                  The agent operates on the PR diff — only the lines of code that actually changed. This keeps scans fast and reduces false positives. It uses a two-pass detection strategy:
                </p>
                <ul className="space-y-3">
                  {[
                    { term: "Pass 1 — Pattern matching", def: "Fast, deterministic scanning for known AI API signatures, system prompt string patterns, model configuration keys, and embedding call structures across all major frontier model providers." },
                    { term: "Pass 2 — Semantic analysis", def: "For code that pattern matching cannot classify with confidence, a secondary analysis pass reasons about data flow — tracing whether user-supplied or database-sourced content reaches a model call without sanitization." },
                  ].map(({ term, def }) => (
                    <li key={term} className="flex gap-3">
                      <span className="shrink-0 mt-1.5 w-2 h-2 rounded-full bg-primary" />
                      <span><strong>{term}:</strong> {def}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-bold mb-3">Risk Scoring</h3>
                <p className="mb-4">
                  Each finding is classified by severity and weighted against the organization's own governance policy configuration. The output is a structured risk score that is posted directly as a comment on the pull request, including:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  {[
                    "Severity level per finding (critical / high / medium / low)",
                    "Specific file and line references",
                    "Plain-language explanation of the governance concern",
                    "Suggested remediation steps",
                    "Overall PR risk score with pass/fail status",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm">
                      <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-bold mb-3">Merge Gate Enforcement</h3>
                <p>
                  The agent can be configured as a required GitHub status check, meaning pull requests that exceed a defined risk threshold are blocked from merging until the flagged issues are addressed. This makes AI governance a hard gate in the delivery process, not an optional recommendation.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold mb-3">Policy Configuration</h3>
                <p>
                  All rules are organization-defined. Governance teams specify which model families are permitted, which data categories are restricted from prompt injection, what risk score thresholds trigger a block, and which paths or file types are in or out of scope. Policies are version-controlled alongside the codebase.
                </p>
              </section>

              <div className="bg-muted rounded-xl px-6 py-5">
                <p className="text-sm font-bold text-foreground mb-1">Infrastructure footprint</p>
                <p className="text-sm text-muted-foreground">
                  A registered GitHub App with scoped read/write permissions, a webhook listener, and a policy engine. No persistent storage of source code. Scans complete within the PR review window. Deployable to any cloud environment or on-premise infrastructure.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* ── Deterministic Guardrail Studio ───────────────── */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-semibold">Service 02</p>
            <h2 className="text-2xl font-black text-foreground mb-2">The Deterministic Guardrail Studio</h2>
            <p className="text-sm text-primary font-semibold italic mb-6">Low-code visual builder for AI runtime controls</p>

            <div className="space-y-8">
              <section>
                <h3 className="text-lg font-bold mb-3">What It Does</h3>
                <p>
                  The Deterministic Guardrail Studio is a visual environment for defining, testing, and deploying deterministic middleware controls between applications and large language models. Unlike AI-based safety layers, all controls run as code — they pass or fail with certainty, producing reliable, auditable results that compliance and legal teams can depend on.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold mb-3">Why Deterministic Matters</h3>
                <p>
                  Most off-the-shelf AI safety tools use another model to evaluate model outputs — an "LLM-as-judge" pattern. This means your safety layer is itself probabilistic: it can be inconsistent, jailbroken, or simply wrong. A deterministic guardrail is a function: given an input, it always returns the same result. That predictability is what makes it suitable for regulated environments, audit trails, and legal defensibility.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold mb-3">Policy Types Supported</h3>
                <ul className="space-y-4">
                  {[
                    { term: "Regex and pattern checks", def: "Define exact string patterns, keyword blocklists, or structural rules that flag or reject non-compliant content." },
                    { term: "Toxic language filters", def: "Apply curated toxicity lexicons with configurable sensitivity thresholds tuned to your audience and jurisdiction." },
                    { term: "PII anonymizers", def: "Detect and redact or mask personally identifiable information categories before they reach a model or leave a response." },
                    { term: "Semantic distance boundaries", def: "Define the topical scope of a model interaction. Responses that drift outside the defined domain are intercepted. This component uses lightweight embedding comparisons — the only part of the studio that requires a vector operation at runtime." },
                  ].map(({ term, def }) => (
                    <li key={term} className="flex gap-3">
                      <span className="shrink-0 mt-1.5 w-2 h-2 rounded-full bg-primary" />
                      <span><strong className="text-foreground">{term}:</strong> <span className="text-muted-foreground text-sm">{def}</span></span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-bold mb-3">The Build and Test Loop</h3>
                <p className="mb-4">
                  Policies are built and validated before any deployment. The studio provides a test harness where teams paste sample prompts and model outputs and run them against the current policy set in real time. Each test run shows:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Which guardrails fired and which passed",
                    "The specific content segment that triggered each rule",
                    "The action taken (block, redact, flag, or pass-through)",
                    "End-to-end latency of the guardrail evaluation",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-bold mb-3">Configuration Export</h3>
                <p>
                  Once validated, policies export as clean, lightweight JSON configuration files. These drop directly into application middleware — no additional runtime dependency on the studio itself. Configurations are plain text, so they are fully versionable in git, reviewable in pull requests via the Agentic Shadow Auditor, and deployable across environments.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold mb-3">Pre-Built Policy Library</h3>
                <p>
                  The studio ships with a library of pre-built policy templates covering common compliance scenarios: GDPR PII categories, HIPAA-relevant clinical terminology, hate speech and harassment filters, financial advice boundary controls, and more. Templates are starting points — all are fully editable to match organizational policy.
                </p>
              </section>

              <div className="bg-muted rounded-xl px-6 py-5">
                <p className="text-sm font-bold text-foreground mb-1">A note on semantic distance boundaries</p>
                <p className="text-sm text-muted-foreground">
                  This policy type requires an embedding model to compare input content against a defined topical scope. This is the one component of the studio that introduces a lightweight runtime dependency — a small, fast embedding model deployable on-premise or via a private API endpoint. It does not require a frontier model and does not send content to any third-party service unless the client chooses to configure it that way.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
