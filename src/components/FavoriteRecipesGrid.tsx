import { useContext } from "react";
import RecipeCard from "./RecipeCard";
import { FavoriteRecipesContext } from "./FavoriteRecipesProvider";

const FavoriteRecipesGrid = () => {
  const { favoriteRecipes } = useContext(FavoriteRecipesContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2 mb-5">
      {favoriteRecipes?.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default FavoriteRecipesGrid;
