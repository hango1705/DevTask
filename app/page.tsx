import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { ServicesSection } from "@/components/landing/services-section"
import { ProcessSection } from "@/components/landing/process-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { FAQSection } from "@/components/landing/faq-section"
import { CTABanner } from "@/components/landing/cta-banner"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <main id="main-content" className="min-h-[100dvh] bg-[#0F172A] relative">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
      <Footer />
    </main>
  )
}
