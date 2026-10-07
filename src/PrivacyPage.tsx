import { useEffect } from "react";
import { Header, NewsletterSection, ContactSection, Footer } from "./App";

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy — Accentrop | Cryp Tok Solutions";
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 w-full">
        <h1 className="text-4xl font-black text-primary mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm mb-10">Effective date: 1 January 2026</p>

        <div className="space-y-8 text-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-2">1. Who We Are</h2>
            <p>Accentrop is a product of Cryp Tok Solutions. References to "we", "us", or "our" in this policy refer to Cryp Tok Solutions. Our website is <a href="https://cryptok.online" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80">cryptok.online</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">2. What Data We Collect</h2>
            <p>When you use the Accentrop speech-recognition demo, we collect:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
              <li><strong className="text-foreground">Typed text</strong> — what you enter in the "What I am trying to say" field</li>
              <li><strong className="text-foreground">Transcribed text</strong> — the live transcript produced by your browser's speech-recognition engine</li>
              <li><strong className="text-foreground">Audio recording</strong> — the raw audio captured by your microphone during a session</li>
              <li><strong className="text-foreground">Origin (optional)</strong> — a self-reported cultural, city, or country label you choose to provide</li>
            </ul>
            <p className="mt-3">We do <strong>not</strong> collect names, email addresses, or any other personally identifying information unless you voluntarily submit them via the Contact Us form.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">3. How We Use Your Data</h2>
            <p>Collected recordings and transcripts are used solely to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
              <li>Train and improve AI models for accent recognition and naturalisation</li>
              <li>Evaluate the accuracy of speech-to-text engines across diverse accents</li>
              <li>Conduct research into human-AI communication barriers</li>
            </ul>
            <p className="mt-3">We do not sell your data to third parties or use it for targeted advertising.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">4. Storage and Security</h2>
            <p>Audio files are stored in a private cloud object-storage bucket. Text data is stored in an encrypted PostgreSQL database. Access is restricted to authorised Cryp Tok Solutions personnel. We apply industry-standard security measures but cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">5. Data Retention</h2>
            <p>Recordings and transcripts are retained indefinitely for research purposes unless you request deletion. To request deletion of your data, contact us using the details in Section 8.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">6. Microphone Access</h2>
            <p>The recording feature requires microphone access, which your browser will request explicitly. You may deny access at any time through your browser settings. No audio is collected unless you actively click "Record".</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">7. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to access, correct, or request deletion of your personal data. To exercise these rights, contact us via the details below.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">8. Contact Us</h2>
            <p>For privacy-related enquiries, use the <a href="/#contact" className="text-primary underline underline-offset-2 hover:text-primary/80">Contact Us</a> form on our home page or visit <a href="https://cryptok.online" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80">cryptok.online</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. The effective date at the top of this page will reflect the most recent revision. Continued use of the Service after changes are posted constitutes acceptance of the revised Policy.</p>
          </section>
        </div>
      </main>
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
