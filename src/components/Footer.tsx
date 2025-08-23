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
          <a href="mailto:info@kragsentrale.co.za" className="footerTextItem">info@kragsentrale.co.za</a>
          <a href="https://www.instagram.com/kragsentrale/" className="footerTextItem">instagram</a>
        </div>
        <div className="footerTextGroup">
          <motion.h1>FIND US</motion.h1>
          <a href="https://maps.app.goo.gl/3xCP8WDUmsbPjbLw8" className="footerTextItem">48 Milton Road, Observatory, Cape Town</a>
        </div>
        <div className="footerTextGroup">
          <motion.h1>TERMS AND CONDITIONS</motion.h1>
          <a href="/terms-and-conditions#terms-of-use" className="footerTextItem">Terms of Use</a>
          <a href="/terms-and-conditions#privacy-policy" className="footerTextItem">Privacy Policy</a>
        </div>
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
              color: "#F38BA8",
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
