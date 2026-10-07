import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LandingPage from "./LandingPage";
import ContactPage from "./ContactPage";
import DocumentPage from "./DocumentPage";
import EncyclopediaPage from "./EncyclopediaPage";
import TermsPage from "./TermsPage";
import PrivacyPage from "./PrivacyPage";
import HowItWorksPage from "./HowItWorksPage";
import BlogPage from "./BlogPage";
import BlogArticlesPage from "./BlogArticlesPage";
import EbookPage from "./EbookPage";
import EbookReturnPage from "./EbookReturnPage";
import EbookDownloadPage from "./EbookDownloadPage";
import BlogArticle2 from "./BlogArticle2";
import BlogArticle3 from "./BlogArticle3";
import BlogArticle4 from "./BlogArticle4";
import BlogArticle5 from "./BlogArticle5";
import BlogArticle6 from "./BlogArticle6";
import BlogArticle7 from "./BlogArticle7";
import BlogArticle8 from "./BlogArticle8";
import BlogArticle9 from "./BlogArticle9";
import BlogArticle10 from "./BlogArticle10";
import BlogArticle11 from "./BlogArticle11";
import BlogArticle12 from "./BlogArticle12";
import ThreatModelingPage from "./ThreatModelingPage";
import ThreatModelingArticle1 from "./ThreatModelingArticle1";
import ThreatModelingArticle2 from "./ThreatModelingArticle2";
import ThreatModelingArticle3 from "./ThreatModelingArticle3";
import ThreatModelingArticle4 from "./ThreatModelingArticle4";
import SurveyPage from "./SurveyPage";
import SurveyArticle1 from "./SurveyArticle1";
import ServicesPage from "./ServicesPage";
import RiskSliderPage from "./RiskSliderPage";
import DonatePage from "./DonatePage";
import USAIJobsPage from "./USAIJobsPage";
import AdminPage from "./AdminPage";
import ScrollToTop from "./ScrollToTop";
import "./index.css";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={basePath}>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/accent" element={<App />} />
      <Route path="/contact" element={<ContactPage />} />

      <Route path="/hallucination" element={<DocumentPage
        category="hallucination"
        title="Report your AI if it hallucinates"
        description="AI hallucination is when a model confidently generates factually incorrect or fabricated information. Share what happened so we can build a clearer picture."
        experiencePlaceholder="What did the AI say that was incorrect or fabricated? Include what you asked, what it said, and how you found out it was wrong…"
      />} />

      <Route path="/boundary" element={<DocumentPage
        category="boundary"
        title="Does Your AI tool Violate Boundaries?"
        description="Sometimes AI tools don't respect the limits you set — like going beyond your budget or ignoring explicit instructions."
        experiencePlaceholder="Describe the boundary you set and how the AI failed to respect it…"
      />} />

      <Route path="/culture" element={<DocumentPage
        category="culture"
        title="Does your AI Understand Cultural Nuance & Idioms?"
        description="This covers your AI's ability to understand local slang, regional idioms, and cultural context. Share moments where your AI missed the mark."
        experiencePlaceholder="What phrase, idiom, or cultural reference did the AI misunderstand? What did it say instead…"
      />} />

      <Route path="/discrimination" element={<DocumentPage
        category="discrimination"
        title="Report your AI if you sense any form of discrimination"
        description="This could be during a regular conversation, an interview, or an AI-assisted job application. Your experience matters."
        experiencePlaceholder="Describe what happened and why it felt discriminatory — include as much context as you can…"
      />} />

      <Route path="/deepfake" element={<DocumentPage
        category="deepfake"
        title="Did you spot a deepfake in your AI output?"
        description="Share only if you have proof. Documenting AI-generated deepfakes helps build awareness and accountability."
        experiencePlaceholder="Describe what you saw, which platform or tool produced it, and how you identified it as a deepfake…"
      />} />

      <Route path="/accessibility" element={<DocumentPage
        category="accessibility"
        title="Do you notice any accessibility compliance issue with your AI?"
        description="In case your AI isn't providing the necessary capability to ease access to information for people with disabilities."
        experiencePlaceholder="Describe the accessibility barrier you encountered — e.g. missing captions, poor screen reader support, unclear outputs…"
      />} />

      <Route path="/privacy-issue" element={<DocumentPage
        category="privacy-issue"
        title="Do you notice any data privacy issue?"
        description="In case you have noticed your AI responses contained someone's public digital footprint or personal information it shouldn't have."
        experiencePlaceholder="Describe what personal or private information appeared in the AI's response and what prompted it…"
      />} />

      <Route path="/environment" element={<DocumentPage
        category="environment"
        title="Document local Environmental Impact from AI"
        description="Document the environmental effects of AI infrastructure in your community — energy use, heat output, noise, or other local impacts."
        experiencePlaceholder="What environmental impact have you noticed? Where are you located (city/region is fine), and what AI infrastructure is involved…"
      />} />

      <Route path="/other" element={<DocumentPage
        category="other"
        title="Any other AI experience to document?"
        description="If your AI experience doesn't fit any of the other categories, share it here. No experience is too small."
        experiencePlaceholder="Describe your experience with as much detail as you like…"
      />} />

      <Route path="/ebook" element={<EbookPage />} />
      <Route path="/ebook/return" element={<EbookReturnPage />} />
      <Route path="/ebook/download/:token" element={<EbookDownloadPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog-articles" element={<BlogArticlesPage />} />
      <Route path="/blog/ai-regulations-global" element={<BlogArticle2 />} />
      <Route path="/blog/ai-governance-accountability" element={<BlogArticle3 />} />
      <Route path="/blog/ai-governance-collective" element={<BlogArticle4 />} />
      <Route path="/blog/ai-governance-corporate-risk" element={<BlogArticle5 />} />
      <Route path="/blog/build-vs-buy-ai" element={<BlogArticle6 />} />
      <Route path="/blog/ai-compliance-us" element={<BlogArticle7 />} />
      <Route path="/blog/cos" element={<BlogArticle8 />} />
      <Route path="/blog/ai-governance-frontier" element={<BlogArticle9 />} />
      <Route path="/blog/ai-governance-schools" element={<BlogArticle10 />} />
      <Route path="/blog/human-vs-ai" element={<BlogArticle11 />} />
      <Route path="/blog/enterprise-services" element={<BlogArticle12 />} />
      <Route path="/threats" element={<ThreatModelingPage />} />
      <Route path="/survey" element={<SurveyPage />} />
      <Route path="/survey/ai-governance-2026" element={<SurveyArticle1 />} />
      <Route path="/threats/rail" element={<ThreatModelingArticle4 />} />
      <Route path="/threats/banking" element={<ThreatModelingArticle3 />} />
      <Route path="/threats/telecom" element={<ThreatModelingArticle1 />} />
      <Route path="/threats/aerospace" element={<ThreatModelingArticle2 />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/ai-risk" element={<RiskSliderPage />} />
      <Route path="/donate" element={<DonatePage />} />
      <Route path="/us-ai-jobs" element={<USAIJobsPage />} />
      <Route path="/addy" element={<AdminPage />} />
      <Route path="/encyclopedia" element={<EncyclopediaPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/how" element={<HowItWorksPage />} />
    </Routes>
  </BrowserRouter>
);
