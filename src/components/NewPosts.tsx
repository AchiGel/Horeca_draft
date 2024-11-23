import BlogCard from "./BlogCard";
import Title from "./Title";

export default function NewPosts() {
  return (
    <div className="px-16 py-28 flex flex-col gap-20">
      <Title />
      <div>
        <h2 className="text-2xl mb-10">Featured blog posts</h2>
        <div className="grid grid-cols-2 gap-4">
          <BlogCard dir="vertical" />
          <div className="flex flex-col gap-4">
            <BlogCard dir="horisontal" />
            <BlogCard dir="horisontal" />
            <BlogCard dir="horisontal" />
          </div>
        </div>
      </div>
    </div>
  );
}
