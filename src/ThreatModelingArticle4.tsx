import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, NewsletterSection, ContactSection, Footer } from "./App";

export default function ThreatModelingArticle4() {
  useEffect(() => {
    document.title = "Modelling AI Threat for an Autonomous Perception Layer in Autonomous Rail Transit — Accentrop lab";
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
            Autonomous Rail Transit — Sensor Fusion & Dynamic Object Classification Layer
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-primary mb-10 leading-tight">
          Modelling AI Threat for an Autonomous Perception Layer in Autonomous Rail Transit
        </h1>

        <div className="bg-muted rounded-2xl px-6 sm:px-10 py-8 space-y-10 text-foreground leading-relaxed">

          {/* Problem Statement */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">The Problem Statement</h2>
            <p className="text-base">
              In Grade of Automation Level 4 (GoA-4) driverless light-rail systems, onboard train operations rely completely on a machine learning-driven perception layer to scan tracks for unexpected obstructions, trespassers, or structural defects. A critical failure occurs at the Sensor Fusion and Dynamic Object Classification Layer when an autonomous passenger train enters an urban outdoor transit corridor during an extreme weather event involving blinding crosswinds and flying debris. The computer vision network, heavily trained on static obstacle profiles, suffers from unexpected spatial context drift and semantic misclassification. Buffeted by loose, wind-blown plastic sheeting wrapping around a wayside signalling structure, the onboard AI incorrectly identifies the fluttering, semi-reflective material as an imminent, high-mass concrete collapse obstacle. Operating on this corrupted classification, the automated driving loop triggers a full-velocity emergency pneumatic braking deployment (100% brake cylinder pressure), causing immediate wheel-slide on slick rails, structural stress to the bogies, and severe, unbraced deceleration injuries to dozens of onboard passengers.
            </p>
          </div>

          {/* Operational Intervention */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Operational Intervention</h2>
            <p className="text-base">
              To contain the vehicle destabilisation and restore network scheduling, the regional transit tracking centre must execute a rapid Remote Supervisory Logic Override through an encrypted, safety-critical train-to-wayside communication link. This intervention forces the train's Automated Train Operation (ATO) sub-system to immediately drop its active autonomous perception loop and fall back into a highly restricted, remote-monitored safe-velocity regime. With the faulty inference engine bypassed, dispatchers check the live feed of independent, hardened wayside camera networks located along the track infrastructure to confirm that the right-of-way is structurally clear. Once human validation confirms the illusion, engineers transmit a verified override sequence to release the locked pneumatic emergency brakes, initiating an automated wheel-grip recovery protocol to normalise brake pipe pressure, resetting the local traction control computers, and safely creeping the train to the nearest station platform at a restricted speed of under 15 km/h.
            </p>
          </div>

          {/* Strategic Future Readiness */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Strategic Future Readiness</h2>
            <p className="text-base">
              To insulate high-capacity passenger rail infrastructure from perception-layer classification failures, rail authorities must mandate Strict Boundary-Enforcement Guards and Digital Space Cross-Validation (SACRED framework principles). Onboard deep learning object classifiers must never possess direct, unmediated authority to trigger emergency braking profiles unless their inferences are cross-validated by independent, non-neural sensor telemetry such as solid-state LiDAR distance-thresholding arrays and virtual balise tracking systems. Rail operators should implement strict algorithmic execution budgets that monitor decision drift at runtime; if an AI agent's object confidence intervals fluctuate erratically over consecutive millisecond cycles, the system must trigger a deterministic "fail-operational" warning rather than a high-velocity emergency stop. Finally, continuous edge-case training through virtual digital-twin rail networks must be standardised, exposing automated models to adversarial weather conditions, complex material reflections, and unusual trackside anomalies prior to receiving safety certification for live line deployment.
            </p>
          </div>

          {/* Key Governance Gaps */}
          <div className="border-t border-border pt-8">
            <p className="text-sm font-bold text-foreground mb-3">Key governance gaps identified</p>
            <ul className="space-y-2">
              {[
                "No mandatory cross-validation between neural inference outputs and independent sensor telemetry before any emergency braking action is authorised",
                "Absence of runtime confidence interval monitoring and decision-drift detection within safety-critical AI control loops",
                "No algorithmic execution budgets separating high-velocity emergency stops from graduated, fail-operational safe-speed responses",
                "Insufficient adversarial weather, material reflection, and edge-case training coverage in AI safety certification pipelines",
                "No formalised remote supervisory override protocol documented and rehearsed before GoA-4 line commissioning",
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
