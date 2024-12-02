import { AnimatePresence, motion } from "motion/react";

import "./styles/PopUpMenu.css";
import { useEffect, useState } from "react";
import Socials from "./Socials";

const PopUpMenu = ({ isOpen }: { isOpen: boolean }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 375) {
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
            width: isMobile ? "100%" : "300px",
            height: "fit-content",
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <h4 className="popUpMenuItem">Home</h4>
          <h4 className="popUpMenuItem">Facilities</h4>
          <h4 className="popUpMenuItem">Location</h4>
          <h4 className="popUpMenuItem">Events</h4>
          <h4 className="popUpMenuItem">Price List</h4>
          <h4 className="popUpMenuItem">About</h4>
          <h4 className="popUpMenuItem">Contact</h4>
          <Socials />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopUpMenu;
