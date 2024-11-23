export default function BlogCard({ dir }: { dir: string }) {
  return (
    <div
      className={
        dir === "vertical" ? "flex flex-col gap-4" : "flex items-center"
      }
    >
      <img
        className={dir === "vertical" ? "w-96" : "w-64"}
        src="/subscribe-bg.jpg"
        alt="postImage"
      />
      <div>
        <div>
          <span>category</span>
          <span>X Min Read</span>
        </div>
        <h2>Blog Title</h2>
        <p>Blog Text Short</p>
        <div>Read more</div>
      </div>
    </div>
  );
}
