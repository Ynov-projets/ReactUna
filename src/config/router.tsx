import { HomePage } from "../pages";
import { LoginMenu } from "../components/menu/LoginMenu";
//import { GamePage } from "../pages/";
import { MenuLayout } from "../components/layout/MenuLayout";
import { ParameterMenu } from "../components/menu/ParameterMenu";
import { RegistrationMenu } from "../components/menu/RegistrationMenu";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/menu",
    element: <MenuLayout />,
    children: [
      {
        path: "login",
        element: <LoginMenu />,
      },
      {
        path: "registration",
        element: <RegistrationMenu />,
      },
      {
        path: "parameter",
        element: <ParameterMenu />,
      },
      // {
      //   path: "lobby",
      //   element: <GamePage/>,
      // },
    ],
  },
]);
