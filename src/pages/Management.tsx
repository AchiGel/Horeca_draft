import { Helmet } from "react-helmet-async";
import Posts from "../components/Posts";
import Title from "../components/Title";

export default function Management() {
  return (
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
      <Posts posts={[]} />
    </div>
  );
}
