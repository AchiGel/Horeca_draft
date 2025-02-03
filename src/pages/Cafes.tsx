import { Helmet } from "react-helmet-async";

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
      <h1>კაფეები</h1>
    </div>
  );
}
