import "./App.css";
import AsidePanel from "./components/AsidePanel";
import MainPanel from "./components/MainPanel";

function App() {
  return (
    <div className="flex flex-col md:flex-row w-full divide-x-2 divide-gray-100">
      <AsidePanel />
      <MainPanel />
    </div>
  );
}

export default App;
