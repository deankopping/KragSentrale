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

function App() {
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

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <PriceList />
        </motion.div>
      </AnimatePresence>
      <Facilities artworks={["srdfgs", "dfgt"]} />

      <motion.div initial={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <MapComponent />
      </motion.div>

      <CursorBlob />
      <Footer />
    </>
  );
}

export default App;
