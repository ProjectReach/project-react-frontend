"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => <div className="w-full h-[500px] bg-gray-200 rounded flex items-center justify-center">Loading map...</div>
});

export default Map;