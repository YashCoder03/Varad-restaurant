import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Layout from "../Layout";
import Menu from "../Pages/Menu";

const Router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "/about", Component: About },
      { path: "/menu", Component: Menu },
    ],
  },
]);
export default Router;
