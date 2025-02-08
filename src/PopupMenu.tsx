import { AnimatePresence, motion } from "motion/react";

import "./styles/PopUpMenu.css";
import { useEffect, useState } from "react";
import { section } from "motion/react-client";

const PopUpMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (x: boolean) => void;
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 400);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      // Start scroll
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Listen for scroll end and then close menu
      const checkScrollEnd = setInterval(() => {
        // Check if we've reached our target position (with some margin of error)
        if (Math.abs(window.pageYOffset - offsetPosition) < 10) {
          clearInterval(checkScrollEnd);
          setIsOpen(false);
        }
      }, 100);

      // Fallback to ensure menu eventually closes
      setTimeout(() => {
        clearInterval(checkScrollEnd);
        setIsOpen(false);
      }, 100);
    }
  };

  const menuItems = [
    { label: "HOME", id: "home" },
    { label: "LOCATION", id: "location" },
    { label: "FACILITIES", id: "facilities" },
    { label: "PRICES", id: "prices" },
    { label: "EVENTS", id: "events" },
    { label: "ABOUT", id: "about" },
  ];

  useEffect(() => {
    if (window.innerWidth <= 400) {
      setIsMobile(true);
    }
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="popUpMenu"
          initial={{ width: 0, height: 0, scale: 0 }}
          exit={{ width: 0, height: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            width: isMobile ? "94vw" : "300px",
            height: "fit-content",
          }}
          transition={{
            duration: 0.5,
          }}
        >
          {menuItems.map((item) => {
            return (
              <h4
                className="popUpMenuItem"
                onClick={() => {
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </h4>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopUpMenu;
