import BlogCard from "../components/BlogCard";

export default function Popular() {
  return (
    <div className="px-16 py-28">
      <h2 className="text-5xl mb-6">პოპულარული</h2>
      <div className="flex justify-between mb-20">
        <span>ყველაზე პოპულარული ამბები მასპინძლობის ინდუსტრიის შესახებ</span>
        <button>ყველას ნახვა</button>
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
