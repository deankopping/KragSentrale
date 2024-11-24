import React, { useState } from "react";
import "./index.css";
import { AnimatePresence, motion } from "motion/react";
import { transform } from "motion";

const priceList = [
  {
    item: "DAY PASS",
    price: "R120",
    details: "Access for one day from 9 AM to 5 PM.",
  },
  {
    item: "MEMBERSHIP",
    price: "R120",
    details: "Monthly membership with unlimited access.",
  },
  {
    item: "DEBIT ORDER",
    price: "R120",
    details: "Monthly membership with unlimited access.",
  },
];

const PriceList = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleOnClick = (index: number) => {
    setClickedIndex(index === clickedIndex ? null : index); // Toggle on/off
  };

  return (
    <>
      <div className="priceListContainer">
        <h2>PRICE LIST</h2>
        {priceList.map((item, index: number) => (
          <AnimatePresence>
            <motion.button
              initial={false}
              //whileHover={clickedIndex != index ? { scale: 1.2 } : ""}
              layout
              key={index}
              onTap={() => handleOnClick(index)}
              className={`priceListItem`}
            >
              <div className="priceListHeader">
                <div>{clickedIndex != index && item.item}</div>
              </div>

              {clickedIndex === index && (
                <motion.div
                  className="priceListDetails"
                  exit={{ opacity: 0, scale: 0 }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      listStyle: "none",
                    }}
                  >
                    <h3>{item.item}</h3>
                    <p>{item.details}</p>
                    <h4>{item.price}</h4>
                  </div>
                </motion.div>
              )}
            </motion.button>{" "}
          </AnimatePresence>
        ))}
      </div>
    </>
  );
};

export default PriceList;
