export default function BlogCard({ dir }: { dir: string }) {
  return (
    <div
      className={
        dir === "cover"
          ? "flex flex-col gap-6"
          : dir === "vertical"
          ? "flex flex-col gap-6"
          : "flex items-center gap-6"
      }
    >
      <img
        className={
          dir === "cover"
            ? "w-full h-96 object-cover rounded-md"
            : dir === "vertical"
            ? "w-96 rounded-md"
            : "w-64 h-64 object-cover rounded-md"
        }
        src="/subscribe-bg.jpg"
        alt="postImage"
      />
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <span className="text-sm">category</span>
          <span className="text-sm">X Min Read</span>
        </div>
        <h2 className={dir === "cover" ? "text-4xl" : "text-2xl"}>
          Blog Title
        </h2>
        <p>Blog Text Short</p>
        <div>Read more</div>
      </div>
    </div>
  );
}
