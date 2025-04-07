import { Helmet } from "react-helmet-async";
import Posts from "../components/Posts";
import Title from "../components/Title";

export default function Cafes() {
  return (
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
      <Posts posts={[]} />
    </div>
  );
}
