import Link from "next/link";
import Map from "@/components/MapWrapper";

export default function Home() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="hero-gradient text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold mb-6">Cultivating Change</h1>
          <p className="text-xl mb-8 opacity-90">
            Fresh Harvest 365 fights food insecurity and chronic disease through innovative container farming solutions that bring fresh produce directly to underserved communities.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/dashboard" className="bg-white text-emerald-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100">
              Explore Impact
            </Link>
            <Link href="/stories" className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-800">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-emerald-800">Community Impact Map</h2>
          <p className="text-center text-gray-600 mb-8">Explore communities by food insecurity levels and container farm locations</p>
          <div className="bg-gray-50 rounded-xl p-6">
            <Map />
          </div>
        </div>
      </section>
    </main>
  );
}