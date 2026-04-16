import Hero from "@/components/Hero";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Workshops from "@/components/Workshops";
import AtelierLife from "@/components/AtelierLife";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Workshops />
      <AtelierLife />
      <Process />
      <Gallery />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}
