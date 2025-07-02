"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

interface HeatmapData {
  lat: number;
  lng: number;
  intensity: number;
}

interface HeatmapLayerProps {
  data: HeatmapData[];
  show: boolean;
}

export default function HeatmapLayer({ data, show }: HeatmapLayerProps) {
  const map = useMap();

  useEffect(() => {
    if (!show) return;

    // Create circles for heatmap visualization
    const heatmapLayer = L.layerGroup();
    
    data.forEach(point => {
      const circle = L.circle([point.lat, point.lng], {
        radius: point.intensity * 50000, // Scale radius based on intensity
        fillColor: point.intensity > 0.7 ? '#dc2626' : point.intensity > 0.4 ? '#f59e0b' : '#10b981',
        fillOpacity: 0.3,
        stroke: false
      });
      heatmapLayer.addLayer(circle);
    });

    heatmapLayer.addTo(map);

    return () => {
      map.removeLayer(heatmapLayer);
    };
  }, [map, data, show]);

  return null;
}