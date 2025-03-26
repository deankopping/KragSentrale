import { useState } from "react";
import "./styles/PriceList.css";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import TableComponent, { PassTypes } from "./PriceDetails";
import ReactMarkdown from "react-markdown";
import { useMediaQuery } from "react-responsive";

const priceList = [
  {
    item: "ENTRANCE",
    details: `
# Members
Members with a valid, paid membership receive **24/7 unlimited access** to the gym. Each member is provided with an NFC tag, allowing them to easily scan in and access the AnimatedImageSlider. Memberships can be acquired during regular hours when the gym is open to day customers. We highly recommend this option as the preferred way to climb at Kragsentrale.

# Day Customers
The gym is open to day customers on **Monday, Tuesday and Thursday, 16:00 - 21:00**. Outside of these hours, non-members can gain access as long as there is someone at the gym or if they go with an exisiting member. In such cases, we operate on an *honesty system* for payment. CCTV cameras are installed on the premises to ensure accountability, so please ensure to make the necessary payment when accessing the gym.
`,
  },
  {
    item: "THE DAY PASS",
    details: <TableComponent passType={PassTypes.dayPass} />,
  },
  //{
  //  item: "THE SESSION PASS",
  //  details: <TableComponent passType={PassTypes.sessionPass} />,
  //},
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
      <div className="sectionContainer background">
        <h2 className="title">CLIMBING AT KRAG SENTRALE</h2>
        <div className="contentContainer">
          <div className="priceListContainer">
            {priceList.map((item, index) => (
              <motion.div
                style={{
                  backgroundColor: index === clickedIndex ? "#e1381b" : "",
                  color: index === clickedIndex ? "white" : "",
                }}
                className="priceListCard"
                key={index}
                initial={{ opacity: 0, y: -index * 100 }}
                animate={
                  priceListView && {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1.5 },
                  }
                }
                transition={{ delay: 0.5 * index }}
                onClick={() => {
                  setClickedIndex(index);
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.1 },
                }}
                whileTap={{ scale: 1.1, transition: { duration: 0.2 } }}
              >
                <h4 style={{ fontSize: isMobile ? "0.9em" : "2em" }}>
                  {item.item}
                </h4>
              </motion.div>
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
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default PriceList;
