import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import App from "./App";
import FavoritesPage from "./pages/FavoritesPage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: "favorites", element: <FavoritesPage /> },
      { path: "recipe/:id", element: <RecipeDetailsPage /> },
    ],
  },
]);

export default router;
