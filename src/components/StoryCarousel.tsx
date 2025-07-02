interface Story {
  id: string;
  testimonial: string;
  photoUrl?: string;
}

interface StoryCarouselProps {
  stories: Story[];
}

export const StoryCarousel: React.FC<StoryCarouselProps> = ({ stories }) => (
  <div className="overflow-x-auto">
    <div className="flex gap-6 py-4 min-w-max">
      {stories.map((story) => (
        <div key={story.id} className="min-w-[320px] bg-amber-50 border border-emerald-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
          {story.photoUrl && (
            <img 
              src={story.photoUrl} 
              alt="Community story" 
              className="w-full h-40 object-cover rounded-lg mb-4" 
            />
          )}
          <div className="flex items-start space-x-2 mb-3">
            <span className="text-emerald-600 text-2xl">"</span>
            <p className="text-amber-800 leading-relaxed italic">{story.testimonial}</p>
            <span className="text-emerald-600 text-2xl">"</span>
          </div>
          <div className="w-8 h-1 bg-emerald-300 rounded"></div>
        </div>
      ))}
    </div>
  </div>
);