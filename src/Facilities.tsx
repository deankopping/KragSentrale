import "./styles/Facilities.css";

import TensionBoard from "./assets/TensionBoard.jpg";
import { motion } from "framer-motion";

const Facilities = () => {
  return (
    <div className="scroller">
      <ul className="tag-list scroller-inner">
        <motion.li
        //   whileHover={{
        //     scale: 1.2,
        //     transition: { duration: 0.1 },
        //   }}
        ></motion.li>
        <motion.li
        //   whileHover={{
        //     scale: 1.2,
        //     transition: { duration: 0.5 },
        //   }}
        >
          Kilter Board
        </motion.li>
        <motion.li
        //   whileHover={{
        //     scale: 1.2,
        //     transition: { duration: 0.5 },
        //   }}
        >
          Spray Wall
        </motion.li>
        <motion.li
        //   whileHover={{
        //     scale: 1.2,
        //     transition: { duration: 0.5 },
        //   }}
        >
          Bouldering Walls
        </motion.li>
        <motion.li
        //   whileHover={{
        //     scale: 1.2,
        //     transition: { duration: 0.5 },
        //   }}
        >
          Gym Area
        </motion.li>
        <motion.li
        //   whileHover={{
        //     scale: 1.2,
        //     transition: { duration: 0.5 },
        //   }}
        >
          <div className="tb2">
            <div className="tag">
              <p>Tension Board 2</p>
            </div>
          </div>
        </motion.li>
        <motion.li
        //   whileHover={{
        //     scale: 1.2,
        //     transition: { duration: 0.5 },
        //   }}
        >
          Kilter Board
        </motion.li>
        <motion.li
        //   whileHover={{
        //     scale: 1.2,
        //     transition: { duration: 0.5 },
        //   }}
        >
          Spray Wall
        </motion.li>
        <motion.li
        //   whileHover={{
        //     scale: 1.2,
        //     transition: { duration: 0.5 },
        //   }}
        >
          Bouldering Walls
        </motion.li>
        <motion.li
        //   whileHover={{
        //     scale: 1.2,
        //     transition: { duration: 0.5 },
        //   }}
        >
          Gym Area
        </motion.li>
      </ul>
    </div>
  );
};

export default Facilities;
