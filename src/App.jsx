import {
  createBrowserRouter,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Recipes from "./pages/Recipes";
import './App.css'
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>
  },
  {
    path: "/Recipe",
    element: <Recipes/>
  },
]);
