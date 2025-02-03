import { Helmet } from "react-helmet";

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
      <h1>რესტორნები</h1>
    </div>
  );
}
