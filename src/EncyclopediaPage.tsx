import { useEffect } from "react";
import {
  Header,
  HeroSection,
  CaptionAndDemo,
  NewsletterSection,
  ContactSection,
  Footer,
} from "./App";

export default function EncyclopediaPage() {
  useEffect(() => {
    document.title = "Accent Encyclopedia — Accentrop | Cryp Tok Solutions";
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection encyclopediaMode />
        <CaptionAndDemo encyclopediaMode />
        <NewsletterSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
