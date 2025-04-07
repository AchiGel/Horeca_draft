import { Helmet } from "react-helmet-async";
import Posts from "../components/Posts";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import { ArticleType } from "./Home";

export default function Restaurants() {
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
        const restaurantArticles = await data.data.filter(
          (d: { categories: string[] }) => d.categories[0] === "restaurants"
        );
        setArticles(restaurantArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Horeca - რესტორნები</title>
        <meta
          name="description"
          content="ამბები და სიახლეები რესტორნების შესახებ"
        />
        <meta name="keywords" content="horeca, restaurants, რესტორანი" />
      </Helmet>
      <Title
        page={{
          title: "Horeca Georgia - მასპინძლობის ინდუსტრია საქართველოში",
          descr: "ამბები და სიახლეები რესტორნების შესახებ",
        }}
      />
      {loading ? "Loading..." : <Posts posts={articles} />}
    </div>
  );
}
