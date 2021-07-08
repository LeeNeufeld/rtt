import React from "react";

import { StaticGoogleMap, Marker } from "react-static-google-map";

function Map() {
  return (
    <StaticGoogleMap
      center="51.00938328783789, -114.12850715912262"
      size="450x450"
      className="img-fluid"
      apiKey="AIzaSyAGKB6bMblKEPFx0N0X9F_-IUDt4_9ENEE"
      zoom="17"
      maptype="hybrid"
    >
      <Marker
        location="51.00938328783789, -114.12850715912262"
        size="normal"
        label="R"
      />
    </StaticGoogleMap>
  );
}

export default Map;
