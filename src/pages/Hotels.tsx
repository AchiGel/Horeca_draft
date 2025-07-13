import { Helmet } from "react-helmet-async";
import Posts from "../components/Posts";
import Title from "../components/Title";
import { useQuery } from "@tanstack/react-query";
import { getArticlesByCategory } from "../api/api";

export default function Hotels() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["articles", "hotels"],
    queryFn: () => getArticlesByCategory("hotels"),
  });
  return (
    <>
      {isLoading && "Loading..."}
      {isError && `Error: ${error.message}`}
      {data && (
        <div>
          <Helmet>
            <title>Horeca - სასტუმროები</title>
            <meta
              name="description"
              content="ამბები და სიახლეები სასტუმროების შესახებ"
            />
            <meta name="keywords" content="horeca, hotels, სასტუმროები" />
          </Helmet>
          <Title
            page={{
              title: "Horeca Georgia - მასპინძლობის ინდუსტრია საქართველოში",
              descr: "ამბები და სიახლეები სასტუმროების შესახებ",
            }}
          />
          <Posts posts={data} />
        </div>
      )}
    </>
  );
}
