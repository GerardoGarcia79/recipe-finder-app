import { useParams } from "react-router-dom";
import useRecipe from "../hooks/useRecipe";

const RecipeDetailsPage = () => {
  const { id } = useParams();
  const { recipe } = useRecipe(id!);

  console.log(recipe);

  return <div>RecipeDetailsPage</div>;
};

export default RecipeDetailsPage;
