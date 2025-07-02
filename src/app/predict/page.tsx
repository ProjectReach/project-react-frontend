"use client";

import { useState } from "react";
import { predictNextFarm } from "@/utils/api";

export default function PredictPage() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function handlePredict() {
    setLoading(true);
    try {
      const features = {
        food_insecurity: 0.6,
        diabetes_rate: 0.1,
        population: 15000,
        existing_farm: 0,
      };
      const prediction = await predictNextFarm(features);
      setResult(prediction);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-amber-50">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-emerald-800 mb-2">Predict Next Farm Location</h1>
          <p className="text-amber-700 text-lg">Use AI to identify optimal locations for new container farms</p>
        </div>
        
        <div className="bg-white rounded-xl card-shadow p-8">
          <div className="text-center mb-6">
            <p className="text-amber-700 mb-6">
              Our prediction model analyzes food insecurity rates, diabetes prevalence, population density, 
              and existing farm coverage to recommend optimal locations for new container farms.
            </p>
            
            <button
              onClick={handlePredict}
              disabled={loading}
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors disabled:opacity-50"
            >
              {loading ? "Analyzing..." : "Run Prediction"}
            </button>
          </div>
          
          {result && (
            <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-emerald-800 mb-4">Prediction Results</h3>
              <div className="space-y-2">
                <p className="text-emerald-700">
                  <strong>Recommendation:</strong>{" "}
                  <span className={result.should_deploy ? "text-emerald-600" : "text-amber-600"}>
                    {result.should_deploy ? "Deploy Farm" : "Further Analysis Needed"}
                  </span>
                </p>
                {result.city && (
                  <p className="text-emerald-700">
                    <strong>Suggested Location:</strong> {result.city}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
        
        <div className="bg-amber-100 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-amber-900 mb-3">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-4 text-amber-800">
            <div>
              <h3 className="font-medium mb-2">Data Analysis</h3>
              <p className="text-sm">We analyze demographic and health data to identify communities with the greatest need.</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Impact Prediction</h3>
              <p className="text-sm">Our model predicts the potential health and economic impact of new farm deployments.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}