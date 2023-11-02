import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import { GamePage } from "../components/pages/GamePage";
import { MenuLayout } from "../components/layout/MenuLayout";
import { LoginMenu } from "../components/menu/LoginMenu";
import { RegistrationMenu } from "../components/menu/RegistrationMenu";
import { ParameterMenu } from "../components/menu/ParameterMenu";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/menu",
    element: <MenuLayout/>,
    children: [
      {
        path: "login",
        element: <LoginMenu/>,
      },
      {
        path: "registration",
        element: <RegistrationMenu/>,
      },
      {
        path: "parameter",
        element: <ParameterMenu/>,
      },
      {
        path: "lobby",
        element: <GamePage/>,
      },
    ],
  },
  {
    path: "/game",
    element: <GamePage/>,
  }
]);