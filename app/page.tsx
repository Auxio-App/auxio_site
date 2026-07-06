import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PainSection  from '@/components/PainSection';
import AgendaSection from '@/components/AgendaSection';
import CRMSection from '@/components/CRMSection';
import FinanceSection from '@/components/FinanceSection';
import HowItWorks from '@/components/HowItWorks';
import Pillars from '@/components/Pillars';
import Personas from '@/components/Personas';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PainSection />
      <AgendaSection />
      <CRMSection />
      <FinanceSection />
      <HowItWorks />
      <Pillars />
      <Personas />
      <Pricing />
      <Footer />
    </>
  );
}
