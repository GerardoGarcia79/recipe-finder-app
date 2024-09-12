import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdOutlineSoupKitchen } from "react-icons/md";
import { PiHeartbeat } from "react-icons/pi";
import { Recipes } from "../hooks/useRecipes";
import { useContext } from "react";
import { FavoriteRecipesContext } from "./FavoriteRecipesProvider";

interface Props {
  recipe: Recipes;
}

const RecipeCard = ({ recipe }: Props) => {
  const healthLabels = recipe.recipe.healthLabels.splice(0, 2);
  const { toggleFavorite, favoriteRecipes } = useContext(
    FavoriteRecipesContext
  );

  return (
    <div className="bg-gray-200 p-2 rounded-lg">
      <div className="w-full h-[200px] overflow-hidden relative rounded-lg">
        <img
          src={recipe.recipe.images.REGULAR.url}
          className="w-full relative bottom-24"
        />
        <span className="absolute bottom-1 left-1 bg-white flex items-center rounded-full opacity-85">
          <MdOutlineSoupKitchen className="ml-[2px]" />
          <p className="text-sm mr-[3px]">{recipe.recipe.yield} Servings</p>
        </span>
        <button
          onClick={() => {
            toggleFavorite(recipe.recipe.label);
          }}
          className="absolute top-1 right-1 bg-white w-7 h-7 rounded-full flex justify-center items-center opacity-75"
        >
          {favoriteRecipes.find(
            (favRecipe) => favRecipe.recipe.label === recipe.recipe.label
          ) ? (
            <AiFillHeart size="24px" color="red" />
          ) : (
            <AiOutlineHeart size="24px" />
          )}
        </button>
      </div>
      <div>
        <h2 className="font-bold text-lg">{recipe.recipe.label}</h2>
        <p className="mt-1 mb-1 text-base">
          {recipe.recipe.cuisineType[0].charAt(0).toUpperCase() +
            recipe.recipe.cuisineType[0].slice(1)}{" "}
          kitchen
        </p>
        <div className="flex">
          {healthLabels.length > 0
            ? healthLabels.map((label, index) => {
                return (
                  <span
                    key={index}
                    className="flex bg-gray-400 items-center rounded-md mr-3"
                  >
                    <PiHeartbeat className="m-[2px]" />
                    <p className="text-sm font-semibold m-[2px]">{label}</p>
                  </span>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
