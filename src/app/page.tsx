import About from "@/components/About";
import Downloadapp from "@/components/Downloadapp";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div className="bg-[#242424]">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Faq />
      <Downloadapp />
      <Footer />
    </div>
  );
}
