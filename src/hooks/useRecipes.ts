import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export interface Recipes {
  recipe: {
    label: string;
  };
}

interface FetchResponse {
  hits: Recipes[];
}

const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipes[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchResponse>("/recipes/v2", {
        signal: controller.signal,
        params: {
          q: "banana",
        },
      })
      .then((res) => {
        // TODO: For paginated queries, delete .hits to obtain an object with from, to, count and next page
        setRecipes(res.data.hits);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { recipes, error, isLoading };
};

export default useRecipes;
