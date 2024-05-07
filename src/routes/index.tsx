import {createBrowserRouter} from "react-router-dom"
import Login from "../pages/login"


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  }
])

export default routes