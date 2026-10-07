import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, NewsletterSection, ContactSection, Footer } from "./App";

export default function ThreatModelingArticle1() {
  useEffect(() => {
    document.title = "Modelling AI Threat in a Telecom Infrastructure — Accentrop lab";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 w-full">
        <Link
          to="/threats"
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
          AI Threat Modeling
        </Link>

        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full px-3 py-0.5">
            Telecom — Logical Execution Layer
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-primary mb-10 leading-tight">
          Modelling AI Threat in a Telecom Infrastructure
        </h1>

        <div className="bg-muted rounded-2xl px-6 sm:px-10 py-8 space-y-10 text-foreground leading-relaxed">

          {/* Problem Statement */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">The Problem Statement</h2>
            <p className="text-base">
              In zero-touch, self-healing telecommunications infrastructure, modern automation relies on a decentralized, multi-agent logical execution layer. A severe failure occurred within a major tier-1 cellular core where two distinct autonomous AI agents — a Predictive Traffic-Optimization Agent and a Network-Assurance Remediation Agent — accessed the same Software-Defined Networking (SDN) routing table simultaneously without a shared-state lock. The Traffic-Optimization Agent initiated a dynamic rerouting sequence to alleviate local congestion at a critical cell tower site, while simultaneously, the Assurance Agent flagged a minor packet-drop anomaly at the exact same location and attempted to isolate the route for diagnostic testing. Because both systems independently read the same baseline network telemetry and executed conflicting writes, they locked into a rapid, continuous feedback loop known as an autonomous control-loop race condition; each agent perceived the other's continuous adjustments as an external network failure, generating a cascade of conflicting routing policies that rapidly spiked CPU utilization on the physical switches to 100% and dropped connectivity for over 150,000 active subscribers.
            </p>
          </div>

          {/* Operational Intervention */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Operational Intervention</h2>
            <p className="text-base">
              To resolve the live systemic loop, the Network Operations Center (NOC) supervisor immediately activated a deterministic, out-of-band "kill switch" policy bypass that revoked the orchestration tokens and execution privileges for both autonomous agents, immediately decoupling the AI logic layer from the network's API gateways. With the automated systems safely isolated and frozen, operations engineers executed an automated rollback script to revert the core routing tables to their last known stable, pre-incident state from historical configuration backups. Once baseline subscriber traffic was fully stabilized, the engineering team initialized an isolated digital twin replication environment using the network traces collected during the incident to replay the exact millisecond-level telemetry. By dissecting the reasoning and tool-execution logs of both agents during this simulated replay, forensics identified the specific missing guardrail: the agents lacked synchronous context-sharing or an underlying distributed lock mechanism, which allowed them to act on stale, uncommitted state data.
            </p>
          </div>

          {/* Strategic Future Readiness */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Strategic Future Readiness</h2>
            <p className="text-base">
              To prevent multi-agent race conditions from destabilizing logical execution layers in the future, organizations must transition away from open-ended, continuous agent autonomy toward an identity-propagated, structured "Autonomy by Lane" governance framework. Telecom operators should enforce atomic transactions and state-locking protocols across all shared infrastructure APIs, utilizing emerging industry standards like the TM Forum Agent Management APIs to handle real-time context-sharing and agent discovery. Furthermore, an independent, centralized supervisor model or policy enforcement proxy must gate high-impact runtime actions, evaluating concurrent intents before they are committed to production networks. Finally, automated continuous testing and chaotic agent-simulation loops must be integrated directly into the deployment pipeline, ensuring that all agent reasoning pathways are rigorously validated against concurrent resource contention before gaining access to live, mission-critical infrastructure.
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="border-t border-border pt-8">
            <p className="text-sm font-bold text-foreground mb-3">Key governance gaps identified</p>
            <ul className="space-y-2">
              {[
                "No distributed lock mechanism on shared SDN routing tables",
                "Agents operated on stale, uncommitted state data with no conflict detection",
                "No centralized supervisor to arbitrate concurrent high-impact actions",
                "Missing out-of-band kill switch policy documented ahead of the incident",
                "No pre-production chaos testing for concurrent agent resource contention",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors shadow self-start"
            >
              Discuss threat modeling for your organisation
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
          </div>

        </div>
      </main>
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
