import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/Header.css";
import Hamburger from "hamburger-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(window.innerWidth <= 768);
  const [isOpen, setOpen] = useState(false);

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30); // Adjust scroll threshold as needed
    };

    if (window.innerWidth > 768) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Banner */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            exit={{ opacity: 0, scale: 0 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <header className="container">
              <ul className="items">
                <li>PRICES</li>
                <li>EVENTS</li>
                <li>ABOUT</li>
                <li>FACILITIES</li>
              </ul>
            </header>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isScrolled && (
          <header className="container">
            <motion.div
              className="items"
              exit={{ opacity: 0, scale: 0 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.div className="hamburgerMenuIcon">
                {" "}
                <Hamburger size={22} toggled={isOpen} toggle={setOpen} />
              </motion.div>
            </motion.div>
          </header>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
