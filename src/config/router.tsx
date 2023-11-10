import GamePage from "../pages/Game";
import { HomePage } from "../pages";
import { JoinGamePage } from "../pages/joinGame";
import { LobbyPage } from "../pages/lobby";
import LoginMenu from "../components/menu/LoginMenu";
import { ParameterPage } from "../pages/parameter";
import RegistrationMenu from "../components/menu/RegistrationMenu";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginMenu />,
  },
  {
    path: "/registration",
    element: <RegistrationMenu />,
  },
  {
    path: "/parameter",
    element: <ParameterPage />,
  },
  {
    path: "/join_game",
    element: <JoinGamePage />,
  },
  {
    path: "/lobby",
    element: <LobbyPage />,
  },
  {
    path: "/game",
    element: <GamePage />,
  },
]);
