import { useState } from "react";
import "./App.css";
import Header from "./Header";
import HomeBanner from "./HomeBanner";
import { Logo } from "./Logo";
import MapComponent from "./Map";
import OpeningDoor from "./OpeningDoor";
import PriceList from "./PriceList";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import PopUpMenu from "./PopupMenu";
import Footer from "./Footer";
import CursorBlob from "./CursorBlob";
import PageBreak from "./PageBreak";

function App() {
  return (
    <>
      <Header />
      <HomeBanner />
      <PageBreak />

      {/* <OpeningDoor /> */}
      <PriceList />
      {/* <MapComponent /> */}
      <Logo />
      <CursorBlob />
      <Footer />
    </>
  );
}

export default App;
