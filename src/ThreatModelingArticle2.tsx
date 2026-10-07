import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, NewsletterSection, ContactSection, Footer } from "./App";

export default function ThreatModelingArticle2() {
  useEffect(() => {
    document.title = "Modelling AI Threat for an Autonomous Collision-Avoidance Layer in Aerospace and Satellite Operations — Accentrop lab";
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
            Aerospace — Sensor-to-Actuation Edge Inference Layer
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-primary mb-10 leading-tight">
          Modelling AI Threat for an Autonomous Collision-Avoidance Layer in Aerospace and Satellite Operations
        </h1>

        <div className="bg-muted rounded-2xl px-6 sm:px-10 py-8 space-y-10 text-foreground leading-relaxed">

          {/* Problem Statement */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">The Problem Statement</h2>
            <p className="text-base">
              As mega-constellations crowd Low Earth Orbit (LEO), operators rely on onboard, edge-computed AI models to execute high-frequency, autonomous collision-avoidance maneuvers without real-time human intervention. A catastrophic failure occurs at the Sensor-to-Actuation Edge Inference Layer when an operational satellite encounters a complex, multi-object conjunction scenario. The onboard neural network, optimized for pairwise (one-on-one) avoidance geometry, suffers from mathematical brittleness when processing high-density orbital telemetry featuring non-trackable lethal micro-debris alongside a competing operator's active asset. Driven by uncalibrated uncertainty in its computer vision inputs and unexpected atmospheric drag variances, the model miscalculates the true probability of collision (PoC). It outputs a series of erratic, high-frequency thruster firing commands that burn through critical propellant reserves, inadvertently altering the spacecraft's velocity vector (Δv) directly into the path of an oncoming debris cluster, creating a localized collision that risks triggering a cascading debris event.
            </p>
          </div>

          {/* Operational Intervention */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Operational Intervention</h2>
            <p className="text-base">
              To contain the orbital deviation before impact, ground-based Space Traffic Management (STM) controllers must immediately initiate an out-of-band Emergency Logic Override via a dedicated high-priority telecommand uplink. This intervention forcefully terminates the satellite's onboard autonomous flight-control loop, freezing the faulty inference engine and shifting the guidance, navigation, and control (GNC) architecture back to a deterministic, ground-calculated telemetry model. With the automated agent safely bypassed, flight dynamics engineers immediately calculate a brute-force impulsive maneuver using precise orbital ephemeris data derived from independent ground-based radar tracking networks. This human-validated trajectory modification command is uplinked directly to the satellite's attitude control processors, overriding the corrupted flight paths, stabilizing the spacecraft's attitude, and executing a safe-distance drift profile away from the approaching orbital debris field.
            </p>
          </div>

          {/* Strategic Future Readiness */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Strategic Future Readiness</h2>
            <p className="text-base">
              To insulate orbital infrastructure from edge-level algorithmic failures, space enterprises and global regulatory bodies must mandate a Zero-Trust Flight Autonomy Framework enforced by strict multi-operator context sharing. Onboard AI systems must never operate as closed-loop isolated actors; instead, they must be governed by standardized API proxies that mandate millisecond-level state-locking and intention broadcasting between competing constellations occupying overlapping orbital shells. Onboard neural networks must also feature an independent, deterministic hard-coded safety envelope or mathematical supervisor model that acts as a runtime boundary — if the AI's proposed maneuver path violates predefined orbital mechanics constraints or drops below a 1 × 10⁻⁴ safety threshold, the system must automatically drop out of autonomous mode and yield control to ground systems. Finally, continuous space-chaos simulation loops must be standard deployment prerequisites, testing onboard models against dense, uncatalogued debris environments in high-fidelity digital twins prior to launch.
            </p>
          </div>

          {/* Key Governance Gaps */}
          <div className="border-t border-border pt-8">
            <p className="text-sm font-bold text-foreground mb-3">Key governance gaps identified</p>
            <ul className="space-y-2">
              {[
                "Neural network not validated for multi-object conjunction scenarios — only pairwise geometry",
                "No calibrated uncertainty quantification on computer vision inputs at the edge",
                "Missing deterministic safety envelope as a hard runtime boundary on autonomous maneuvers",
                "No inter-operator intention broadcasting or state-locking across overlapping orbital shells",
                "Pre-launch simulation did not include high-density uncatalogued debris environments",
                "Emergency Logic Override (out-of-band kill switch) not pre-defined in the autonomy governance policy",
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
