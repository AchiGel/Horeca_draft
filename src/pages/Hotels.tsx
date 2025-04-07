import { Helmet } from "react-helmet-async";
import Posts from "../components/Posts";
import Title from "../components/Title";

export default function Hotels() {
  return (
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
      <Posts posts={[]} />
    </div>
  );
}
