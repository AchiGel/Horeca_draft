import { Helmet } from "react-helmet-async";
import Posts from "../components/Posts";
import Title from "../components/Title";

export default function Trends() {
  return (
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
      <Posts posts={[]} />
    </div>
  );
}
