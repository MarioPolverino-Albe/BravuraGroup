"use client";
import styles from "../styles/footer.module.css";

import WhiteLogo from "../assets/white-logo.svg";
import Image from "next/image";

const Footer = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offsetPosition = section.offsetTop - 100;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footerMain}>
          <div className={styles.copyright}>
            <p>© 2024 by Bravura Group</p>
          </div>
          <div className={styles.linksHead}>
            <div className={styles.buttons}>
              <button
                className={`${styles.button} ${styles.contactButton}`}
                onClick={() => handleScroll("contact")}
              >
                Contact us
              </button>
              <button
                className={`${styles.button} ${styles.callButton}`}
                onClick={() => (window.location.href = "tel:+61410544652")}
              >
                Call us
              </button>
            </div>
            <div className={styles.footerLogoHead}>
              <Image src={WhiteLogo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
