import { BlogPost } from "../pages/Home";
import BlogCard from "./BlogCard";

export default function PopularSection({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="px-16 py-28">
      <h2 className="text-5xl mb-6">Popular</h2>
      <div className="flex justify-between mb-20">
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
        <button>View all</button>
      </div>
      <div className="grid grid-cols-3 gap-x-8 gap-y-20">
        {posts ? (
          posts
            .slice(0, 6)
            .map((post) => (
              <BlogCard key={post.publishedAt} dir="vertical" post={post} />
            ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
