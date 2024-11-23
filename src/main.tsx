import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Popular from "./pages/Popular.tsx";
import Trending from "./pages/Trending.tsx";
import Article from "./pages/Article.tsx";
import Home from "./pages/Home.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/:id" element={<Article />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
