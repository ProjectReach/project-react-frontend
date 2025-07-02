"use client";

import { useState } from "react";
import AdminMap from "@/components/AdminMapWrapper";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("farms");
  const [newFarm, setNewFarm] = useState({ name: "", lat: "", lng: "", description: "" });
  const [file, setFile] = useState<File | null>(null);

  const handleAddFarm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Farm added:", newFarm);
    setNewFarm({ name: "", lat: "", lng: "", description: "" });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-emerald-800 mb-8">Admin Dashboard</h1>
        
        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button 
            onClick={() => setActiveTab("farms")}
            className={`px-4 py-2 rounded-lg ${activeTab === "farms" ? "bg-emerald-600 text-white" : "bg-white text-emerald-600"}`}
          >
            Manage Farms
          </button>
          <button 
            onClick={() => setActiveTab("predictions")}
            className={`px-4 py-2 rounded-lg ${activeTab === "predictions" ? "bg-emerald-600 text-white" : "bg-white text-emerald-600"}`}
          >
            Predictions
          </button>
          <button 
            onClick={() => setActiveTab("data")}
            className={`px-4 py-2 rounded-lg ${activeTab === "data" ? "bg-emerald-600 text-white" : "bg-white text-emerald-600"}`}
          >
            Data Upload
          </button>
        </div>

        {/* Manage Farms Tab */}
        {activeTab === "farms" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-emerald-800">Add New Farm</h2>
              <form onSubmit={handleAddFarm} className="space-y-4">
                <input
                  type="text"
                  placeholder="Farm name"
                  value={newFarm.name}
                  onChange={(e) => setNewFarm({...newFarm, name: e.target.value})}
                  className="w-full border rounded-lg px-4 py-2"
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    step="any"
                    placeholder="Latitude"
                    value={newFarm.lat}
                    onChange={(e) => setNewFarm({...newFarm, lat: e.target.value})}
                    className="border rounded-lg px-4 py-2"
                    required
                  />
                  <input
                    type="number"
                    step="any"
                    placeholder="Longitude"
                    value={newFarm.lng}
                    onChange={(e) => setNewFarm({...newFarm, lng: e.target.value})}
                    className="border rounded-lg px-4 py-2"
                    required
                  />
                </div>
                <textarea
                  placeholder="Description"
                  value={newFarm.description}
                  onChange={(e) => setNewFarm({...newFarm, description: e.target.value})}
                  className="w-full border rounded-lg px-4 py-2 h-24"
                  required
                />
                <button type="submit" className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700">
                  Add Farm
                </button>
              </form>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-emerald-800">Current Farms</h2>
              <div className="h-64 overflow-y-auto space-y-2">
                <div className="border rounded p-3">
                  <h3 className="font-medium">Chicago Container Farm</h3>
                  <p className="text-sm text-gray-600">41.8781, -87.6298</p>
                  <button className="text-red-600 text-sm mt-1">Remove</button>
                </div>
                <div className="border rounded p-3">
                  <h3 className="font-medium">New York Urban Farm</h3>
                  <p className="text-sm text-gray-600">40.7128, -74.006</p>
                  <button className="text-red-600 text-sm mt-1">Remove</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Predictions Tab */}
        {activeTab === "predictions" && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-emerald-800">Food Insecurity Heatmap & Predictions</h2>
              <div className="mb-4">
                <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 mr-4">
                  Generate Predictions
                </button>
                <button className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700">
                  Toggle Heatmap
                </button>
              </div>
              <AdminMap />
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-emerald-800">Recommended Locations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4 bg-green-50">
                  <h3 className="font-semibold text-emerald-800">Detroit, MI</h3>
                  <p className="text-sm text-gray-600 mb-2">Food Insecurity: 28%</p>
                  <p className="text-sm text-gray-600 mb-2">Population: 670,000</p>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">High Priority</span>
                </div>
                <div className="border rounded-lg p-4 bg-yellow-50">
                  <h3 className="font-semibold text-emerald-800">Memphis, TN</h3>
                  <p className="text-sm text-gray-600 mb-2">Food Insecurity: 22%</p>
                  <p className="text-sm text-gray-600 mb-2">Population: 650,000</p>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Medium Priority</span>
                </div>
                <div className="border rounded-lg p-4 bg-blue-50">
                  <h3 className="font-semibold text-emerald-800">Phoenix, AZ</h3>
                  <p className="text-sm text-gray-600 mb-2">Food Insecurity: 18%</p>
                  <p className="text-sm text-gray-600 mb-2">Population: 1,600,000</p>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Consider</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Data Upload Tab */}
        {activeTab === "data" && (
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-800">Upload Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <input type="file" accept=".csv" onChange={handleFileUpload} className="mb-4" />
                <p className="text-gray-500">Upload CSV files for community data</p>
                {file && <p className="text-emerald-600 mt-2">Selected: {file.name}</p>}
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg mt-4">
                  Process Upload
                </button>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Data Format Requirements</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Community name</li>
                  <li>• Latitude, Longitude</li>
                  <li>• Food insecurity rate (%)</li>
                  <li>• Population count</li>
                  <li>• Diabetes rate (%)</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}