import "./index.css";
import "./styles/HomeBanner.css";
import AboutUs from "./AboutUs";
import { useEffect, useRef, useState } from "react";

const HomeBanner = () => {
  const bannerRef = useRef(null);
  const [blurAmount, setBlurAmount] = useState(0);

  useEffect(() => {
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
            zIndex: 100,
          }}
        />
        <div className="homeBannerText">
          <div className="mainHeading">
            <h1 className="krag">KRAG</h1>
            <h1 className="sentrale">SENTRALE</h1>
          </div>

          <div className="aboutUs">
            <AboutUs />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
