"use client";

import dynamic from "next/dynamic";

const AdminMap = dynamic(() => import("./AdminMap"), {
  ssr: false,
  loading: () => <div className="w-full h-[500px] bg-gray-200 rounded flex items-center justify-center">Loading admin map...</div>
});

export default AdminMap;