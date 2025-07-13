import { ArticleType } from "../utils/types";
import BlogCard from "./BlogCard";

export default function Posts({ posts }: { posts: ArticleType[] }) {
  return (
    <div>
      {posts.length === 0 ? (
        "სტატიები ვერ მოიძებნა!"
      ) : (
        <div className="flex flex-col p-8 lg:px-16 lg:py-16 pt-12">
          <h3 className="mb-6 text-2xl md:text-4xl">ყველა სტატია</h3>
          <div className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((a) => (
              <BlogCard key={a._id} article={a} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
