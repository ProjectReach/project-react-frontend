import stories from "@/data/stories.json";

export default function Stories() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-emerald-800 mb-8">Impact Stories</h1>
        
        {/* Search */}
        <div className="mb-8">
          <input 
            type="text" 
            placeholder="Search by community..." 
            className="w-full max-w-md border rounded-lg px-4 py-2"
          />
        </div>

        {/* Featured Video */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-800">Featured Story</h2>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Featured testimonial video would go here</p>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-lg p-6 card-shadow">
              {story.photoUrl && (
                <img src={story.photoUrl} alt="Story" className="w-full h-48 object-cover rounded-lg mb-4" />
              )}
              <p className="text-gray-700 italic">"{story.testimonial}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}