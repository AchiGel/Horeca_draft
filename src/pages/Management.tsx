import { Helmet } from "react-helmet-async";
import Posts from "../components/Posts";
import Title from "../components/Title";
import { useQuery } from "@tanstack/react-query";
import { getArticlesByCategory } from "../api/api";

export default function Management() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["articles", "management"],
    queryFn: () => getArticlesByCategory("management"),
  });
  return (
    <>
      {isLoading && "Loading..."}
      {isError && `Error: ${error.message}`}
      {data && (
        <div>
          <Helmet>
            <title>Horeca - Management</title>
            <meta
              name="description"
              content="ამბები და სიახლეები მასპინძლობის ინდუსტრიის მენეჯმენტის შესახებ"
            />
            <meta name="keywords" content="horeca, Management, მენეჯმენტი" />
          </Helmet>
          <Title
            page={{
              title: "Horeca Georgia - მასპინძლობის ინდუსტრია საქართველოში",
              descr:
                "ამბები და სიახლეები მასპინძლობის ინდუსტრიის მენეჯმენტის შესახებ",
            }}
          />
          <Posts posts={data} />
        </div>
      )}
    </>
  );
}
