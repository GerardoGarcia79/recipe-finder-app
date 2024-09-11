import { useState } from "react";
import "./App.css";
import AsidePanel from "./components/AsidePanel";
import MainPanel from "./components/MainPanel";
import useRecipes from "./hooks/useRecipes";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const { error, isLoading, recipes } = useRecipes(searchQuery);

  if (error) return <p>{error}</p>;
  if (isLoading) return <p>Loading...</p>;

  const handleSearchQuery = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="flex flex-col md:flex-row w-full divide-x-2 divide-gray-100">
      <AsidePanel />
      <MainPanel recipes={recipes} handleSearchQuery={handleSearchQuery} />
    </div>
  );
}

export default App;
