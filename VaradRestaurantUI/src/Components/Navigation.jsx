import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="hidden lg:flex justify-between items-center bg-[#bfbfbf] h-18 p-4">
        <h1 className="text-[24px] font-bold">Varad Restaurant</h1>
        <ul className="flex gap-8">
          <li className="hover:underline cursor-pointer"><NavLink to={'/'}> Home </NavLink> </li>
          <li className="hover:underline cursor-pointer"><NavLink to={'/menu'}> Menu </NavLink></li>
          <li className="hover:underline cursor-pointer"><NavLink to={'/about'}>About Us </NavLink></li>
          <li className="hover:underline cursor-pointer">Contact Us</li>
          <li className="hover:underline cursor-pointer">Cart</li>
        </ul>
        <div className="cursor-pointer mr-7">Login</div>
      </nav>
      {/* Mobile Top Bar */}
      <nav className="lg:hidden bg-[#bfbfbf] p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Varad</h1>
        <button onClick={() => setIsOpen(true)} className="text-2xl font-bold">
          {!isOpen && '☰'}
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
              Home
            </li>
            <li onClick={() => setIsOpen(false)} className="cursor-pointer">
              Menu
            </li>
            <li onClick={() => setIsOpen(false)} className="cursor-pointer">
              About Us
            </li>
            <li onClick={() => setIsOpen(false)} className="cursor-pointer">
              Contact
            </li>
            <li onClick={() => setIsOpen(false)} className="cursor-pointer">
              Cart
            </li>
            <li onClick={() => setIsOpen(false)} className="cursor-pointer">
              Login
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navigation;
