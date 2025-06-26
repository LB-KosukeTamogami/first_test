import ModernHero from "@/components/ModernHero";
import CleanFeatures from "@/components/CleanFeatures";
import ModernCurriculum from "@/components/ModernCurriculum";
import ModernPricing from "@/components/ModernPricing";
import ModernFAQ from "@/components/ModernFAQ";
import ModernApplicationForm from "@/components/ModernApplicationForm";

export default function Home() {
  return (
    <>
      <ModernHero />
      <CleanFeatures />
      <ModernCurriculum />
      <ModernPricing />
      <ModernFAQ />
      <ModernApplicationForm />
    </>
  );
}