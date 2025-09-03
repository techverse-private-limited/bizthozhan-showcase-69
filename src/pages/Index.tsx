
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Benefits />
      <About />
      <Services />
      <Contact />
      <Footer />
      <WhatsAppButton />
      {/* Add spacing for mobile navigation */}
      <div className="md:hidden h-20"></div>
    </div>
  );
};

export default Index;
