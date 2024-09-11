import "./App.css";
import AsidePanel from "./components/AsidePanel";
import MainPanel from "./components/MainPanel";
import useRecipes from "./hooks/useRecipes";

function App() {
  const { error, isLoading, recipes } = useRecipes();

  if (error) return <p>{error}</p>;
  if (isLoading) return <p>Loading...</p>;

  console.log(recipes);

  return (
    <div className="flex flex-col md:flex-row w-full divide-x-2 divide-gray-100">
      <AsidePanel />
      <MainPanel recipes={recipes} />
    </div>
  );
}

export default App;
