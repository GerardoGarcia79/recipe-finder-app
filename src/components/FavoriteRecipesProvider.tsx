import { ReactNode, useContext, useEffect, useState } from "react";
import { Recipes } from "../hooks/useRecipes";
import React from "react";
import { RecipesContext } from "./RecipesProvider";

interface FavoriteRecipesType {
  favoriteRecipes: Recipes[];
  toggleFavorite: (label: string) => void;
}

interface Props {
  children: ReactNode;
}

export const FavoriteRecipesContext = React.createContext<FavoriteRecipesType>(
  {} as FavoriteRecipesType
);

const FavoriteRecipesProvider = ({ children }: Props) => {
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipes[]>(
    localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites")!)
      : []
  );
  const { recipes } = useContext(RecipesContext);

  const toggleFavorite = (label: string) => {
    const index = favoriteRecipes.find(
      (recipe) => recipe.recipe.label === label
    );

    return index
      ? setFavoriteRecipes(favoriteRecipes.filter((recipe) => recipe !== index))
      : setFavoriteRecipes([
          ...favoriteRecipes,
          recipes.find((recipe) => recipe.recipe.label === label)!,
        ]);
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteRecipes));
  }, [favoriteRecipes]);

  return (
    <FavoriteRecipesContext.Provider
      value={{ favoriteRecipes, toggleFavorite }}
    >
      {children}
    </FavoriteRecipesContext.Provider>
  );
};

export default FavoriteRecipesProvider;
