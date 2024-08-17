"use client";
import styles from "../../styles/hero-section.module.css";
import Image from "next/image";

import BlackLogo from "../../assets/black-logo.svg";
import Investment from "../../assets/investment.svg";
import Property from "../../assets/Property-logo.svg";
import Biologics from "../../assets/biologics-logo.svg";
import Bookkeeing from "../../assets/bookkeeing-logo.svg";
import FaithTee from "../../assets/faith-tee.svg";

const HeroSection = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styles.heroSection}>
      <div className="container">
        <div className={styles.logoHead}>
          <Image src={BlackLogo} alt="logo" />
        </div>
        <div className={styles.cardHead}>
          <div className={styles.card}>
            <Image src={Investment} alt="Investment Logo" />
          </div>
          <div className={styles.card}>
            <Image src={Property} alt="Property Logo" />
          </div>
          <div className={styles.card}>
            <Image src={Biologics} alt="Biologics Logo" />
          </div>
          <div className={styles.card}>
            <Image src={Bookkeeing} alt="Bookkeeing Logo" />
          </div>
          <div className={styles.card}>
            <Image src={FaithTee} alt="FaithTee Logo" />
          </div>
        </div>
        <div className={styles.paraHead}>
          <p>
            The Bravura Group <span>is the home</span> of the{" "}
            <span>Bravura Group of Companies.</span>
          </p>
          <p>
            We support the growth of the Bravura brand by{" "}
            <span>developing and nurturing valuable</span> Bravura businesses
            <em>
              and aspire to <span>make a difference</span> in the world we live.
            </em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
