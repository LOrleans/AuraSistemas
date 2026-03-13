import Hero from './components/sections/Hero';
import SociosSection from './components/sections/SociosSection';
import Navbar from './components/sections/NavBar';
import Services from './components/sections/Services';
import Rentability from './components/sections/Rentability';
import Footer from './components/sections/Footer';
import Steps from './components/sections/Steps';
import FaqSection from './components/sections/FAQ';
import SocialProof from './components/sections/SocialProof';
import { Contact } from 'lucide-react';
import ContactSection from './components/sections/ContactSection';

export default function AuraLandingPage() {
  return (
    <div className="bg-[#12111F] text-white font-sans selection:bg-[#FE7F32] selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <SociosSection />
      <Rentability />
      <SocialProof />
      <Steps />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}