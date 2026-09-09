import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ServiceGrid } from "@/components/ServiceGrid";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import { HowItWorks } from "@/components/HowItWorks";
import { ReviewSection } from "@/components/ReviewSection";
import { Financing } from "@/components/Financing";
import { Maintenance } from "@/components/Maintenance";
import { ServiceAreaGrid } from "@/components/ServiceAreaGrid";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { JsonLd } from "@/components/JsonLd";
import { buildFaqSchema } from "@/lib/schema";
import { homepageFaqs } from "@/lib/faqs";

export default function Home() {
  return (
    <>
      <JsonLd data={buildFaqSchema(homepageFaqs)} />
      <Hero />
      <TrustBar />
      <ServiceGrid />
      <WhyChooseUs />
      <EmergencyBanner />
      <HowItWorks />
      <ReviewSection />
      <Financing />
      <Maintenance />
      <ServiceAreaGrid />
      <FAQSection faqs={homepageFaqs} />
      <FinalCTA />
    </>
  );
}
