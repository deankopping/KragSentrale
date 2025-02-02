import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/Header.css";
import { Divide as Hamburger } from "hamburger-react";
import { Logo } from "./Logo";
import PopUpMenu from "./PopupMenu";
import Socials from "./Socials";
import { useMediaQuery } from "react-responsive";

const Header = ({}: {}) => {
  const [isScrolled, setIsScrolled] = useState(window.innerWidth <= 768);
  const [isOpen, setOpen] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 450px)" });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
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
      <AnimatePresence>
        {!isScrolled && !isMobile && (
          <motion.div>
            <header className="container">
              <ul className="items">
                <Socials />

                <motion.div
                  className="menuItems"
                  exit={{ opacity: 0, scale: 0 }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: 0 }}
                >
                  <li>LOCATION</li>
                  <li>FACILITIES</li>
                  <li>PRICES</li>
                  <li>EVENTS</li>
                  <li>ABOUT</li>
                </motion.div>
              </ul>
            </header>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {(isMobile || isScrolled) && (
          <header className="container gradient-blur">
            <motion.div
              className="items"
              exit={{ opacity: 0, scale: 0 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0 }}
            >
              <div style={{ marginLeft: "1.5em" }}>
                <motion.div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.5em",
                  }}
                >
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      transition: { duration: 1.2 },
                    }}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                      delay: 0.1,
                    }}
                  >
                    <Logo introAnimate={false} width="60" height="60" />
                  </motion.div>
                  <motion.div
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    whileHover={{
                      rotate: 360,
                      transition: { duration: 1.2 },
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                  >
                    <Logo introAnimate={false} width="60" height="60" />
                  </motion.div>
                  <motion.div
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    whileHover={{
                      rotate: 360,
                      transition: { duration: 1.2 },
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    <Logo introAnimate={false} width="60" height="60" />
                  </motion.div>
                </motion.div>
              </div>

              <motion.div className="hamburgerMenuIcon">
                <Hamburger
                  color={"white"}
                  size={25}
                  toggled={isOpen}
                  toggle={setOpen}
                  duration={0.5}
                />
              </motion.div>
              <PopUpMenu isOpen={isOpen} />
            </motion.div>
          </header>
        )}{" "}
      </AnimatePresence>
    </>
  );
};

export default Header;
