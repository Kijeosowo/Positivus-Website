import { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white p-5">
      <div className="flex lg:justify-around justify-between items-center w-full max-1xl mx-auto">
        <div>
          <Link to="/">
            <img src={logo} className="w-32" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm">
          <Link
            className="hover:text-white hover:bg-[#191A23] hover:rounded p-3 transition"
            to="/about">
            About Us
          </Link>
          <Link
            className="hover:text-white hover:bg-[#191A23] hover:rounded p-3 transition"
            to="/services">
            Services
          </Link>
          <Link
            className="hover:text-white hover:bg-[#191A23] hover:rounded p-3 transition"
            to="/usecase">
            Use Case
          </Link>
          <Link
            className="hover:text-white hover:bg-[#191A23] hover:rounded p-3 transition"
            to="/pricing">
            Pricing
          </Link>
          <Link
            className="hover:text-white hover:bg-[#191A23] hover:rounded p-3 transition"
            to="/blog">
            Blog
          </Link>
        </div>

        <div className="hidden md:block bg-black text-white py-2 px-5 rounded-lg hover:bg-white hover:text-black border transition">
          <Link to="/pricing">Request a Demo</Link>
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-100 shadow-md w-full transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-end p-4">
          <X
            className="w-6 h-6 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div className="flex flex-col items-center gap-10 p-20">
          <Link
            className="hover:text-gray-700 transition"
            to="/"
            onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link
            className="hover:text-gray-700 transition"
            to="/about"
            onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link
            className="hover:text-gray-700 transition"
            to="/services"
            onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link
            className="hover:text-gray-700 transition"
            to="/usecase"
            onClick={() => setIsOpen(false)}>
            Use Case
          </Link>
          <Link
            className="hover:text-gray-700 transition"
            to="/pricing"
            onClick={() => setIsOpen(false)}>
            Pricing
          </Link>
          <Link
            className="hover:text-gray-700 transition"
            to="/blog"
            onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <div className="bg-black text-white py-2 px-5 rounded-lg hover:bg-white hover:text-black border transition">
            <Link to="" onClick={() => setIsOpen(false)}>
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;