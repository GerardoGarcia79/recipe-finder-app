import { Recipes } from "../hooks/useRecipes";

interface Props {
  recipes: Recipes[];
}

const RecipesGrid = ({ recipes }: Props) => {
  return (
    <ul>
      {recipes.map(({ recipe }, index) => (
        <li key={index}>{recipe.label}</li>
      ))}
    </ul>
  );
};

export default RecipesGrid;
