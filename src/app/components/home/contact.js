"use client";
import React, { useState } from "react";
import styles from "../../styles/contact.module.css";
import {
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoFacebook,
} from "react-icons/io5";

const Contact = () => {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      setStatus("pending");
      setError(null);
      const form = event.target;
      const formData = new FormData(form);
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setStatus("error");
      setError(e.message);
    }
  };

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
              name="contact-form"
              method="POST"
              data-netlify="true"
              onSubmit={handleFormSubmit}
            >
              <input type="hidden" name="form-name" value="contact-form" />

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
                  required
                />
              </div>
              {/* <button type="submit">Send</button> */}
              <button
                type="submit"
                disabled={status === "pending" || status === "ok"}
              >
                {status === "ok"
                  ? "Message sent successfully"
                  : status === "pending"
                  ? "Sending..."
                  : "Send message"}
              </button>
              {status === "error" && <div>Error: {error}</div>}
            </form>
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.contactHead}>
              <h3>Bravura Group</h3>
            </div>
            <ul className={styles.links}>
              <li>
                <a href="https://www.linkedin.com/company/bravuragroup/">
                  <IoLogoLinkedin />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/bravuragroup/">
                  <IoLogoInstagram />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/bravuraaustralia">
                  <IoLogoFacebook />
                </a>
              </li>
            </ul>
            {/* <div className={styles.siteLink}>
              <a href="#">www.bravuragroup.com.au</a>
            </div> */}
            <div className={styles.mapHead}>
              <a href="https://www.google.com/maps/place/Level+12%2F90+Arthur+St,+North+Sydney+NSW+2060,+Australia/@-33.8401911,151.2094699,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12aef2da8f556f:0x11098b2887e83c9!8m2!3d-33.8401911!4d151.2094699!16s%2Fg%2F11qpkl713g?entry=ttu&g_ep=EgoyMDI0MDgyMC4xIKXMDSoASAFQAw%3D%3D" target="_blank">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.9680328493995!2d151.2061233152128!3d-33.86748698065578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3f65bc0bbd%3A0xf537a2f6e270df79!2s90%20Arthur%20St%2C%20North%20Sydney%20NSW%202060%2C%20Australia!5e0!3m2!1sen!2sus!4v1626768276343!5m2!1sen!2sus"
                  className={styles.mapIframe}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </a>
            </div>
            <div className={styles.addressBox}>
              <p><strong>Registered Office</strong></p>
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
