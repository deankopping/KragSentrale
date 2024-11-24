import React from "react";
import { Map } from "@vis.gl/react-google-maps";
import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import { APIProvider } from "@vis.gl/react-google-maps";

import "./index.css";

const MapComponent = () => {
  const location = { lat: -33.93789037379257, lng: 18.464487040139478 };

  return (
    <div className="mapLayoutContainer">
      <div className="mapContainer">
        <h2>WHERE TO FIND US</h2>
        <APIProvider apiKey="AIzaSyB-qPipYA1rJWVMBNmzX91kDp-pYMb0MGU">
          <Map
            style={{
              width: "100%",
              height: "400px",
              borderRadius: "25px",
              overflow: "hidden",

              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)",
            }}
            mapId={"krag"}
            defaultZoom={15}
            defaultCenter={location}
          >
            <AdvancedMarker position={location}>
              <Pin
                glyphColor="#fff" // White glyph (text or icon) color
                borderColor="#e1381b"
              />
            </AdvancedMarker>
          </Map>
        </APIProvider>
      </div>
    </div>
  );
};

export default MapComponent;
