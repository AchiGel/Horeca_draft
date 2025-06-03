import { useEffect, useState } from "react";
import Posts from "../components/Posts";
import Title from "../components/Title";
import Newest from "../components/Newest";
import { Helmet } from "react-helmet-async";
import data from "../data/articles.json";

export interface PageDescription {
  title: string;
  descr: string;
}

export interface ArticleType {
  body: ArticleBody[];
  categories: string[];
  description: string;
  documentId: string;
  id: number;
  minutesRead: number;
  publishedAt: number[];
  title: string;
  imageUrl: string;
}

interface ArticleBody {
  text: string;
}

export default function Home() {
  const [articles, setArticles] = useState<ArticleType[]>([]);

  useEffect(() => {
    setArticles(data[0].data);
  }, []);

  console.log(data[0].data);

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
      <Newest newest={articles[0]} />
      <Posts posts={articles} />
    </div>
  );
}
