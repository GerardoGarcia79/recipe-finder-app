import "./App.css";
import AsidePanel from "./components/AsidePanel";
import MainPanel from "./components/MainPanel";
import RecipesProvider from "./components/RecipesProvider";

function App() {
  return (
    <div className="flex flex-col md:flex-row w-full divide-x-2 divide-gray-100">
      <AsidePanel />
      <RecipesProvider>
        <MainPanel />
      </RecipesProvider>
    </div>
  );
}

export default App;
