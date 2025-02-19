import { Map } from "@vis.gl/react-google-maps";
import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import { APIProvider } from "@vis.gl/react-google-maps";
import "./styles/Map.css";

import "./index.css";
import { motion } from "motion/react";

const MapComponent = () => {
  const location = { lat: -33.93789037379257, lng: 18.464487040139478 };

  return (
    <div>
      <div
        className="sectionContainer"
        style={{
          backgroundImage: "url(../../public/_DSC7948.jpg)",
          maxHeight: "85vh",
        }}
      >
        <h2>WHERE TO FIND US</h2>
        <div className="adressDetails">
          <div className="mapContainer">
            <APIProvider apiKey="AIzaSyB-qPipYA1rJWVMBNmzX91kDp-pYMb0MGU">
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
                  <Pin glyphColor="#fff" borderColor="#e1381b" />
                </AdvancedMarker>
              </Map>
            </APIProvider>
          </div>

          <motion.h1
            className="adress"
            // initial={{ x: "10%", opacity: 0 }}
            // animate={{ x: "100%", opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            48 Milton Road Observatory
          </motion.h1>
          {/* <h3>
              Parking is available across Main Road at the Cape Town Science
              centre
            </h3> */}
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
