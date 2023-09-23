// Navbar.js
import { useState } from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <nav className="bg-black p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-white font-bold text-xl">Your Logo</div>
            <div className="lg:hidden">
              <button
                onClick={toggleNavbar}
                className="text-white hover:text-gray-300 focus:outline-none">
                {/* Hamburger icon */}
              </button>
            </div>
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } lg:flex lg:items-center`}>
              <a href="#" className="text-white hover:text-gray-300 px-4 py-2">
                Home
              </a>
              <a href="#" className="text-white hover:text-gray-300 px-4 py-2">
                About
              </a>
              <a href="#" className="text-white hover:text-gray-300 px-4 py-2">
                Services
              </a>
              <a href="#" className="text-white hover:text-gray-300 px-4 py-2">
                Contact
              </a>
            </div>
            <div>
              {isLoggedIn ? (
                <div className="flex items-center">
                  <div className="text-white pr-2">Welcome, User!</div>
                  <button
                    onClick={handleLogout}
                    className="text-white hover:text-gray-300 px-4 py-2">
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleLogin}
                  className="text-white hover:text-gray-300 px-4 py-2">
                    <Link to="/login" className=" text-white border-2 p-[3px] px-3 h border-orange-600">Login</Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
