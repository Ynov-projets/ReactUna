import { RouterProvider } from "react-router-dom";
import UserProvider from "./contexts/auth/AuthContext";
import WebSocketsProvider from "./contexts/rooms/WebSocketsContext";
import { router } from "./config/router";

function App() {
  return (
    <div>
      <WebSocketsProvider>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </WebSocketsProvider>
    </div>
  );
}

export default App;
