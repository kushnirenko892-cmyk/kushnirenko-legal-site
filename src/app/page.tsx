import { Footer } from "@/components/layout/Footer";
import { FooterInversionZone } from "@/components/layout/FooterInversionZone";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { BusinessSection } from "@/components/sections/BusinessSection";
import { CasesSection } from "@/components/sections/CasesSection";
import { Directions } from "@/components/sections/Directions";
import { FAQSection } from "@/components/sections/FAQSection";
import { Hero } from "@/components/sections/Hero";
import { FloatingTelegramCTA } from "@/components/luxury/FloatingTelegramCTA";
import { LicensingSection } from "@/components/sections/LicensingSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { TradesSection } from "@/components/sections/TradesSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Directions />
        <BusinessSection />
        <LicensingSection />
        <TradesSection />
        <CasesSection />
        <AboutSection />
        <ReviewsSection />
        <FooterInversionZone>
          <FAQSection variant="scroll-inverted" />
          <div data-footer-inversion-switch aria-hidden="true" className="h-px" />
          <Footer withinInvertedZone />
        </FooterInversionZone>
      </main>
      <FloatingTelegramCTA />
    </>
  );
}
