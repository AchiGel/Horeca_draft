import { ArticleType } from "../pages/Home";
import BlogCard from "./BlogCard";

export default function NewPosts({ posts }: { posts: ArticleType[] }) {
  return (
    <div>
      {posts.length === 0 ? (
        "სტატიები ვერ მოიძებნა!"
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-8 pt-24 lg:px-16 lg:py-28 ">
          {posts.map((a) => (
            <BlogCard key={a.id} article={a} />
          ))}
        </div>
      )}
    </div>
  );
}
