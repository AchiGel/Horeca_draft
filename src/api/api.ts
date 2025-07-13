import { ArticleType } from "../utils/types";

const BASE_URL = "https://horeca-backend.vercel.app/api/articles";

export const getAllArticles = async (): Promise<ArticleType[]> => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(
      `Failed to fetch all articles: ${(error as Error).message}`
    );
  }
};

export const getArticlesByCategory = async (
  category: string
): Promise<ArticleType[]> => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data: ArticleType[] = await response.json();

    const filtered = data.filter((item) => item.categories.includes(category));

    return filtered;
  } catch (error) {
    throw new Error(
      `Failed to fetch "${category}" articles: ${(error as Error).message}`
    );
  }
};

export const getSingleArticle = async (id: string): Promise<ArticleType> => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(
      `Failed to fetch article with id ${id}: ${(error as Error).message}`
    );
  }
};
