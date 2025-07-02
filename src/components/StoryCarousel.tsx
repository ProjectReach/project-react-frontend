interface Story {
  id: string;
  testimonial: string;
  photoUrl?: string;
}

interface StoryCarouselProps {
  stories: Story[];
}

export const StoryCarousel: React.FC<StoryCarouselProps> = ({ stories }) => (
  <div className="overflow-x-auto flex gap-4 py-4">
    {stories.map((story) => (
      <div key={story.id} className="min-w-[200px] bg-white shadow rounded p-4">
        {story.photoUrl && (
          <img src={story.photoUrl} alt="story" className="w-full h-32 object-cover rounded" />
        )}
        <p className="text-sm mt-2">{story.testimonial}</p>
      </div>
    ))}
  </div>
);
