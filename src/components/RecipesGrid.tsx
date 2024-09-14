import { useContext } from "react";
import RecipeCard from "./RecipeCard";
import { RecipesContext } from "./RecipesProvider";

const RecipesGrid = () => {
  const { recipes } = useContext(RecipesContext);

  return (
    <>
      {recipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2 mb-5">
          {recipes?.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </div>
      ) : (
        <h1 className="font-bold text-2xl mt-4">
          Nothing to show... Please search for a recipe.
        </h1>
      )}
    </>
  );
};

export default RecipesGrid;
