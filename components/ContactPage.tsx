// components/ContactPage.jsx
import React from 'react';
import styles from '../css/ContactPage.module.css';

const ContactPage = () => {
  return (
    <section className={styles.contactContainer}>
      <h2 className={styles.contactTitle}>Get in Touch</h2>
      <p className={styles.contactInfo}>
        Let's get this conversation started. Tell us a bit about yourself,and we'll get in touch as soon as we can.
      </p>

      <form className={styles.contactForm}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactPage;
