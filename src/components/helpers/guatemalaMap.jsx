import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  Popup,
  Circle,
  CircleMarker,
  SVGOverlay,
} from "react-leaflet";
import guatemalaGeoJson from "../../data/guatemala.json";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import drop from "../../assets/drop.png";
const position = [16.6, -90.23];
const markers = [
  { name: "Puerto San Jose", position: [13.93, -90.834] },
  { name: "Ciudad GC", position: [14.634, -90.506] },
  { name: "El Rancho", position: [14.925, -90.015] },
  { name: "Rio Hondo", position: [15.042, -89.586] },
];
const bounds = [
  [15.6, -90.01],
  [15.4, -90.6],
];
const GuatemalaMap = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  return (
    <MapContainer
      className="w-full h-full bg-transparent"
      center={position}
      zoom={screenWidth < 768 ? 7 : 8}
      zoomControl={false}
      scrollWheelZoom={false}>
      {/* <TileLayer
        url="http://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}"
        minZoom={3}
        maxZoom={8}
        format="jpg"
        tilematrixset="GoogleMapsCompatible_Level"
        time={""}
        opacity={0.8}
      /> */}
      {/* <TileLayer
        attribution="&copy; cartocdn"
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        minZoom={7}
        maxZoom={10}
      /> */}
      <TileLayer
        attribution="&copy; jawg"
        url={`https://tile.jawg.io/94af11de-19be-4916-9ad9-1e1b250c3d41/{z}/{x}/{y}{r}.png?access-token=${
          import.meta.env.VITE_JAWG_TOKEN
        }`}
        minZoom={7}
        maxZoom={10}
        opacity={0.9}
      />
      {/* <Marker
        position={position}
        icon={L.icon({ iconUrl: drop, iconSize: 20 })}>
        <Popup>Guatemala</Popup>
      </Marker> */}
      {markers.map((item, idx) => (
        <Marker
          key={idx}
          position={item.position}
          icon={
            new L.DivIcon({
              className: "my-div-icon",
              html: `<div class="w-28 flex flex-col gap-2 justify-center items-center"><div class="w-4 h-4 bg-[#00ff00] rounded-full"></div>
                <span class="text-white font-bold">${item.name}</span></div>`,
            })
          }></Marker>
      ))}
      {/* <CircleMarker
        center={position}
        pathOptions={{ fillColor: "lime", color: "lime" }}
        radius={7}>
        <Popup>Popup in CircleMarker</Popup>
      </CircleMarker> */}

      <GeoJSON
        data={guatemalaGeoJson}
        style={{
          weight: 1,
          color: "lime",
          fillOpacity: 0,
        }}
        eventHandlers={{
          mouseover: (e) => {
            const layer = e.target;
            layer.setStyle({
              fillColor: "black",
              fillOpacity: 0.5,
            });
          },
          mouseout: (e) => {
            const layer = e.target;
            layer.setStyle({
              color: "lime",
              fillOpacity: 0,
            });
          },
        }}
      />
    </MapContainer>
  );
};

export default GuatemalaMap;
