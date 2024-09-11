import { Recipes } from "../hooks/useRecipes";
import RecipeCard from "./RecipeCard";

interface Props {
  recipes: Recipes[];
}

const RecipesGrid = ({ recipes }: Props) => {
  return (
    <>
      <ul>
        {recipes.map(({ recipe }, index) => (
          <li key={index}>{recipe.label}</li>
        ))}
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </>
  );
};

export default RecipesGrid;
