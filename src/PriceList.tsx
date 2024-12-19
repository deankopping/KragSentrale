import React, { useState } from "react";
import "./styles/PriceList.css";
import { AnimatePresence, motion } from "motion/react";
import { useInView } from "react-intersection-observer";

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
  {
    item: "DEBIT ORDER",
    price: "R120",
    details: "Monthly membership with unlimited access.",
  },
];

const PriceList = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const { ref: priceListRef, inView: priceListView } = useInView({
    threshold: 0.5,
  });

  const handleOnClick = (index: number) => {
    setClickedIndex(index === clickedIndex ? null : index); // Toggle on/off
  };

  return (
    <div ref={priceListRef}>
      <div
        className={priceListView ? "priceListHeader" : ""}
        style={{ opacity: !priceListView ? 0 : 1 }}
      >
        <svg
          width="400"
          height="100"
          viewBox="0 0 330 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_6_3)">
            <path
              d="M7.96 53V11.024L4 1.16H24.736C29.056 1.16 32.632 1.76 35.464 2.96C38.296 4.112 40.408 6.08 41.8 8.864C43.192 11.648 43.888 15.44 43.888 20.24C43.888 26.864 42.304 31.64 39.136 34.568C35.968 37.496 31.168 38.96 24.736 38.96H22V53H7.96ZM22 28.664C24.304 28.664 26.008 28.04 27.112 26.792C28.264 25.544 28.84 23.312 28.84 20.096C28.84 17.648 28.624 15.8 28.192 14.552C27.808 13.304 27.112 12.464 26.104 12.032C25.144 11.552 23.776 11.312 22 11.312V28.664ZM65.4402 1.16C69.6642 1.16 73.1922 1.712 76.0242 2.816C78.8562 3.872 80.9682 5.672 82.3602 8.216C83.8002 10.712 84.5202 14.144 84.5202 18.512C84.5202 22.16 83.9682 25.16 82.8642 27.512C81.7602 29.816 80.0802 31.664 77.8242 33.056L86.6082 53H70.9842L65.2962 36.152H62.9922V53H48.9522V11.024L44.9922 1.16H65.4402ZM62.9922 26.504C65.2002 26.504 66.8322 25.952 67.8882 24.848C68.9442 23.744 69.4722 21.8 69.4722 19.016C69.4722 16.808 69.2802 15.176 68.8962 14.12C68.5122 13.016 67.8402 12.272 66.8802 11.888C65.9682 11.504 64.6722 11.312 62.9922 11.312V26.504ZM90.2088 1.16H104.249V53H90.2088V1.16ZM108.94 27.44C108.94 20.624 109.732 15.272 111.316 11.384C112.9 7.448 115.276 4.664 118.444 3.032C121.66 1.4 125.644 0.583997 130.396 0.583997C131.932 0.583997 133.684 0.679997 135.652 0.871997C137.668 1.016 139.612 1.304 141.484 1.736V20.744H132.772L131.62 12.032C130.324 12.032 129.196 12.2 128.236 12.536C127.324 12.824 126.556 13.472 125.932 14.48C125.308 15.488 124.828 17.024 124.492 19.088C124.204 21.152 124.06 23.912 124.06 27.368C124.06 31.112 124.468 34.064 125.284 36.224C126.1 38.336 127.324 39.848 128.956 40.76C130.636 41.624 132.772 42.056 135.364 42.056C136.516 42.056 137.62 41.984 138.676 41.84C139.732 41.696 140.86 41.528 142.06 41.336V52.712C140.668 53.048 138.988 53.288 137.02 53.432C135.052 53.624 133.3 53.72 131.764 53.72C123.556 53.72 117.7 51.512 114.196 47.096C110.692 42.68 108.94 36.128 108.94 27.44ZM143.5 1.16H177.988L175.828 12.68H161.5V20.6H174.964L172.804 32.12H161.5V41.48H178.492L176.332 53H147.46V11.024L143.5 1.16ZM200.81 1.16H214.85V40.76H230.762L228.53 53H200.81V1.16ZM234.349 1.16H248.389V53H234.349V1.16ZM267.841 41.264C269.665 41.264 271.033 41 271.945 40.472C272.857 39.944 273.313 39.08 273.313 37.88C273.313 37.064 273.097 36.416 272.665 35.936C272.233 35.456 271.465 34.976 270.361 34.496L262.729 30.968C259.897 29.672 257.713 27.944 256.177 25.784C254.641 23.624 253.873 20.48 253.873 16.352C253.873 11.072 255.241 7.136 257.977 4.544C260.761 1.904 265.345 0.559997 271.729 0.511998C274.369 0.511998 276.769 0.631998 278.929 0.871997C281.089 1.112 282.817 1.376 284.113 1.664C285.409 1.904 286.057 2.024 286.057 2.024L284.617 13.616C284.617 13.616 284.017 13.544 282.817 13.4C281.665 13.256 280.225 13.136 278.497 13.04C276.769 12.896 275.089 12.824 273.457 12.824C271.729 12.824 270.409 13.088 269.497 13.616C268.633 14.096 268.201 15.032 268.201 16.424C268.201 17.192 268.537 17.84 269.209 18.368C269.881 18.848 270.817 19.352 272.017 19.88L278.137 22.544C281.401 23.984 283.777 25.784 285.265 27.944C286.753 30.056 287.497 33.08 287.497 37.016C287.497 42.344 286.105 46.448 283.321 49.328C280.537 52.208 275.953 53.672 269.569 53.72C266.401 53.72 263.449 53.504 260.713 53.072C257.977 52.688 255.553 52.232 253.441 51.704L254.881 40.112C254.881 40.112 255.457 40.208 256.609 40.4C257.809 40.592 259.393 40.784 261.361 40.976C263.329 41.168 265.489 41.264 267.841 41.264ZM323.473 12.68H313.969V53H299.857V12.68H289.345V1.16H325.633L323.473 12.68Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_6_3"
              x="0"
              y="0.511998"
              width="329.633"
              height="61.208"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_6_3"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_6_3"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="contentContainer">
        <div className="priceListContiner">
          {priceList.map((item, index: number) => (
            <AnimatePresence>
              <motion.button
                initial={false}
                // whileHover={clickedIndex != index ? { scale: 1.2 } : ""}
                layout
                key={index}
                onTap={() => handleOnClick(index)}
                className="dropDownPriceListItem"
              >
                <div className="">
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

        <div className="priceListContainer">
          {priceList.map((item, index) => (
            <AnimatePresence>
              <motion.div
                className="priceListCard"
                key={index}
                exit={{ opacity: 0, scale: 0 }}
                initial={{ opacity: 1, scale: 0.95 }}
                animate={{ translateX: priceListView ? index * 330 : 0 }}
                transition={{
                  duration: 1,
                  delay: 1,
                }}
              >
                <h1>{item.item}</h1>
                <p>{item.details}</p>
                <p>{item.price}</p>
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceList;
