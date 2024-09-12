import { ReactNode, useState } from "react";
import useRecipes, { Recipes } from "../hooks/useRecipes";
import React from "react";

interface Props {
  children: ReactNode;
}

interface RecipesContextType {
  recipes: Recipes[];
  isLoading: boolean;
  error: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const RecipesContext = React.createContext<RecipesContextType>(
  {} as RecipesContextType
);

const RecipesProvider = ({ children }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { error, isLoading, recipes } = useRecipes(searchQuery);

  console.log(recipes);

  return (
    <RecipesContext.Provider
      value={{ recipes, isLoading, error, setSearchQuery }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
