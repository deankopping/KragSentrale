import "./index.css";
import "./styles/HomeBanner.css";
import AboutUs from "./components/AboutUs";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";

const HomeBanner = () => {
  const bannerRef = useRef(null);
  const [blurAmount, setBlurAmount] = useState(0);
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  useEffect(() => {
    if (isMobile) {
      return;
    } else {
      const observer = new IntersectionObserver(
        ([entry]) => {
          const visibleRatio = entry.intersectionRatio;

          const newBlurAmount = Math.min(8, (1 - visibleRatio) * 8);
          setBlurAmount(newBlurAmount);
        },
        {
          threshold: Array.from({ length: 100 }, (_, i) => i / 100),
          root: null,
        }
      );

      if (bannerRef.current) {
        observer.observe(bannerRef.current);
      }

      return () => {
        if (bannerRef.current) {
          observer.unobserve(bannerRef.current);
        }
      };
    }
  }, []);

  return (
    <>
      <div className="homeBanner" ref={bannerRef}>
        <div
          className="blur-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backdropFilter: `blur(${blurAmount}px)`,
            WebkitBackdropFilter: `blur(${blurAmount}px)`,
            pointerEvents: "none",
            transition: "backdrop-filter 0.2s ease-out",
            borderRadius: "2em",
            zIndex: 100,
          }}
        />
        <div className="homeBannerText">
          <motion.div className="mainHeading">
            <motion.h1
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 2 }}
              className="krag"
            >
              KRAG
            </motion.h1>

            <motion.h1
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 2 }}
              className="sentrale"
            >
              SENTRALE
            </motion.h1>
          </motion.div>

          <div className="aboutUs">
            <AboutUs />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
