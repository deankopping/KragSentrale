import "./App.css";
import Header from "./Header";
import HomeBanner from "./HomeBanner";
import { Logo } from "./Logo";
import MapComponent from "./Map";
import OpeningDoor from "./OpeningDoor";
import PriceList from "./PriceList";

import { APIProvider, Map } from "@vis.gl/react-google-maps";

function App() {
  return (
    <>
      <Header />
      <HomeBanner />
      <MapComponent />
      {/* <OpeningDoor /> */}
      <PriceList />
      <Logo logoStyle="initialLoadLogo" />
    </>
  );
}

export default App;
