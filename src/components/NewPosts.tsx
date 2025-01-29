import { Article } from "../pages/Home";
import BlogCard from "./BlogCard";
import Title from "./Title";

export default function NewPosts({ posts }: { posts: Article[] }) {
  return (
    <div className="flex flex-col gap-20 px-8 py-12 lg:px-16 lg:py-28 ">
      <Title />
      <div>
        <h2 className="text-2xl mb-10">უახლესი სტატიები</h2>
        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
