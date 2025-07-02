import { DashboardCard } from "@/components/DashboardCard";
import { StoryCarousel } from "@/components/StoryCarousel";
import stories from "@/data/stories.json";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-emerald-800 mb-8">Impact Dashboard</h1>
        
        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <DashboardCard title="Pounds Produced" value="24,000" />
          <DashboardCard title="People Served" value="1,500" />
          <DashboardCard title="Container Farms" value="15" />
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg p-4 mb-8 flex gap-4">
          <select className="border rounded px-3 py-2">
            <option>All Regions</option>
            <option>Northeast</option>
            <option>Southeast</option>
            <option>Midwest</option>
          </select>
          <input type="date" className="border rounded px-3 py-2" />
          <input type="date" className="border rounded px-3 py-2" />
        </div>

        {/* Health Trends Graph */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-800">Health Impact Trends</h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <p className="text-gray-500">Health trends visualization would go here</p>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-800">Community Stories</h2>
          <StoryCarousel stories={stories} />
        </div>
      </div>
    </div>
  );
}