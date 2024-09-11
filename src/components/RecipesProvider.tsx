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
  handleSearchQuery: (query: string) => void;
}

export const RecipesContext = React.createContext<RecipesContextType>(
  {} as RecipesContextType
);

const RecipesProvider = ({ children }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { error, isLoading, recipes } = useRecipes(searchQuery);

  const handleSearchQuery = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <RecipesContext.Provider
      value={{ recipes, isLoading, error, handleSearchQuery }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
