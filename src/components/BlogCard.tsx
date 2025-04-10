import { Link } from "react-router-dom";
import { ArticleType } from "../pages/Home";

export default function BlogCard({ article }: { article: ArticleType }) {
  const dateStr = article.publishedAt;
  const date = new Date(dateStr);

  const formattedDate = `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")} - ${date.getDate().toString().padStart(2, "0")}.${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}.${date.getFullYear()}`;

  return (
    <Link to={"/articles/" + article.documentId}>
      <div className="flex flex-col h-full items-start bg-white dark:bg-slate-600 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        {article.imageUrl !== null ? (
          <img
            className="w-full object-cover"
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
          <h1 className="text-2xl">{article.title}</h1>
          <p>{formattedDate}</p>
        </div>
      </div>
    </Link>
  );
}
