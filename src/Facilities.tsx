import "./styles/Facilities.css";

import TensionBoard from "./assets/TensionBoard.jpg";
import { motion } from "framer-motion";

const Facilities = () => {
  return (
    <div className="scroller">
      <ul className="tag-list scroller-inner">
        <motion.li
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }}
        >
          <img src={TensionBoard} alt="Tension Board" className="image" />
        </motion.li>
        <li>Kilter Board</li>
        <li>Spray Wall</li>
        <li>Bouldering Walls</li>
        <li>Gym Area</li>
        <li>
          <img src={TensionBoard} alt="Tension Board" className="image" />
        </li>
        <motion.li
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
        >
          Kilter Board
        </motion.li>
        <li>Spray Wall</li>
        <li>Bouldering Walls</li>
        <li>Gym Area</li>
      </ul>
    </div>
  );
};

export default Facilities;
