import { Map } from "@vis.gl/react-google-maps";
import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import { APIProvider } from "@vis.gl/react-google-maps";
import "./styles/Map.css";

import "./index.css";

import { Typewriter } from "./components/typewriter";

const MapComponent = () => {
  const location = { lat: -33.93789037379257, lng: 18.464487040139478 };

  return (
    <div className="sectionContainer mapSectionBackground">
      {" "}
      <h2 className="titleMobile">WHERE TO FIND US</h2>
      <div className="adressDetails">
        {" "}
        <div className="addressText">
          <h2 className="titleDesktop">
            WHERE TO FIND
            <br />
            US
          </h2>
          <Typewriter
            text={["48 Milton Rd, Observatory, Cape Town, 7925"]}
            staggerValue={0.05}
            className="adress"
            textAlignment="center"
          ></Typewriter>
        </div>
        <div className="mapContainer">
          <APIProvider apiKey="AIzaSyBVeybQfT_x-JqIDYG5rdTHYX7SSNrWD-M">
            <Map
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50px",
                overflow: "hidden",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)",
              }}
              mapId={"krag"}
              defaultZoom={15}
              defaultCenter={location}
            >
              <AdvancedMarker position={location}>
                <Pin glyphColor="black" borderColor="#e1381b" />
              </AdvancedMarker>
            </Map>
          </APIProvider>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
