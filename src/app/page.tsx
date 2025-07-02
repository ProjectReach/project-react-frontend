import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Cultivating Change</h1>
      <p className="max-w-xl mb-6">
        Fighting food insecurity and chronic disease with Fresh Harvest 365’s
        container farming solutions.
      </p>
      <div className="flex gap-4">
        <Link
          href="/dashboard"
          className="bg-green-600 text-white px-6 py-3 rounded"
        >
          Explore Our Impact
        </Link>
        <Link
          href="/stories"
          className="bg-gray-200 px-6 py-3 rounded"
        >
          Read Stories
        </Link>
      </div>
    </main>
  );
}
