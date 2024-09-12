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

interface FetchResponse {
  hits: Recipes[];
}

const useRecipe = (uri: string) => {
  const [recipe, setRecipe] = useState<Recipes[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchResponse>("/recipes/v2/by-uri", {
        signal: controller.signal,
        params: {
          uri: uri,
        },
      })
      .then((res) => {
        setRecipe(res.data.hits);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, [uri]);

  return { recipe, error, isLoading, setRecipe };
};

export default useRecipe;
