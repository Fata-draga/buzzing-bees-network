import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-scroll";
import About from "./components/About";
import Services from "./components/Services";
import HealthSafety from "./components/HealthSafety";
import Policies from "./components/Policies";
import JoinForm from "./components/JoinForm";
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";
import heroImage from "./assets/hero-kids.jpg";

function App() {
  const [showJoin, setShowJoin] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <Navbar onBookVisit={() => setShowContact(true)} />

      <header className="hero" data-aos="fade-down">
        <div className="hero-text">
          <h2>
            Welcome to <br />
            Buzzing Bees Network
          </h2>
          <p>A nurturing community of trusted childcare providers</p>
          <button onClick={() => setShowJoin(true)}>Join Our Hive</button>
        </div>
        <img src={heroImage} alt="Children smiling" className="hero-img" />
        <img
          src={require("./assets/bee-fly.png")}
          alt="Flying bee"
          className="bee-fly"
        />
      </header>

      <section id="about" data-aos="fade-up">
        <About />
      </section>

      <section id="services" data-aos="fade-right">
        <Services />
      </section>

      <section id="health" data-aos="fade-left">
        <HealthSafety />
      </section>

      <section id="policies" data-aos="zoom-in">
        <Policies />
      </section>

      <JoinForm isOpen={showJoin} onClose={() => setShowJoin(false)} />
      <ContactForm isOpen={showContact} onClose={() => setShowContact(false)} />
    </div>
  );
}

export default App;
