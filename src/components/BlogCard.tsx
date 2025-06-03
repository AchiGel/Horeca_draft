import { Link } from "react-router-dom";
import { ArticleType } from "../pages/Home";

export default function BlogCard({ article }: { article: ArticleType }) {
  const dateStr = article.publishedAt;
  const date = new Date(
    dateStr[0],
    dateStr[1],
    dateStr[2],
    dateStr[3],
    dateStr[4]
  );

  const formattedDate = `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")} - ${date.getDate().toString().padStart(2, "0")}.${date
    .getMonth()
    .toString()
    .padStart(2, "0")}.${date.getFullYear()}`;

  return (
    <Link to={"/articles/" + article.documentId}>
      <div className="flex flex-col items-start gap-3 bg-white dark:bg-slate-600 shadow-lg hover:shadow-xl rounded-lg h-full overflow-hidden transition-shadow">
        {article.imageUrl !== null ? (
          <img
            className="w-full h-60 object-cover"
            src={article.imageUrl}
            alt={article.title}
          />
        ) : (
          <img
            className="w-full object-cover"
            src="/no-image-available-icon-vector.jpg"
            alt="No Image"
          />
        )}
        <div className="flex flex-col gap-4 p-6 pt-2">
          <h1 className="text-2xl">
            {article.title.length > 50
              ? article.title.split("").splice(0, 40).join("") + "..."
              : article.title}
          </h1>
          <p>{formattedDate}</p>
        </div>
      </div>
    </Link>
  );
}
