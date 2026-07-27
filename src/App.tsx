import { BackgroundOrbs } from '@/components/BackgroundOrbs';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { AIAgents } from '@/components/AIAgents';
import { HowItWorks } from '@/components/HowItWorks';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Results } from '@/components/Results';
import { Pricing } from '@/components/Pricing';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans text-white">
      <BackgroundOrbs />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AIAgents />
        <HowItWorks />
        <WhyChooseUs />
        <Results />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
