import { useEffect, useState } from "react";
import Posts from "../components/Posts";
import Title from "../components/Title";
import Newest from "../components/Newest";
import { Helmet } from "react-helmet-async";

export interface PageDescription {
  title: string;
  descr: string;
}

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
  const [newestArticle, setNewestArticle] = useState<ArticleType>();

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

  useEffect(() => {
    const newestPost = articles.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )[0];
    setNewestArticle(newestPost);
  }, [articles]);

  return (
    <div className="flex flex-col items-center">
      <Helmet>
        <title>Horeca Georgia - ჰორეკა საქართველო</title>
        <meta
          name="description"
          content="Stay updated on the latest trends and news in the HORECA industry in Georgia and worldwide."
        />
        <meta
          property="og:title"
          content="Horeca Georgia - ჰორეკა საქართველო"
        />
        <meta
          property="og:description"
          content="Latest trends and news in the HORECA industry in Georgia and worldwide."
        />
      </Helmet>
      <Title
        page={{
          title: "Horeca Georgia - მასპინძლობის ინდუსტრია საქართველოში",
          descr: "ისტორია, აქტუალური ამბები, ინოვაციები და ტენდენციები",
        }}
      />
      <Newest newest={newestArticle} />
      {loading ? "Loading..." : <Posts posts={articles} />}
    </div>
  );
}
