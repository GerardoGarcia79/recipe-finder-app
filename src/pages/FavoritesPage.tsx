import FavoriteRecipesGrid from "../components/FavoriteRecipesGrid";
import FavoriteRecipesProvider from "../components/FavoriteRecipesProvider";

const FavoritesPage = () => {
  return (
    <div className="flex flex-col md:flex-row w-full divide-x-2 divide-gray-100">
      <div className="bg-[#f8f8fa] flex flex-grow justify-center">
        <div className="w-full max-w-[1100px] flex flex-col">
          <h1 className="font-bold text-3xl">Favorite Recipes</h1>
          <p className="text-base">Your list of recipes</p>
          <FavoriteRecipesProvider>
            <FavoriteRecipesGrid />
          </FavoriteRecipesProvider>
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
