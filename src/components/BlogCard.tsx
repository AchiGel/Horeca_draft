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
    <Link to={"articles/" + article.documentId}>
      <div className="flex flex-col h-full items-start bg-white overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <img
          className="w-full object-cover"
          src={`${
            "https://strapi-horeca.onrender.com" + article.images[0].url
          }`}
          alt={`${
            "https://strapi-horeca.onrender.com" + article.images[0].documentId
          }`}
        />
        <div className="flex flex-col gap-4 p-6 pt-2">
          <h1 className="text-2xl">{article.title}</h1>
          <p>{formattedDate}</p>
        </div>
      </div>
    </Link>
  );
}
