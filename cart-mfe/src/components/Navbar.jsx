import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const [click, setClick] = useState(false);
  
  const mobile = () => {
    setClick(!click);
  };
  
  return (
    <div className="p-1 md:p-4 flex items-center justify-between h-10 w-full bg-white shadow-md">
      <div className="flex flex-row items-center gap-2">
        <span className="text-2xl font-[1000] text-center text-green-600">
          FarmFresh
          <span className="font-extrabold text-sm">.lk</span>
        </span>
      </div>
      
      <ul className="hidden md:flex text-sm text-black font-semibold md:tracking-wide flex-col gap-2 md:flex-row md:gap-8">
        <li>
          <Link to="/" className="hover:text-green-600">Home</Link>
        </li>
        <li>
          <Link to="/explore" className="hover:text-green-600">Explore</Link>
        </li>
        <li>
          <Link to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-xl text-green-600" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-4 h-4 flex justify-center items-center animate-bounce rounded-full text-white">
                  {cart.length}
                </span>
              )}
            </div>
          </Link>
        </li>
      </ul>
      
      <div className="block md:hidden">
        <button onClick={mobile}>
          {!click && <GiHamburgerMenu className="text-2xl text-green-600" />}
          {click && <FaTimes className="text-2xl text-green-600" />}
          <ul className={`text-sm ${
            click ? "block" : "hidden"
          } w-full flex flex-col gap-y-4 absolute top-10 left-0 right-0 text-black font-semibold z-10 bg-white shadow-md`}>
            <li className="rounded-md h-8 hover:bg-green-50">
              <Link to="/" className="block px-4 py-2">Home</Link>
            </li>
            <li className="rounded-md h-8 hover:bg-green-50">
              <Link to="/explore" className="block px-4 py-2">Explore</Link>
            </li>
            <li className="rounded-md h-8 hover:bg-green-50">
              <Link to="/cart" className="block px-4 py-2">Cart</Link>
            </li>
          </ul>
        </button>
      </div>
    </div>
  );
};

export default Navbar;