import React from "react";
import { motion, useInView } from "framer-motion";
import "../styles/Footer.css";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const text = isMobile ? "KRAG" : "KRAG SENTRALE";
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: {
      y: 200,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <footer className="footer" ref={ref}>
      <motion.div className="footer-top-text-container">
        <div className="footerTextGroup">
          <motion.h1>CONTACT US</motion.h1>
          <a href="mailto:kragSentrale@gmail.com" className="footerTextItem">
            kragSentrale@gmail.com
          </a>
          <a href="tel:0842635734" className="footerTextItem">
            0842635734
          </a>
        </div>
        <div className="footerTextGroup">
          <motion.h1>FOLLOW US</motion.h1>
          <a href="" className="footerTextItem">
            Instagram
          </a>
        </div>
        <div className="footerTextGroup">
          <motion.h1>CONTACT US</motion.h1>
          <a href="mailto:kragSentrale@gmail.com" className="footerTextItem">
            kragSentrale@gmail.com
          </a>
        </div>{" "}
        <div className="allRightsReserevd">© all rights reserved</div>
      </motion.div>

      <motion.div
        className="footer-text-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {text.split("").map((letter, index) => (
          <motion.div
            key={index}
            className="footer-letter"
            variants={letterVariants}
            whileHover={{
              y: -40,
              scale: 1.2,
              color: "#e1381b",
              transition: {
                duration: 0.1,
                ease: "linear",
              },
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.div>
        ))}
      </motion.div>
    </footer>
  );
};

export default Footer;
