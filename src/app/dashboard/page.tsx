import Map from "@/components/Map";
import { DashboardCard } from "@/components/DashboardCard";

export default function Dashboard() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Impact Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DashboardCard title="Pounds Grown" value="24,000" />
        <DashboardCard title="People Served" value="1,500" />
        <DashboardCard title="Farms Deployed" value="15" />
      </div>
      <Map />
    </div>
  );
}
