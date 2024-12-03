import { BlogPost } from "../pages/Home";
import BlogCard from "./BlogCard";

export default function TrendingSection({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="px-16 py-28">
      <h2 className="text-5xl mb-6">ტრენდული</h2>
      <div className="flex justify-between mb-20">
        <span>ტრენდული ამბები მასპინძლობის ინდუსტრიის გარშემო</span>
        <button>ყველას ნახვა</button>
      </div>
      <div className="grid grid-cols-3 gap-x-8 gap-y-20">
        {posts.slice(43, 46).map((post) => (
          <BlogCard key={post.publishedAt} dir="vertical" post={post} />
        ))}
      </div>
    </div>
  );
}
