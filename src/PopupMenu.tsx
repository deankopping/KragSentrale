import { AnimatePresence, motion } from "motion/react";

import "./styles/PopUpMenu.css";
import { useEffect, useState } from "react";
import { MenuItem } from "./Header";
import { Router } from "react-router-dom";

const PopUpMenu = ({
  isOpen,
  menuItems,
}: {
  isOpen: boolean;
  setIsOpen: (x: boolean) => void;
  menuItems: MenuItem[];
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 400);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 20; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

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
                  item.action === "scroll"
                    ? scrollToSection(item.id)
                    : (window.location.href = `/${item.id}`);
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
