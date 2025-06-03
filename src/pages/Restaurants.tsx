import { Helmet } from "react-helmet-async";
import Posts from "../components/Posts";
import Title from "../components/Title";

export default function Restaurants() {
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
      <Posts posts={[]} />
    </div>
  );
}
