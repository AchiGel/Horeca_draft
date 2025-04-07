import { Link } from "react-router-dom";
import { ArticleType } from "../pages/Home";

export default function Newest({
  newest,
}: {
  newest: ArticleType | undefined;
}) {
  const dateStr = newest?.publishedAt;
  const date = new Date(dateStr!);

  const formattedDate = `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")} - ${date.getDate().toString().padStart(2, "0")}.${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}.${date.getFullYear()}`;
  return (
    <div className="p-8 pt-12 lg:px-16 lg:py-16 self-start">
      <h2 className="text-2xl md:text-4xl mb-6">უახლესი სტატია</h2>
      {newest ? (
        <Link to={`${"/articles/" + newest.documentId}`}>
          <div className="flex flex-col h-full items-start bg-white dark:bg-slate-600 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow max-w-3xl">
            <img
              className="w-full object-cover"
              src={`${
                "https://strapi-horeca.onrender.com" + newest.images[0].url
              }`}
              alt={`${
                "https://strapi-horeca.onrender.com" +
                newest.images[0].documentId
              }`}
            />
            <div className="flex flex-col gap-4 p-6 pt-2">
              <h2 className="text-3xl">{newest.title}</h2>
              <p>{newest.description}</p>
              <p>{formattedDate}</p>
            </div>
          </div>
        </Link>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
