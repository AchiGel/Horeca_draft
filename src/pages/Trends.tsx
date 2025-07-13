import { Helmet } from "react-helmet-async";
import Posts from "../components/Posts";
import Title from "../components/Title";
import { useQuery } from "@tanstack/react-query";
import { getArticlesByCategory } from "../api/api";

export default function Trends() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["articles", "trends"],
    queryFn: () => getArticlesByCategory("trends"),
  });
  return (
    <>
      {isLoading && "Loading..."}
      {isError && `Error: ${error.message}`}
      {data && (
        <div>
          <Helmet>
            <title>Horeca - ტრენდები</title>
            <meta
              name="description"
              content="ამბები და სიახლეები მასპინძლობის ინდუსტრიაში არსებული ტრენდების შესახებ"
            />
            <meta name="keywords" content="horeca, trends, ტრენდები" />
          </Helmet>
          <Title
            page={{
              title: "Horeca Georgia - მასპინძლობის ინდუსტრია საქართველოში",
              descr:
                "ამბები და სიახლეები მასპინძლობის ინდუსტრიაში არსებული ტრენდების შესახებ",
            }}
          />
          <Posts posts={data} />
        </div>
      )}
    </>
  );
}
