import { useParams } from "react-router-dom";
import useRecipe from "../hooks/useRecipe";

const RecipeDetailsPage = () => {
  const { id } = useParams();
  const { recipe, isLoading } = useRecipe(id!);

  console.log(recipe);

  const cuisine = recipe?.recipe.cuisineType[0]
    ? recipe?.recipe.cuisineType[0].charAt(0).toUpperCase() +
      recipe?.recipe.cuisineType[0].slice(1)
    : "";
  const dishType = recipe?.recipe.dishType[0]
    ? recipe?.recipe.dishType[0].charAt(0).toUpperCase() +
      recipe?.recipe.dishType[0].slice(1)
    : "";
  const mealType = recipe?.recipe.mealType[0]
    ? recipe?.recipe.mealType[0].charAt(0).toUpperCase() +
      recipe?.recipe.mealType[0].slice(1)
    : "";

  if (isLoading)
    return (
      <div className="bg-[#f8f8fa] flex flex-grow justify-center md:min-h-screen md:items-center">
        <p className="text-xl">Loading...</p>
      </div>
    );

  if (!recipe) return;

  return (
    <div className="bg-[#f8f8fa] flex flex-grow justify-center md:min-h-screen md:items-center">
      <div className="w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-2">
        <div className="p-2">
          <img src={recipe?.recipe.images.REGULAR.url} className="w-full" />
        </div>
        <div className="pl-2">
          <h1 className="font-bold text-3xl mb-1">{recipe?.recipe.label}</h1>
          <p className="text-base mb-1">{cuisine} cuisine</p>
          <p className="text-base mb-1">Dish Type: {dishType}</p>
          <p className="text-base mb-1">Meal Type: {mealType}</p>
          <h2 className="text-lg font-bold mb-1">Ingredients: </h2>
          <ul className="mb-5">
            {recipe?.recipe.ingredientLines.map((ingredient, index) => (
              <li key={index} className="list-disc ml-[18px]">
                {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
              </li>
            ))}
          </ul>
          <a
            href={recipe?.recipe.url}
            target="_blank"
            className="text-xl font-bold underline underline-offset-2 decoration-1"
          >
            For more information and instructions click here!
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsPage;
