"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import HeatmapLayer from "./HeatmapLayer";
import farms from "@/data/farms.json";

// Fix default marker issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const heatmapData = [
  { lat: 41.8781, lng: -87.6298, intensity: 0.8 }, // Chicago - high
  { lat: 40.7128, lng: -74.006, intensity: 0.6 },  // NYC - medium
  { lat: 42.3314, lng: -83.0458, intensity: 0.9 }, // Detroit - very high
  { lat: 35.1495, lng: -90.0490, intensity: 0.7 }, // Memphis - high
];

export default function AdminMap() {
  const [showHeatmap, setShowHeatmap] = useState(false);

  return (
    <div>
      <div className="mb-4">
        <button 
          onClick={() => setShowHeatmap(!showHeatmap)}
          className={`px-4 py-2 rounded-lg ${showHeatmap ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
        >
          {showHeatmap ? 'Hide' : 'Show'} Food Insecurity Heatmap
        </button>
      </div>
      
      <MapContainer
        center={[39.8283, -98.5795]} // Center of USA
        zoom={4}
        className="w-full h-[500px] rounded shadow"
      >
        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <HeatmapLayer data={heatmapData} show={showHeatmap} />
        
        {farms.map((farm) => (
          <Marker key={farm.id} position={[farm.lat, farm.lng]}>
            <Popup>
              <h2 className="font-bold">{farm.name}</h2>
              <p>{farm.description}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}