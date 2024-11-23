import BlogCard from "./BlogCard";

export default function PopularSection() {
  return (
    <div className="px-16 py-28">
      <h2 className="text-5xl mb-6">Popular</h2>
      <div className="flex justify-between mb-20">
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
        <button>View all</button>
      </div>
      <div className="grid grid-cols-3 gap-x-8 gap-y-20">
        <BlogCard dir="vertical" />
        <BlogCard dir="vertical" />
        <BlogCard dir="vertical" />
        <BlogCard dir="vertical" />
        <BlogCard dir="vertical" />
        <BlogCard dir="vertical" />
      </div>
    </div>
  );
}
