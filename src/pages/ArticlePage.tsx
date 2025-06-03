import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { ArticleType } from "./Home";
import data from "../data/articles.json";

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();

  const [article, setArticle] = useState<ArticleType>();

  useEffect(() => {
    const post = data[0].data.find((item) => item.id.toString() === id);
    setArticle(post);
  }, [id]);

  return (
    <>
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
        <div className="flex flex-col gap-4 mx-auto p-6 md:p-16 pt-24 md:pt-32 max-w-3xl">
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
          {article?.body.map((p, index) => (
            <p key={index}>{p.text}</p>
          ))}
        </div>
      </div>
    </>
  );
}
