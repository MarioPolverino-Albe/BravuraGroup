import Footer from "./components/footer";
import Contact from "./components/home/contact";
import HeroSection from "./components/home/heroSection";
import Navbar from "./components/navbar";

import "./globals.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div style={{ overflow: "hidden" }}>
        <section id="home">
          <HeroSection />
        </section>
        <section id="contact" style={{ overflow: "hidden" }}>
          <Contact />
        </section>
      </div>
      <Footer />
    </>
  );
}
