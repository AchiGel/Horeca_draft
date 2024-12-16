import { useEffect, useState } from "react";
import { BlogPost } from "./Home";
import { useLocation } from "react-router-dom";

const apiKey = import.meta.env.VITE_API_KEY;

export default function Article() {
  const location = useLocation();

  const [post, setPost] = useState<BlogPost>();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`
        );
        const data = await response.json();

        const exactPost = data.articles.find(
          (el: { publishedAt: string }) =>
            el.publishedAt === location.pathname.slice(1)
        );

        setPost(exactPost);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [location.pathname]);

  return (
    <div className="p-6 md:p-16">
      {post ? (
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl">{post.title}</h1>
          <h1>{post.author}</h1>
          <img src={post.urlToImage} alt="Main Image" />
          <p>{post.description}</p>
          <p className="text-xl">{post.content}</p>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
