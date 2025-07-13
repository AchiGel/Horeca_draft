import { Helmet } from "react-helmet-async";
import Posts from "../components/Posts";
import Title from "../components/Title";
import { getArticlesByCategory } from "../api/api";
import { useQuery } from "@tanstack/react-query";

export default function Cafes() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["articles", "cafes"],
    queryFn: () => getArticlesByCategory("cafes"),
  });

  return (
    <>
      {isLoading && "Loading..."}
      {isError && `Error: ${error.message}`}
      {data && (
        <div>
          <Helmet>
            <title>Horeca - კაფეები</title>
            <meta
              name="description"
              content="ამბები და სიახლეები კაფეების შესახებ"
            />
            <meta name="keywords" content="horeca, cafes, კაფეები" />
          </Helmet>
          <Title
            page={{
              title: "Horeca Georgia - მასპინძლობის ინდუსტრია საქართველოში",
              descr: "ამბები და სიახლეები კაფეების შესახებ",
            }}
          />
          <Posts posts={data} />
        </div>
      )}
    </>
  );
}
