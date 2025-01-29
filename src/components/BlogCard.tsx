import { Link } from "react-router-dom";
import { Article } from "../pages/Home";

export default function BlogCard({ post }: { post?: Article }) {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-6 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <img
        className="w-full lg:w-64 h-64 object-cover rounded-md mb-4 lg:mb-0"
        src={post ? post.images[0] : "Loading..."}
        alt="postImage"
      />
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <div>
            <ul className="flex gap-2">
              {post?.categories?.map((c, index) => (
                <li key={index} className="bg-gray-200 px-2 py-1 rounded-full">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <span className="text-gray-500">
            {post?.minutesRead} წუთში საკითხავი
          </span>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">
          {post ? post.title : "Loading..."}
        </h2>
        <p className="text-gray-600">
          {post ? post.description : "Loading..."}
        </p>
        <Link
          to={post ? post.id : "#"}
          className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
        >
          <div className="mt-4 inline-block">წაიკითხე სრულად</div>
        </Link>
      </div>
    </div>
  );
}
