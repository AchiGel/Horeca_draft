import { Helmet } from "react-helmet-async";
import Posts from "../components/Posts";
import Title from "../components/Title";
import { useQuery } from "@tanstack/react-query";
import { getArticlesByCategory } from "../api/api";

export default function Restaurants() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["articles", "restaurants"],
    queryFn: () => getArticlesByCategory("restaurants"),
  });
  return (
    <>
      {isLoading && "Loading..."}
      {isError && `Error: ${error.message}`}
      {data && (
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
          <Posts posts={data} />
        </div>
      )}
    </>
  );
}
