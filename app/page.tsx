import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Pillars from '@/components/Pillars';
import Personas from '@/components/Personas';
import Pricing from '@/components/Pricing';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pillars />
      <Personas />
      <Pricing />
      <CtaSection />
      <Footer />
    </>
  );
}
