import { RouterProvider } from "react-router-dom";
import { router } from "./config/router";
function App() {

  return (

    <div>
      <RouterProvider router={router}/>
    </div>

  )
}

export default App
