import Nav from "@/components/club/Nav";
import Hero from "@/components/club/Hero";
import Marquee from "@/components/club/Marquee";
import About from "@/components/club/About";
import Events from "@/components/club/Events";
import Residents from "@/components/club/Residents";
import Gallery from "@/components/club/Gallery";
import Contact from "@/components/club/Contact";
import Footer from "@/components/club/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <h1 className="sr-only">PULSE/09 — Berlin Underground Nightclub & Disco</h1>
      <Hero />
      <Marquee />
      <About />
      <Events />
      <Residents />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
