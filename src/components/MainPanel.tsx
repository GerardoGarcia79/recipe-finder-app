import RecipesGrid from "./RecipesGrid";
import { Recipes } from "../hooks/useRecipes";
import SearchInput from "./SearchInput";

interface Props {
  recipes: Recipes[];
  handleSearchQuery: (query: string) => void;
}

const MainPanel = ({ recipes, handleSearchQuery }: Props) => {
  return (
    <div className="bg-[#f8f8fa] flex flex-grow justify-center">
      <div className="w-full max-w-[1100px] flex flex-col">
        <SearchInput handleSearchQuery={handleSearchQuery} />
        <h1 className="font-bold text-3xl">Recommended Recipes</h1>
        <p className="text-base">Popular choices</p>
        <RecipesGrid recipes={recipes} />
      </div>
    </div>
  );
};

export default MainPanel;
