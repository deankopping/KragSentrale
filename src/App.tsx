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

function App() {
  const { ref: homeBannerRef, inView: homeBannerView } = useInView({
    threshold: 0.5,
  });

  // const { ref: pageBreakRef, inView: pageBreakView } = useInView({
  //   threshold: 1,
  // });
  // const { ref: mapRef, inView: mapView } = useInView({
  //   threshold: 0.5,
  // });

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

      <motion.div
        // ref={pageBreakRef}
        initial={{ opacity: 1 }}
        animate={
          {
            // filter: pageBreakView ? "none" : "blur(2em)",
          }
        }
        transition={{ duration: 0.5 }}
      >
        <PageBreak />
      </motion.div>

      <AnimatePresence>
        <motion.div
          //ref={priceListRef}
          initial={{ opacity: 1, scale: 1 }}
          animate={
            {
              // filter: priceListView ? "none" : "blur(2em)",
            }
          }
          transition={{ duration: 1 }}
        >
          <PriceList />
        </motion.div>
      </AnimatePresence>

      <motion.div
        // ref={mapRef}
        initial={{ opacity: 1 }}
        animate={
          {
            // filter: mapView ? "none" : "blur(2em)",
          }
        }
        transition={{ duration: 0.5 }}
      >
        <MapComponent />
      </motion.div>

      {/* <Logo /> */}
      <CursorBlob />
      <Footer />
    </>
  );
}

export default App;
