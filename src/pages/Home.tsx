import { useEffect, useState } from "react";
import NewPosts from "../components/NewPosts";
import PopularSection from "../components/PopularSection";
import Subscribe from "../components/Subscribe";
import TrendingSection from "../components/TrendingSection";

export type BlogPost = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
};

const apiKey = import.meta.env.VITE_API_KEY;

export default function Home() {
  const [posts, setPosts] = useState<BlogPost[] | []>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`
        );
        const data = await response.json();
        setPosts(data.articles);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <NewPosts posts={posts} />
      <Subscribe />
      <PopularSection posts={posts} />
      <TrendingSection posts={posts} />
    </div>
  );
}
