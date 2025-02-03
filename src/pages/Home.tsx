import { useEffect, useState } from "react";
import NewPosts from "../components/NewPosts";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { db } from "../../firebase";

export type Article = {
  id: string;
  title: string;
  body: string[];
  description: string;
  images: string[];
  dateAdd: Timestamp;
  categories: string[];
  minutesRead: number;
};

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const articlesCol = collection(db, "articles");
        const articlesSnap = await getDocs(articlesCol);
        const articlesList: Article[] = articlesSnap.docs.map(
          (doc) =>
            ({
              id: doc.id, // Add Firestore document ID
              ...doc.data(),
            } as Article)
        ); // Type assertion
        setArticles(articlesList);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <NewPosts posts={articles} />
    </div>
  );
}
