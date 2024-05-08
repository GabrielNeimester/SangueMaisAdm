import {createBrowserRouter} from "react-router-dom"
import Login from "../pages/login"
import Home from "../pages/home"
import HemocentroPagina from "../pages/hemocentro"


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path:"/home",
    element: <Home/>
  },
  {
    path:"hemocentro/:id",
    element:<HemocentroPagina/>
  }
])

export default routes