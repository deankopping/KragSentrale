import { AnimatePresence, motion } from "motion/react";

import "./styles/PopUpMenu.css";
import { useEffect, useState } from "react";
import { MenuItem } from "./Header";

const PopUpMenu = ({
  isOpen,
  menuItems,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (x: boolean) => void;
  menuItems: MenuItem[];
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 400);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      const headerOffset = isMobile ? 75 : 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      const checkScrollEnd = () => {
        if (Math.abs(window.pageYOffset - offsetPosition) < 2) {
          setIsOpen(false);
          window.removeEventListener("scroll", checkScrollEnd);
        }
      };

      window.addEventListener("scroll", checkScrollEnd);

      setTimeout(() => {
        setIsOpen(false);
        window.removeEventListener("scroll", checkScrollEnd);
      }, 1000);
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
          style={{ marginTop: isMobile ? "-2em" : "" }}
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
          {menuItems.map((item, index) => {
            return (
              <h4
                key={index}
                className="popUpMenuItem"
                onClick={() => {
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
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
