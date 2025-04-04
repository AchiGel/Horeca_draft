import { useEffect, useState } from "react";
import NewPosts from "../components/NewPosts";

export interface ArticleType {
  body: ArticleBody[];
  categories: string[];
  createdAt: string;
  description: string;
  documentId: string;
  id: number;
  minutesRead: number;
  publishedAt: string;
  title: string;
  updatedAt: string;
  images: ArticleImage[];
}

interface ArticleBody {
  children: ArticleBodyChildren[];
  type: string;
}

interface ArticleBodyChildren {
  text: string;
  type: string;
}

interface ArticleImage {
  url: string;
  documentId: string;
}

export default function Home() {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://strapi-horeca.onrender.com/api/articles?populate=*"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setArticles(data.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return <div>{loading ? "Loading..." : <NewPosts posts={articles} />}</div>;
}
