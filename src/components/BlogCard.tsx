import { Link } from "react-router-dom";
import { BlogPost } from "../pages/Home";

export default function BlogCard({
  dir,
  post,
}: {
  dir: string;
  post: BlogPost;
}) {
  return (
    <div
      className={
        dir === "cover"
          ? "flex flex-col gap-6"
          : dir === "vertical"
          ? "flex flex-col gap-6"
          : "flex flex-col lg:flex-row items-start gap-6"
      }
    >
      <img
        className={
          dir === "cover"
            ? "w-full h-96 object-cover rounded-md"
            : dir === "vertical"
            ? "w-96 h-48 object-cover rounded-md"
            : "w-64 h-64 object-cover rounded-md"
        }
        src={post ? post.urlToImage : "Loading..."}
        alt="postImage"
      />
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <span className="text-sm">category</span>
          <span className="text-sm">X Min Read</span>
        </div>
        <h2 className={dir === "cover" ? "text-4xl" : "text-2xl"}>
          {post ? post.title : "Loading..."}
        </h2>
        <p>{post ? post.description : "Loading..."}</p>
        <Link to={post ? post.publishedAt : "Loading"}>
          <div>Read more</div>
        </Link>
      </div>
    </div>
  );
}
