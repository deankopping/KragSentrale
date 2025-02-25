import { motion } from "framer-motion";

export const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { opacity: { duration: 0 } } },
};

export const Typewriter = ({
  text,
  staggerValue,
}: {
  text: string[];
  staggerValue: number;
}) => (
  <div>
    {text.map((paragraph, index) => (
      <motion.p
        key={index}
        variants={{
          hidden: {},
          visible: {
            opacity: 1,
            transition: { staggerChildren: staggerValue },
          },
        }}
        initial="hidden"
        animate="visible"
        style={{ marginBottom: "0.5em", textAlign: "left" }}
      >
        {paragraph.split("").map((char: string, i: number) => (
          <motion.span key={`${char}-${i}`} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </motion.p>
    ))}
  </div>
);
