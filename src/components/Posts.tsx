import { ArticleType } from "../pages/Home";
import BlogCard from "./BlogCard";

export default function Posts({ posts }: { posts: ArticleType[] }) {
  return (
    <div>
      {posts.length === 0 ? (
        "სტატიები ვერ მოიძებნა!"
      ) : (
        <div className="flex flex-col p-8 pt-12 lg:px-16 lg:py-16">
          <h3 className="text-2xl md:text-4xl mb-6">ყველა სტატია</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {posts.map((a) => (
              <BlogCard key={a.id} article={a} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
