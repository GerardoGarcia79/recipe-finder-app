import { Recipes } from "../hooks/useRecipes";
import RecipeCard from "./RecipeCard";

interface Props {
  recipes: Recipes[];
}

const RecipesGrid = ({ recipes }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2 mb-5">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipesGrid;
