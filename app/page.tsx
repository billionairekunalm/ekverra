import Nav from "@/components/navigation/Nav";
import Hero from "@/components/hero/Hero";
import Intro from "@/components/sections/Intro";
import Services from "@/components/services/Services";
import Immersion from "@/components/sections/Immersion";
import Projects from "@/components/portfolio/Projects";
import Process from "@/components/sections/Process";
import Statement from "@/components/sections/Statement";
import Contact from "@/components/contact/Contact";
import WhatsAppFab from "@/components/contact/WhatsAppFab";
import Footer from "@/components/footer/Footer";
import Motion from "@/components/motion/Motion";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Intro />
        <Services />
        <Immersion />
        <Projects />
        <Process />
        <Statement />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
      <Motion />
    </>
  );
}
