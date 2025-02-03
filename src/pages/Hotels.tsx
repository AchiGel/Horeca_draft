import { Helmet } from "react-helmet-async";

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
      <h1>Hotels</h1>
    </div>
  );
}
