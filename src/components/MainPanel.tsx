import { IoSearch } from "react-icons/io5";
import RecipesGrid from "./RecipesGrid";
import { Recipes } from "../hooks/useRecipes";

interface Props {
  recipes: Recipes[];
}

const MainPanel = ({ recipes }: Props) => {
  return (
    <div className="bg-[#f8f8fa] flex flex-grow justify-center">
      <div className="w-full max-w-[1100px] flex flex-col bg-cyan-400">
        <form className="w-full">
          <div className="relative">
            <IoSearch className="absolute top-[23px] left-2" size="18px" />
            <input
              type="text"
              placeholder="What do you want to cook today?"
              className="w-full shadow-lg rounded-sm text-base mt-4 mb-3 p-1 ps-8"
            />
          </div>
        </form>
        <h1 className="font-bold text-3xl">Recommended Recipes</h1>
        <p className="text-sm">Popular choices</p>
        <RecipesGrid recipes={recipes} />
      </div>
    </div>
  );
};

export default MainPanel;
