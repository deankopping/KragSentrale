import styles from "../styles/about.module.css";

import { Typewriter } from "./typewriter.tsx";
const AboutUs = () => {
  return (
    <div
      className={`sectionContainer ${styles.sectionContainer}`}
      style={{ justifyContent: "start", minHeight: "fit-content" }}
    >
      <div className={styles.aboutContent}>
        <Typewriter
          text={[
            "For years, climbers in the country have lacked a dedicated space to push their limits and refine their skills. We're changing that. Our facility offers the ideal environment for experienced climbers to hone their craft, with state-of-the-art training boards and a variety of climbing setups designed for all levels. We believe we have the best training environment in South Africa, and we're excited to share it with you.",
          ]}
          staggerValue={0.01}
        ></Typewriter>
      </div>
    </div>
  );
};

export default AboutUs;
