import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export interface Recipes {
  recipe: {
    label: string;
    calories: number;
    images: { REGULAR: { url: string } };
    yield: number;
    cuisineType: string[];
    healthLabels: string[];
  };
  isFavorite?: boolean;
}

const useRecipe = (id: string) => {
  const [recipe, setRecipe] = useState<Recipes>({} as Recipes);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<Recipes>(`/recipes/v2/${id}`, {
        signal: controller.signal,
      })
      .then((res) => {
        setRecipe(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, [id]);

  return { recipe, error, isLoading, setRecipe };
};

export default useRecipe;
