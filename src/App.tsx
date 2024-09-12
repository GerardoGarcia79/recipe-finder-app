import "./App.css";
import FavoriteRecipesProvider from "./components/FavoriteRecipesProvider";
import MainPanel from "./components/MainPanel";
import RecipesProvider from "./components/RecipesProvider";

function App() {
  return (
    <div className="flex flex-col md:flex-row w-full divide-x-2 divide-gray-100">
      <RecipesProvider>
        <FavoriteRecipesProvider>
          <MainPanel />
        </FavoriteRecipesProvider>
      </RecipesProvider>
    </div>
  );
}

export default App;
