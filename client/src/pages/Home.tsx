import LimitedOfferBanner from "@/components/LimitedOfferBanner";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductGallery from "@/components/ProductGallery";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import GuaranteeSection from "@/components/GuaranteeSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <LimitedOfferBanner />
      <HeroSection />
      <BenefitsSection />
      <ProductGallery />
      <TestimonialsCarousel />
      <PricingSection />
      <FAQSection />
      <GuaranteeSection />
    </div>
  );
}
