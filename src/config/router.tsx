import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import { GamePage } from "../components/pages/GamePage";


export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
  },
  {
    path: "/game",
    element: <GamePage/>,
  }
]);