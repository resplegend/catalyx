import CTASection from '@/components/sections/cta'
import FeatureSummarySection from '@/components/sections/feature-summary'
import FeaturesSection from '@/components/sections/features'
import HeroSection from '@/components/sections/hero'
import LogoWallSection from '@/components/sections/logo-wall'
import StepsSection from '@/components/sections/steps'
import TestimonialsSection from '@/components/sections/testimonials'
import TrustedBySection from '@/components/sections/trusted-by'
import ValueIntroSection from '@/components/sections/value-intro'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValueIntroSection className='md:hidden' />
      <TrustedBySection />
      <ValueIntroSection className='hidden md:block' />
      <StepsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FeatureSummarySection />
      <LogoWallSection />
      <CTASection />
    </>
  )
}
