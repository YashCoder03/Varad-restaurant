import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Layout from "../Layout";
import Menu from "../Pages/Menu";
import Login from "../Pages/Login";

const Router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "/about", Component: About },
      { path: "/menu", Component: Menu },
      { path: "/login", Component: Login },
    ],
  },
]);
export default Router;
