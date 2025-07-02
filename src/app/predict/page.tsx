import { useState } from "react";
import { predictNextFarm } from "@/utils/api";

export default function PredictPage() {
  const [result, setResult] = useState<any>(null);

  async function handlePredict() {
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
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Predict Next Farm Location</h1>
      <button
        onClick={handlePredict}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Predict
      </button>
      {result && (
        <div className="mt-4 border p-4 rounded bg-gray-100">
          <p>
            <strong>Recommended:</strong>{" "}
            {result.should_deploy ? "Yes" : "No"}
          </p>
          {result.city && (
            <p>Suggested Location: {result.city}</p>
          )}
        </div>
      )}
    </div>
  );
}
