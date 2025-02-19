import { motion } from "framer-motion";

export const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { opacity: { duration: 0 } } },
};

export const Typewriter = ({
  text,
  staggerValue,
}: {
  text: string;
  staggerValue: number;
}) => (
  <motion.p
    key={text}
    variants={{
      hidden: {},
      visible: { opacity: 1, transition: { staggerChildren: staggerValue } },
    }}
    initial="hidden"
    animate="visible"
  >
    {text.split("").map((char: string, i: number) => (
      <motion.span key={`${char}-${i}`} variants={letterVariants}>
        {char}
      </motion.span>
    ))}
  </motion.p>
);
