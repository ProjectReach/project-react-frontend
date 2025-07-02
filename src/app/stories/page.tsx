import { StoryCarousel } from "@/components/StoryCarousel";
import stories from "@/data/stories.json";

export default function Stories() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Community Stories</h1>
      <StoryCarousel stories={stories} />
    </div>
  );
}
