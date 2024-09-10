import { useEffect, useState } from "react";
import "./App.css";
import AsidePanel from "./components/AsidePanel";
import MainPanel from "./components/MainPanel";
import axios, { CanceledError } from "axios";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    axios
      .get(
        "https://api.edamam.com/api/recipes/v2?type=public&app_id=0d2cf00c&app_key=feedc68e9ce12eeb44eb3caff3cc438f&q=banana",
        { signal: controller.signal }
      )
      .then((res) => {
        setRecipes(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);

  if (error) return <p>{error}</p>;
  if (isLoading) return <p>Loading...</p>;

  console.log(recipes);

  return (
    <div className="flex flex-col md:flex-row w-full divide-x-2 divide-gray-100">
      <AsidePanel />
      <MainPanel />
    </div>
  );
}

export default App;
