import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { BusinessSection } from "@/components/sections/BusinessSection";
import { CasesSection } from "@/components/sections/CasesSection";
import { Directions } from "@/components/sections/Directions";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { FloatingTelegramCTA } from "@/components/luxury/FloatingTelegramCTA";
import { KushSection } from "@/components/sections/KushSection";
import { LicensingSection } from "@/components/sections/LicensingSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
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
        <KushSection />
        <ProcessSection />
        <CasesSection />
        <AboutSection />
        <ReviewsSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <FloatingTelegramCTA />
      <Footer />
    </>
  );
}
