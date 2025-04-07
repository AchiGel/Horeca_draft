import { PageDescription } from "../pages/Home";

export default function Title({ page }: { page: PageDescription }) {
  return (
    <div className="mt-20 mx-10 md:mt-28 md:mx-10 lg:mt-32 lg:mx-24">
      <h1 className="text-3xl md:text-6xl mb-6">{page.title}</h1>
      <span className="text-base md:text-lg">{page.descr}</span>
    </div>
  );
}
