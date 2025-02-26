import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Subscribe from "@/components/Subscribe";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Subscribe />
      
      <Footer />
    </div>
  );
}
