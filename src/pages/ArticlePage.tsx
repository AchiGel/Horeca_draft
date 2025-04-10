import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleType } from "./Home";
import { Helmet } from "react-helmet-async";

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();

  const [article, setArticle] = useState<ArticleType>();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `https://strapi-horeca.onrender.com/api/articles/${id}?populate=*`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setArticle(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [id]);

  return (
    <>
      {" "}
      <Helmet>
        <title>{article?.title || "Loading..."}</title>
        <meta property="og:title" content={article?.title || "Article"} />
        <meta property="og:description" content={article?.description || ""} />
        {article?.imageUrl && (
          <meta property="og:image" content={article.imageUrl} />
        )}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        {article?.documentId && (
          <meta
            property="og:url"
            content={`https://horecageorgia.ge/articles/${article.documentId}`}
          />
        )}
        <meta property="fb:app_id" content="1184963699721099" />
      </Helmet>
      <div>
        {loading ? (
          "Loading..."
        ) : (
          <div className="flex flex-col gap-4 p-6 pt-24 md:p-16 md:pt-32 max-w-3xl mx-auto">
            <h1 className="text-3xl">{article?.title}</h1>
            {article?.imageUrl !== null ? (
              <img
                className="w-full object-cover"
                src={article?.imageUrl}
                alt={article?.title}
              />
            ) : (
              <img
                className="w-full object-cover"
                src="/no-image-available-icon-vector.jpg"
                alt="No Image"
              />
            )}
            <p className="text-xl italic">{article?.description}</p>
            {article?.body.map((p) =>
              p.children.map((pc, index) => <p key={index}>{pc.text}</p>)
            )}
          </div>
        )}
      </div>
    </>
  );
}
