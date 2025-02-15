import "./App.css";
import Header from "./Header";
import HomeBanner from "./HomeBanner";
import MapComponent from "./Map";
import PriceList from "./PriceList";
import Footer from "./Footer";
import CursorBlob from "./CursorBlob";
import PageBreak from "./PageBreak";
import { motion } from "framer-motion";
import Facilities from "./Facilities";
import AboutUs from "./AboutUs";
import PageWrapper from "./PageWrapper";

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
      </PageWrapper>
    </>
  );
}

export default HomePage;
