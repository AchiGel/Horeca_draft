import { Helmet } from "react-helmet-async";
import Posts from "../components/Posts";
import Title from "../components/Title";

export default function Catering() {
  return (
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
      <Posts posts={[]} />
    </div>
  );
}
