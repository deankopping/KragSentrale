import "../styles/Faq.css";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

interface FAQItem {
  question: string;
  answer: string;
}

const Faq = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  const { ref: faqRef, inView: faqInView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const faqItems: FAQItem[] = [
    {
      question: "RENTAL SHOES",
      answer:
        "We do not offer rental shoes as the facility is focused on the more established climber.",
    },
    {
      question: "LOAD SHEDDING",
      answer:
        "We are unfortunatly not yet load shedding proof but improvement coming soon. The gym is still open but the boards and lights will not work.",
    },
    {
      question: "THE SETTING SCHEDULE",
      answer:
        "Look forward to a new set every Thursday. 8 -12 brand new problems to try",
    },
    {
      question: "GRADES",
      answer:
        "Grading in the gym starts from about 6a and goes all the way to the top",
    },
    {
      question: "BUYING CHALK AND UTILITIES",
      answer:
        "There is currently no chalk to be bought on premise but look forward in future to our vending machine stocking a wide array of chalk tape and brushes.",
    },
  ];

  return (
    <div className="sectionContainer">
      <div className="faqContainer">
        {isMobile ? (
          <h2 className="faq-title"> FAQs</h2>
        ) : (
          <h2 className="faq-title">
            {" "}
            FREQUENTLY <br /> ASKED <br /> QUESTIONS <br />
          </h2>
        )}

        <div className="faq-items">
          {faqItems.map((item, index) => (
            <motion.div
              ref={faqRef}
              key={index}
              className="faq-item"
              initial={{ opacity: 0, y: -index * 100 }}
              animate={{
                opacity: faqInView ? 1 : 0,
                y: faqInView ? 0 : -index * 100,
                transition: { duration: 0.5, delay: 0.8 + index * 0.2 },
              }}
              whileTap={
                activeIndex !== index
                  ? {
                      scale: 1.1,
                      transition: { duration: 0.2 },
                    }
                  : {}
              }
            >
              <motion.button
                className="faq-question"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <span>{item.question}</span>
                <motion.span
                  className="faq-icon"
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {activeIndex === index ? "−" : "+"}
                </motion.span>
              </motion.button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="faq-answer-container"
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
