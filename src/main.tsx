import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Article from "./pages/ArticlePage.tsx";
import Home from "./pages/Home.tsx";
import Restaurants from "./pages/Restaurants.tsx";
import Cafes from "./pages/Cafes.tsx";
import Catering from "./pages/Catering.tsx";
import Hotels from "./pages/Hotels.tsx";
import Hr from "./pages/Hr.tsx";
import Supply from "./pages/Supply.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/:id" element={<Article />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="/cafes" element={<Cafes />} />
      <Route path="/catering" element={<Catering />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/hr" element={<Hr />} />
      <Route path="/supply" element={<Supply />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
