import { BlogPost } from "../pages/Home";
import BlogCard from "./BlogCard";
import Title from "./Title";

export default function NewPosts({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="px-16 py-28 flex flex-col gap-20">
      <Title />
      <div>
        <h2 className="text-2xl mb-10">Featured blog posts</h2>
        <div className="grid grid-cols-2 gap-4">
          <BlogCard dir="cover" post={posts[50]} />
          <div className="flex flex-col gap-4">
            {posts.slice(20, 23).map((post) => (
              <BlogCard key={post.publishedAt} dir="horisontal" post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
