import "../styles/Faq.css";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const Faq = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(2);

  const faqItems: FAQItem[] = [
    {
      question: "Is there a free trial available for the payed options ?",
      answer: "Yes, we offer a 14-day free trial for all paid features.",
    },
    {
      question: "Is it possible to subscribe to the app annually ?",
      answer:
        "Yes, we offer both monthly and annual subscription plans with a discount for annual commitments.",
    },
    {
      question: "Is it possible to cancel my subscription ?",
      answer:
        "Yes of course, just send us an email at contact@bookapp.com with a little reason of why you want to cancel your subscription and you will get a refund between 1-2 business days.",
    },
    {
      question: "How do I change my account mail ?",
      answer:
        "You can change your email address in your account settings under the 'Profile' section.",
    },
    {
      question: "How can I change my payment method ?",
      answer:
        "You can update your payment method in the 'Billing' section of your account settings.",
    },
  ];

  return (
    <div className="sectionContainer">
      {/* <div className="faq-header"> */}
      <h2 className="faq-title">
        Frequently asked
        <br />
        <span className="gradient-text">questions</span>
      </h2>
      {/* </div> */}

      <div className="faq-items">
        {faqItems.map((item, index) => (
          <motion.div key={index} className="faq-item" initial={false}>
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
  );
};

export default Faq;
