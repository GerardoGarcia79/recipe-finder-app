import { useContext } from "react";
import RecipesGrid from "./RecipesGrid";
import SearchInput from "./SearchInput";
import { RecipesContext } from "./RecipesProvider";

const MainPanel = () => {
  const { recipes, handleSearchQuery, isLoading, error } =
    useContext(RecipesContext);

  if (error) return <p>{error}</p>;

  return (
    <div className="bg-[#f8f8fa] flex flex-grow justify-center">
      <div className="w-full max-w-[1100px] flex flex-col">
        <SearchInput handleSearchQuery={handleSearchQuery} />
        <h1 className="font-bold text-3xl">Recommended Recipes</h1>
        <p className="text-base">Popular choices</p>
        {isLoading ? <p>Loading...</p> : <RecipesGrid recipes={recipes} />}
      </div>
    </div>
  );
};

export default MainPanel;
