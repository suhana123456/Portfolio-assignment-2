// components/AboutContent.jsx
import React from 'react';
import styles from '../css/AboutContent.module.css';

const AboutContent = () => {
  return (
    <section className={styles.aboutContent}>
      <h2>About Me</h2>
      <p>
        Hello! I am Suhana Khan a passionate web developer.
        I specialize in front-end development, particularly using React, Next.js, and Tailwind CSS, but I also
        have experience with back-end technologies like Node.js. My goal is to build fast, responsive,
        and amazing web applications.
      </p>

      <p>
        I am always excited to learn new technologies and improve my skills. Outside of coding, I Like sketching and travelling. My goal is to continuously challenge myself and
        create innovative solutions for my clients and users.
      </p>
    </section>
  );
};

export default AboutContent;
