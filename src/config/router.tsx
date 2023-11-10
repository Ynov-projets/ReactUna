import { HomePage } from "../pages";
import { LoginMenu } from "../components/menu/LoginMenu";
//import { GamePage } from "../pages/";
import { RegistrationMenu } from "../components/menu/RegistrationMenu";
import { createBrowserRouter } from "react-router-dom";
import { ParameterPage } from "../pages/parameter";
import { LobbyPage } from "../pages/lobby";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
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
        element: <ParameterPage />,
      },
      {
        path: "lobby",
        element: <LobbyPage/>,
      },
]);
