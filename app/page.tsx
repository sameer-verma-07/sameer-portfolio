import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FlagshipProject from "../components/FlagshipProject";
import BeyondTheCode from "../components/BeyondTheCode";
import TechArsenal from "../components/TechArsenal";
import Journey from "../components/Journey";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <Hero />
      <FlagshipProject />
      <BeyondTheCode />
      <TechArsenal />
      <Journey />
      <Contact />
      <Footer />
      
    </>
  );
}