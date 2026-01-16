import React from "react";
import { Link } from "react-router";
import { IoMdLogIn } from "react-icons/io";
import logo from "/home/toma/best-website/hubby-site-client/public/Untitled_design-removebg-preview.png";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allgroups">All Groups</Link>
      </li>
      <li>
        <Link to="/creategroup">Create Group</Link>
      </li>
      <li>
        <Link to="/mygroup">My Groups</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gray-700 text-gray-200 px-4 lg:px-10 shadow-md">
      {/* LEFT */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 rounded-xl bg-base-100 text-gray-800 shadow z-20"
          >
            {navLinks}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Hobby Logo"
            className="w-10 h-10 rounded-full bg-gray-300"
          />
          <span className="text-xl font-bold tracking-wide">Hobby</span>
        </Link>
      </div>

      {/* CENTER - Desktop Menu */}
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu  menu-horizontal gap-8 font-medium">{navLinks}</ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end">
        <Link
          to="/login"
          className="btn btn-outline border-gray-400 text-gray-200 hover:bg-gray-600 hover:border-gray-300 flex items-center gap-2"
        >
          <IoMdLogIn className="text-lg" />
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
