import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./routes.tsx";
// import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);
