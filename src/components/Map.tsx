import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import farms from "@/data/farms.json" assert { type: "json" };


// fix default marker issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

type Farm = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  description: string;
};

// const farms: Farm[] = [
//   {
//     id: "1",
//     name: "Chicago Container Farm",
//     lat: 41.8781,
//     lng: -87.6298,
//     description: "Serving Chicago communities with fresh greens",
//   },
//   {
//     id: "2",
//     name: "New York Urban Farm",
//     lat: 40.7128,
//     lng: -74.006,
//     description: "Improving food security in NYC",
//   },
//   {
//     id: "3",
//     name: "Kigali Container Farm",
//     lat: -1.9441,
//     lng: 30.0619,
//     description: "Providing fresh food in Kigali",
//   },
//   {
//     id: "4",
//     name: "Musanze Local Farm",
//     lat: -1.5,
//     lng: 29.6,
//     description: "Boosting nutrition in Musanze District",
//   },
// ];

export default function Map() {
  return (
    <MapContainer
      center={[15, -30]} // roughly in between USA & Rwanda
      zoom={2}
      className="w-full h-[500px] rounded shadow"
    >
      <TileLayer
        attribution="© OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {farms.map((farm) => (
        <Marker key={farm.id} position={[farm.lat, farm.lng]}>
          <Popup>
            <h2 className="font-bold">{farm.name}</h2>
            <p>{farm.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
