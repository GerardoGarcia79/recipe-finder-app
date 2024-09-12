import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <App /> }],
  },
]);

export default router;
