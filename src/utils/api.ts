export async function getImpactMetrics() {
  return {
    poundsGrown: 24000,
    peopleServed: 1500,
    farmsDeployed: 15,
  };
}

export async function getFarms() {
  const res = await fetch("http://localhost:8000/farms");
  if (!res.ok) throw new Error("Failed to fetch farms");
  return res.json();
}

export async function predictNextFarm(features: {
  food_insecurity: number;
  diabetes_rate: number;
  population: number;
  existing_farm: number;
}) {
  const res = await fetch("http://localhost:8000/predict-next-farm", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(features),
  });
  if (!res.ok) throw new Error("Prediction failed");
  return res.json();
}

