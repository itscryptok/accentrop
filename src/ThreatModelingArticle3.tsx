import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, NewsletterSection, ContactSection, Footer } from "./App";

export default function ThreatModelingArticle3() {
  useEffect(() => {
    document.title = "Modelling AI Threat for a Model Monitoring and Drift Detection Layer in AI-driven Credit Scoring — Accentrop lab";
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
            Retail Banking — Model Monitoring & Drift Detection Layer
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-primary mb-10 leading-tight">
          Modelling AI Threat for a Model Monitoring and Drift Detection Layer in AI-driven Credit Scoring
        </h1>

        <div className="bg-muted rounded-2xl px-6 sm:px-10 py-8 space-y-10 text-foreground leading-relaxed">

          {/* Problem Statement */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">The Problem Statement</h2>
            <p className="text-base">
              When the Model Monitoring and Drift Detection Layer fails to flag covariate shift in real time, the credit-scoring model can become miscalibrated relative to observed defaults. This miscalibration manifests as systematic underestimation of default risk for certain applicant segments and overconfidence in borrowers whose risk actually exceeds the model's estimates. In retail banking, such drift can be driven by seasonality, macroeconomic shifts, or demographic changes that alter the distribution of key features like income, employment status, and debt-to-income ratio. Because the monitoring layer only triggers alerts when drift metrics cross predefined thresholds, subtle or gradual drift may be undetected, leading to degraded calibration curves and violated regulatory expectations for risk grade accuracy. The consequences include higher delinquency rates, inappropriate credit approvals, revenue loss, and an increased disclosure and remediation burden with supervisors.
            </p>
          </div>

          {/* Operational Intervention */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Operational Intervention</h2>
            <p className="text-base">
              On alert, the on-call risk analytics engineer immediately validates the signal by re-running drift metrics on the latest ingestion data and cross-checking data lineage to rule out a schema or pipeline issue. If data quality is sound, they perform backtesting with archived labeled data to quantify the calibration error introduced by the drift and identify affected cohorts. They then trigger a safe rollback to a previously validated model version while the feature pipelines are stabilised, and escalate to data engineering to address any data quality anomalies. Once data quality is confirmed, they initiate a retraining cycle using the latest ground-truth outcomes, recalibrating predicted PD and recomputing scorecard thresholds for affected segments. Finally, they update incident records, adjust runbooks and alert configurations, and restore normal operations with enhanced monitoring and a post-incident review with risk and compliance.
            </p>
          </div>

          {/* Strategic Future Readiness */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Strategic Future Readiness</h2>
            <p className="text-base">
              To prevent recurrence, implement a formal drift governance program combining continuous monitoring, model risk governance, and data-management controls. Establish explicit trigger thresholds for covariate and concept drift with tiered response paths — including automated retraining, manual review, or emergency decommissioning. Standardise data lineage, feature provenance, and calibration tracking across the data, feature engineering, and modelling pipelines, using immutable audit trails and versioned artifacts. Adopt a Risk Management Framework such as an AI RMF aligned with banking-specific MRMs (Model Risk Management) and implement oversight by a cross-functional Model Risk Committee, including independent validation and regulatory mapping. Enforce robust incident response playbooks, ongoing third-party data source verification, explainability for regulators, and alignment with privacy and fairness requirements such as disparate impact testing.
            </p>
          </div>

          {/* Key Governance Gaps */}
          <div className="border-t border-border pt-8">
            <p className="text-sm font-bold text-foreground mb-3">Key governance gaps identified</p>
            <ul className="space-y-2">
              {[
                "Missing end-to-end data lineage documentation across data sources and feature construction",
                "No formalised change control and versioning for drift detection thresholds and retraining triggers",
                "Fragmented responsibilities between risk, compliance, data engineering, and analytics — with no single accountable Model Risk Owner",
                "Inadequate auditability and reproducibility of live-model interventions and rollback decisions",
                "Limited external validation and regulatory mapping for model fairness, calibration, and consumer impacts — absence of continuous third-party data monitoring",
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
