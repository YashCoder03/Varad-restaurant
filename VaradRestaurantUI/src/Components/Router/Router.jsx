import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Layout from "../Layout";
import Menu from "../Pages/Menu";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const Router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "/about", Component: About },
      { path: "/menu", Component: Menu },
      { path: "/login", Component: Login },
      {path: "/register", Component: Register},
    ],
  },
]);
export default Router;
