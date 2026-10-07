import { useEffect } from "react";
import { Header, NewsletterSection, ContactSection, Footer } from "./App";

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Service — Accentrop | Cryp Tok Solutions";
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 w-full">
        <h1 className="text-4xl font-black text-primary mb-2">Terms of Service</h1>
        <p className="text-muted-foreground text-sm mb-10">Effective date: 1 January 2026</p>

        <div className="space-y-8 text-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-2">1. Acceptance of Terms</h2>
            <p>By accessing or using Accentrop ("the Service"), operated by Cryp Tok Solutions, you agree to be bound by these Terms of Service. If you do not agree, please do not use the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">2. Description of Service</h2>
            <p>Accentrop is a speech-recognition demonstration platform that records spoken audio, transcribes it in real time, and stores the audio file together with the spoken and transcribed text for the purpose of AI accent-intelligence research and training.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">3. Data Collection and Use</h2>
            <p>When you use the recording feature, the following data is collected:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
              <li>The text you type in the "What I am trying to say" field</li>
              <li>The text transcribed by the speech-recognition engine</li>
              <li>The raw audio recording of your voice</li>
              <li>An optional self-reported cultural or geographic origin</li>
            </ul>
            <p className="mt-3">This data may be used to train, evaluate, and improve AI models related to accent recognition and naturalisation. By submitting a recording you grant Cryp Tok Solutions a perpetual, royalty-free, worldwide licence to use that data for these purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">4. User Conduct</h2>
            <p>You agree not to submit any content that is unlawful, harmful, defamatory, or that infringes the rights of any third party. You must be at least 13 years of age to use the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">5. Intellectual Property</h2>
            <p>All software, design, and branding on the Service are the property of Cryp Tok Solutions. You retain ownership of any content you submit, subject to the licence granted in Section 3.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">6. Disclaimer of Warranties</h2>
            <p>The Service is provided "as is" without warranties of any kind, express or implied. Cryp Tok Solutions does not guarantee accuracy of speech transcription or uninterrupted availability of the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">7. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Cryp Tok Solutions shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">8. Changes to These Terms</h2>
            <p>We may update these Terms from time to time. Continued use of the Service after changes are posted constitutes acceptance of the revised Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">9. Contact</h2>
            <p>For questions about these Terms, contact us via the <a href="/#contact" className="text-primary underline underline-offset-2 hover:text-primary/80">Contact Us</a> form or visit <a href="https://cryptok.online" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80">cryptok.online</a>.</p>
          </section>
        </div>
      </main>
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
