import { Link } from "react-router-dom";
import { dateFormat } from "../utils/dateFormat";
import { ArticleType } from "../utils/types";

export default function Newest({ newest }: { newest: ArticleType }) {
  const formatedDate = dateFormat(newest.createdAt);

  return (
    <div className="self-start p-8 lg:px-16 lg:py-16 pt-12">
      <h2 className="mb-6 text-2xl md:text-4xl">უახლესი სტატია</h2>

      <Link to={`${"/articles/" + newest._id}`}>
        <div className="flex flex-col items-start bg-white dark:bg-slate-600 shadow-lg hover:shadow-xl rounded-lg max-w-3xl h-full overflow-hidden transition-shadow">
          {newest.imageUrl !== null ? (
            <img
              className="w-full object-cover"
              src={newest.imageUrl + ".jpeg"}
              alt={newest.title}
            />
          ) : (
            <img
              className="w-full object-cover"
              src="/no-image-available-icon-vector.jpg"
              alt="No Image"
            />
          )}

          <div className="flex flex-col gap-4 p-6 pt-2">
            <h2 className="text-3xl">{newest.title}</h2>
            <p>{newest.description}</p>
            <p>{formatedDate}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
