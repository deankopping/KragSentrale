import "./App.css";
import Header from "./Header";
import HomeBanner from "./HomeBanner";
import { Logo } from "./Logo";
import MapComponent from "./Map";
import PriceList from "./PriceList";
import Footer from "./Footer";
import CursorBlob from "./CursorBlob";
import PageBreak from "./PageBreak";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { AnimatePresence } from "motion/react";
import Facilities from "./Facilities";
import AboutUs from "./AboutUs";
import MasonryGrid from "./MasonaryGrid";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function HomePage() {
  const { ref: homeBannerRef, inView: homeBannerView } = useInView({
    threshold: 0.5,
  });

  return (
    <>
      <Header />

      <motion.div
        ref={homeBannerRef}
        initial={{ opacity: 1 }}
        animate={{
          filter: homeBannerView ? "none" : "blur(1em)",
        }}
        transition={{ duration: 0.5 }}
      >
        <HomeBanner />
      </motion.div>

      <motion.div initial={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <PageBreak />
      </motion.div>
      <div id="prices">
        <PriceList />
      </div>

      <div id="facilities">
        <Facilities />
      </div>

      <div id="location">
        <MapComponent />
      </div>

      <div id="events">{/* Your events component here */}</div>

      <div id="about">
        <AboutUs />
      </div>

      <CursorBlob />
      <Footer />
    </>
  );
}

export default HomePage;
