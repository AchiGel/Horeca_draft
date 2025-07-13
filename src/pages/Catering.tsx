import { Helmet } from "react-helmet-async";
import Posts from "../components/Posts";
import Title from "../components/Title";
import { useQuery } from "@tanstack/react-query";
import { getArticlesByCategory } from "../api/api";

export default function Catering() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["articles", "catering"],
    queryFn: () => getArticlesByCategory("catering"),
  });
  return (
    <>
      {isLoading && "Loading..."}
      {isError && `Error: ${error.message}`}
      {data && (
        <div>
          <Helmet>
            <title>Horeca - ქეითერინგი</title>
            <meta
              name="description"
              content="ამბები და სიახლეები ქეითერინგის შესახებ"
            />
            <meta name="keywords" content="horeca, catering, ქეითერინგი" />
          </Helmet>
          <Title
            page={{
              title: "Horeca Georgia - მასპინძლობის ინდუსტრია საქართველოში",
              descr: "ამბები და სიახლეები ქეითერინგის შესახებ",
            }}
          />
          <Posts posts={data} />
        </div>
      )}
    </>
  );
}
