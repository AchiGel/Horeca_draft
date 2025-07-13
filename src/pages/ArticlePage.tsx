import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { getSingleArticle } from "../api/api";

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["article", id],
    queryFn: () => {
      if (!id) throw new Error("Article ID is missing");
      return getSingleArticle(id);
    },
    enabled: !!id,
  });

  return (
    <>
      {isLoading && "Loading..."}
      {isError && `Error ${error}`}
      {data && (
        <>
          <Helmet>
            <title>{data.title || "Loading..."}</title>
            <meta property="og:title" content={data.title || "Article"} />
            <meta property="og:description" content={data.description || ""} />
            <meta property="og:image" content={data.imageUrl} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              content={`https://horecageorgia.ge/articles/${data._id}`}
            />
            <meta property="fb:app_id" content="1184963699721099" />
          </Helmet>
          <div>
            <div className="flex flex-col gap-4 mx-auto p-6 md:p-16 pt-24 md:pt-32 max-w-3xl">
              <h1 className="text-3xl">{data.title}</h1>
              {data.imageUrl !== null ? (
                <img
                  className="w-full object-cover"
                  src={data.imageUrl + ".jpeg"}
                  alt={data.title}
                />
              ) : (
                <img
                  className="w-full object-cover"
                  src="/no-image-available-icon-vector.jpg"
                  alt="No Image"
                />
              )}
              <p className="text-xl italic">{data.description}</p>
              {data.body.map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
