"use client";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
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
    <>
      <div className="container">
        <nav className={styles.navbar}>
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
        </nav>
      </div>
    </>
  );
};

export default Navbar;
