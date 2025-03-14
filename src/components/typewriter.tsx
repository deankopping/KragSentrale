import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { opacity: { duration: 0 } } },
};

export const Typewriter = ({
  text,
  staggerValue,
  className,
  textAlignment = "left",
}: {
  text: string[];
  staggerValue: number;
  className?: string;
  textAlignment?: "left" | "center" | "right" | "justify";
}) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            controls.start("visible");
            setHasAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [controls, hasAnimated]);

  return (
    <div ref={ref}>
      {text.map((paragraph, index) => (
        <motion.p
          className={className}
          key={index}
          variants={{
            hidden: {},
            visible: {
              opacity: 1,
              transition: { staggerChildren: staggerValue },
            },
          }}
          initial="hidden"
          animate={controls}
          style={{
            marginBottom: "0.5em",
            textAlign: textAlignment,
          }}
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
};
