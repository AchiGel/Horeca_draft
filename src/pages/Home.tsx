import NewPosts from "../components/NewPosts";
import PopularSection from "../components/PopularSection";
import Subscribe from "../components/Subscribe";
import TrendingSection from "../components/TrendingSection";

export default function Home() {
  return (
    <div>
      <NewPosts />
      <Subscribe />
      <PopularSection />
      <TrendingSection />
    </div>
  );
}
