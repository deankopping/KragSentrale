import styles from "../styles/about.module.css";

import { Typewriter } from "./typewriter.tsx";
const AboutUs = () => {
  return (
    <div
      className={`sectionContainer ${styles.sectionContainer}`}
      style={{ justifyContent: "start" }}
    >
      <h2 className={styles.sectionTitle}>ABOUT US</h2>
      <div className={styles.aboutContent}>
        <Typewriter
          text={[
            "At Krag Sentrale, we're a passionate team dedicated to advancing the sport of climbing in South Africa.",

            "For years, climbers in the country have lacked a dedicated space to push their limits and refine their skills. We're changing that. Our facility offers the ideal environment for experienced climbers to hone their craft, with state-of-the-art training boards and a variety of climbing setups designed for all levels. We believe we have the best training environment in South Africa, and we're excited to share it with you.",

            "Whether you're a seasoned climber aiming for new heights or someone who's been climbing for a few months and can comfortably tackle routes around 6a+, our space is built for you. We’re not just a climbing gym — we’re a community. Our goal is to grow and nurture the climbing scene together.",

            "Come join us, be part of a vibrant climbing community, and see for yourself why we’re the go-to spot for climbers in SA.",
          ]}
          staggerValue={0.01}
        ></Typewriter>
      </div>
    </div>
  );
};

export default AboutUs;
