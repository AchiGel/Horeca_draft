// import { useEffect, useState } from "react";
import Posts from "../components/Posts";
import Title from "../components/Title";
import Newest from "../components/Newest";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { getAllArticles } from "../api/api";
// import data from "../data/articles.json";

export default function Home() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["articles"],
    queryFn: getAllArticles,
  });

  return (
    <div className="flex flex-col items-center">
      <Helmet>
        <title>Horeca Georgia - ჰორეკა საქართველო</title>
        <meta
          name="description"
          content="Stay updated on the latest trends and news in the HORECA industry in Georgia and worldwide."
        />
        <meta
          property="og:title"
          content="Horeca Georgia - ჰორეკა საქართველო"
        />
        <meta
          property="og:description"
          content="Latest trends and news in the HORECA industry in Georgia and worldwide."
        />
      </Helmet>
      <Title
        page={{
          title: "Horeca Georgia - მასპინძლობის ინდუსტრია საქართველოში",
          descr: "ისტორია, აქტუალური ამბები, ინოვაციები და ტენდენციები",
        }}
      />
      {isLoading && <p className="py-10">იტვირთება...</p>}
      {isError && (
        <p className="py-10 text-red-500">
          შეცდომა: {(error as Error).message}
        </p>
      )}
      {data && (
        <>
          <Newest newest={data[0]} />
          <Posts posts={data} />
        </>
      )}
    </div>
  );
}
