import About from "@/components/About";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Faq />
      <Footer />
    </div>
  );
}
