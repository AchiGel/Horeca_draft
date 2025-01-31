import { useEffect, useState } from "react";
import { Article } from "./Home";
import { useLocation } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export default function ArticlePage() {
  const location = useLocation();

  const [article, setArticle] = useState<Article>();

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

        const exactPost = articlesList.find(
          (el: { id: string }) => el.id === location.pathname.slice(1)
        );

        setArticle(exactPost);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [location.pathname]);

  return (
    <div className="p-6 pt-24 md:p-16 md:pt-32 max-w-3xl mx-auto">
      {article ? (
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            {article.title}
          </h1>
          <img
            className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-lg"
            src={article.images[0]}
            alt="Main Image"
          />
          <p className="text-lg text-gray-600 dark:text-white leading-relaxed">
            {article.description}
          </p>
          <div className="border-t border-gray-300 my-4"></div>
          <p className="text-xl text-gray-700 dark:text-white leading-loose">
            {article.body}
          </p>
        </div>
      ) : (
        <h1 className="text-2xl text-center text-gray-500 dark:text-white">
          Loading...
        </h1>
      )}
    </div>
  );
}
