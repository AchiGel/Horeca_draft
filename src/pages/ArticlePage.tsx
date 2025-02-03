import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { Article } from "./Home";
import { Helmet } from "react-helmet-async";

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (!id) return;

      try {
        const articleRef = doc(db, "articles", id);
        const articleSnap = await getDoc(articleRef);

        if (articleSnap.exists()) {
          setArticle({ id: articleSnap.id, ...articleSnap.data() } as Article);
        } else {
          setArticle(null);
        }
      } catch (error) {
        console.error("Error fetching article:", error);
        setArticle(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <h1 className="text-2xl text-center text-gray-500 dark:text-white">
        Loading...
      </h1>
    );
  }

  if (!article) {
    return (
      <h1 className="text-2xl text-center text-gray-500 dark:text-white">
        Article not found.
      </h1>
    );
  }

  return (
    <div className="p-6 pt-24 md:p-16 md:pt-32 max-w-3xl mx-auto">
      <Helmet>
        <title>{article.title}</title>
        <meta name="description" content={article.description} />
        <meta name="keywords" content={article.title.split(" ").join(", ")} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:image" content={article.images[0]} />
      </Helmet>
      <article className="flex flex-col gap-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
          {article.title}
        </h1>
        {article.images?.length > 0 && (
          <img
            className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-lg"
            src={article.images[0]}
            alt="Main Image"
          />
        )}
        <span>
          {article.dateAdd.toDate().toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </span>
        <p className="text-lg text-gray-600 dark:text-white leading-relaxed">
          {article.description}
        </p>
        <div className="border-t border-gray-300 my-4"></div>
        {/* Render each paragraph separately */}
        <div className="flex flex-col gap-4">
          {article.body.map(
            (paragraph, index) =>
              paragraph.trim() && (
                <p
                  key={index}
                  className="text-xl text-gray-700 dark:text-white leading-loose"
                >
                  {paragraph}
                </p>
              )
          )}
        </div>
      </article>
    </div>
  );
}
