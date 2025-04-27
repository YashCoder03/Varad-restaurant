import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiBeachBag } from "react-icons/gi";
import { TbLogin2 } from "react-icons/tb";
import deliveryboyLogo from "../../src/assets/FoodDelivery_logo.png";
import FoodDeliverylogoTextt from "../../src/assets/FoodDeliverylogoTextt.png";
import { PiHamburgerLight } from "react-icons/pi";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="hidden md:flex justify-between items-center bg-white h-18 p-4">
        <div className="text-[24px] ml-3 font-bold cursor-pointerr transition-button">
          <NavLink
            to={"/"}
            className={"flex justify-center items-center"}
          >
            <img src={deliveryboyLogo} alt="Food Logo" className="size-10" />
            <img
              src={FoodDeliverylogoTextt}
              alt="Varad Restaurant"
              className="h-15 max-w-40"
            />{" "}
          </NavLink>
        </div>
        <ul className="flex gap-8">
          <li className="hover:font-bold cursor-pointer">
            <NavLink to={"/"}> Home </NavLink>{" "}
          </li>
          <li className="hover:font-bold cursor-pointer">
            <NavLink to={"/menu"}> Menu </NavLink>
          </li>
          <li className="hover:font-bold cursor-pointer">
            <NavLink to={"/about"}>About Us </NavLink>
          </li>
          <li className="hover:font-bold cursor-pointer ">Contact Us</li>
          <li className=" cursor-pointer">
            <GiBeachBag size={22} className="transition-button" />
          </li>
        </ul>
        <div className="cursor-pointer mr-7">
          <NavLink to={"/login"} className={"flex items-center gap-2"}>
            {" "}
            <TbLogin2 /> Login
          </NavLink>
        </div>
      </nav>
      {/* Mobile Top Bar */}
      <nav className="md:hidden bg-white p-4 flex justify-between items-center">
        <div className="flex justify-center items-center">
        <img src={deliveryboyLogo} alt="Food Logo" className="size-10" />
        <img
          src={FoodDeliverylogoTextt}
          alt="Varad Restaurant"
          className="h-10 max-w-30"
        />
        </div>
        <button onClick={() => setIsOpen(true)} className="text-2xl font-bold cursor-pointer">
          {!isOpen && <PiHamburgerLight />}
        </button>
      </nav>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center text-white">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-3xl color-white"
          >
            X
          </button>

          {/* Menu Items */}
          <ul className="text-2xl space-y-6 text-center">
            <li onClick={() => setIsOpen(false)} className="cursor-pointer">
              <NavLink to={"/"}> Home </NavLink>
            </li>
            <li onClick={() => setIsOpen(false)} className="cursor-pointer">
              <NavLink to={"/menu"}> Menu </NavLink>
            </li>
            <li onClick={() => setIsOpen(false)} className="cursor-pointer">
              <NavLink to={"/about"}>About Us </NavLink>
            </li>
            <li onClick={() => setIsOpen(false)} className="cursor-pointer">
              Contact
            </li>
            <li onClick={() => setIsOpen(false)} className="cursor-pointer">
              Cart
            </li>
            <li onClick={() => setIsOpen(false)} className="cursor-pointer">
              <NavLink to={"/login"} className={"flex items-center gap-2"}>
                {" "}
                <TbLogin2 />
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navigation;
