import { Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
