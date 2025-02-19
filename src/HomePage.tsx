import "./App.css";
import Header from "./Header";
import HomeBanner from "./HomeBanner";
import MapComponent from "./Map";
import PriceList from "./PriceList";
import Footer from "./components/Footer";
import CursorBlob from "./CursorBlob";
import PageBreak from "./PageBreak";
import { motion } from "framer-motion";
import AnimatedImageSlider from "./components/ImageCarousel/AnimatedImageSlider";
import AboutUs from "./components/AboutUs";
import PageWrapper from "./PageWrapper";
import Faq from "./components/Faq";

function HomePage() {
  return (
    <>
      <Header />
      <PageWrapper>
        <motion.div initial={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <HomeBanner />
        </motion.div>

        <motion.div initial={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <PageBreak />
        </motion.div>
        <div id="prices">
          <PriceList />
        </div>

        <div id="AnimatedImageSlider">
          <AnimatedImageSlider />
        </div>

        <div id="location">
          <MapComponent />
        </div>

        <div id="events">{/* Your events component here */}</div>

        <div id="about">
          <AboutUs />
        </div>
        <Faq></Faq>
        <CursorBlob />
      </PageWrapper>{" "}
      <Footer />
    </>
  );
}

export default HomePage;
