import { useState } from "react";
import "./styles/PriceList.css";
import { AnimatePresence, motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import TableComponent, { PassTypes } from "./PriceDetails";
import ReactMarkdown from "react-markdown";
import { useMediaQuery } from "react-responsive";

const priceList = [
  {
    item: "ENTRANCE",
    details: `
# Members
Members with a valid, paid membership receive **24/7 unlimited access** to the gym. Each member is provided with an NFC tag, allowing them to easily scan in and access the facilities. Memberships can be acquired during regular hours when the gym is open to day customers. We highly recommend this option as the preferred way to climb at Krag Sentrale.

# Day Customers
The gym is open to day customers from **Tuesday to Thursday, 16:00 - 21:00**. Outside of these hours, non-members may attempt to gain access if someone is available to let them in. In such cases, we operate on an *honesty system* for payment. CCTV cameras are installed on the premises to ensure accountability, so please ensure to make the necessary payment when accessing the gym.
`,
  },
  {
    item: "THE DAY PASS",
    details: <TableComponent passType={PassTypes.dayPass} />,
  },
  {
    item: "THE SESSION PASS",
    details: <TableComponent passType={PassTypes.sessionPass} />,
  },
  {
    item: "THE TIME PASS",
    details: <TableComponent passType={PassTypes.timePass} />,
  },
];

const PriceList = () => {
  const [clickedIndex, setClickedIndex] = useState<number>(0);

  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  const { ref: priceListRef, inView: priceListView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={priceListRef}>
      <div className="entranceInfoContainer">
        <h2 className="title">CLIMBING AT KRAG SENTRALE</h2>
        <div className="contentContainer">
          <div className="priceListContainer">
            {priceList.map((item, index) => (
              <AnimatePresence key={index}>
                <motion.div
                  style={{
                    backgroundColor: index === clickedIndex ? "#e1381b" : "",
                    color: index === clickedIndex ? "white" : "",
                  }}
                  className="priceListCard"
                  key={index}
                  animate={{
                    translateY: isMobile ? 0 : priceListView ? index * 100 : 0,
                    transition: { delay: 1, duration: 1 },
                  }}
                  onClick={() => {
                    setClickedIndex(index);
                  }}
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 1.1 }}
                >
                  <h4 style={{ fontSize: isMobile ? "0.9em" : "2em" }}>
                    {item.item}
                  </h4>
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
          <div className="details">
            {" "}
            <div>
              {typeof priceList[clickedIndex].details === "string" ? (
                <ReactMarkdown
                  className="react-markdown"
                  components={{
                    strong: ({ children }) => (
                      <strong
                        style={{
                          color: "#e1381b",
                          fontWeight: "bold",
                        }}
                      >
                        {children}
                      </strong>
                    ),
                  }}
                >
                  {priceList[clickedIndex].details}
                </ReactMarkdown>
              ) : (
                <>{priceList[clickedIndex].details}</>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
