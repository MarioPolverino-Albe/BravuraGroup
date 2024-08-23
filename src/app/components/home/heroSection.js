"use client";
import styles from "../../styles/hero-section.module.css";
import Image from "next/image";

import BlackLogo from "../../assets/black-logo.svg";
import Investment from "../../assets/investment.svg";
import Property from "../../assets/Property-logo.svg";
import Biologics from "../../assets/biologics-logo.svg";
import Bookkeeing from "../../assets/bookkeeing-logo.svg";
import FaithTee from "../../assets/faith-tee.svg";
import Bayswater from "../../assets/bayswater-logo-2.jpg";

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
            <a
              href="https://www.bravurainvestment.com" target="_blank"
            >
              <Image src={Investment} alt="Investment Logo" />
            </a>
          </div>
          <div className={styles.card}>
          <a
              href="https://bravuraproperty.com.au/" target="_blank"
            >
            <Image src={Property} alt="Property Logo" />
            </a>
          </div>
          <div className={styles.card}>
          <a
              href="https://www.explorbiologics.com/" target="_blank"
            >
            <Image src={Biologics} alt="Biologics Logo" />
            </a>
          </div>
          <div className={styles.card}>
          <a
              href="https://360bookkeeping.com.au/" target="_blank"
            >
            <Image src={Bookkeeing} alt="Bookkeeping Logo" />
            </a>
          </div>
          <div className={styles.card}>
          <a
              href="https://www.faithtee.com.au/" target="_blank"
            >
            <Image src={FaithTee} alt="FaithTee Logo" />
            </a>
          </div>
          <div className={styles.card}>
          <a
              href="https://www.bayswaterassetmanagement.com.au/" target="_blank"
            >
            <Image src={Bayswater} alt="Bayswater Logo" />
            </a>
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
            and aspire to <span>make a difference</span> in the world we live.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
