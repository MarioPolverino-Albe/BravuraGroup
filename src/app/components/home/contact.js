import React from "react";
import styles from "../../styles/contact.module.css";
import {
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoFacebook,
} from "react-icons/io5";

const Contact = () => {
  return (
    <div className={styles.contactMain}>
      <div className="container p-0">
        <div className={styles.contactMainInner}>
          <div className={styles.contactUs}>
            <div className={styles.contactHead}>
              <h3>Contact us</h3>
              <p>We will reply to you within 24 hours</p>
            </div>
            <form
              name="contact-new-form"
              id="contact-new-form"
              method="POST"
              encType="application/x-www-form-urlencoded"
              className={styles.form}
              action="/success"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact-new-form" />

              <div className={styles.inputs}>
                <input
                  type="text"
                  name="full_name"
                  placeholder="Full Name"
                  required
                />
                <input
                  type="email"
                  name="your_email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className={styles.textBox}>
                <textarea
                  type="text"
                  name="your_message"
                  placeholder="Your message"
                />
              </div>
              <button type="submit">Send</button>
            </form>
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.contactHead}>
              <h3>Bravura Group</h3>
              <p>See you soon</p>
            </div>
            <ul className={styles.links}>
              <li>
                <a href="#">
                  <IoLogoLinkedin />
                </a>
              </li>
              <li>
                <a href="#">
                  <IoLogoInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <IoLogoFacebook />
                </a>
              </li>
            </ul>
            <div className={styles.siteLink}>
              <a href="#">www.bravuragroup.com.au</a>
            </div>
            <div className={styles.mapHead}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.9680328493995!2d151.2061233152128!3d-33.86748698065578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3f65bc0bbd%3A0xf537a2f6e270df79!2s90%20Arthur%20St%2C%20North%20Sydney%20NSW%202060%2C%20Australia!5e0!3m2!1sen!2sus!4v1626768276343!5m2!1sen!2sus"
                className={styles.mapIframe}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className={styles.addressBox}>
              <p>Registered Office</p>
              <p>Level 12, 90 Arthur Street,</p>
              <p>North Sydney NSW 2060 Australia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
