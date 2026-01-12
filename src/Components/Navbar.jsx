import React from "react";
import { Link } from "react-router";
import logo from "/home/toma/best-website/hubby-site-client/public/Untitled_design-removebg-preview.png";
import { IoMdLogIn } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-gray-700 shadow-md px-4 lg:px-8">
        {/* LEFT */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </button>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100
                   rounded-xl shadow mt-3 w-52 z-20"
            >
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
            </ul>
          </div>
          {/* Logo */}
          <div className="flex gap-2">
            <img
              className="w-[40px] h-[40px] bg-gray-300 rounded-full"
              src={logo}
              alt=""
            />
            <h2 className="font-bold text-gray-300 mt-2"> Hobby</h2>
          </div>
        </div>

        {/* CENTER (Desktop Menu) */}
        <div className="navbar  h-[100px] hidden lg:flex ">
          <ul className=" mt-20 menu-horizontal gap-10">
            <li className=" text-gray-300 text-[15px] hover:text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="text-gray-300 text-[15px] hover:text-white">
              <Link to="/allgroups">All Groups</Link>
            </li>
            <li className="text-gray-300 text-[15px] hover:text-white">
              <Link to="/creategroup">Create Group</Link>
            </li>
            <li className="text-gray-300 text-[15px] hover:text-white">
              <Link to="/mygroup">My Groups</Link>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end">
          <Link
            to="/login"
            className="btn btn-neutral font-bold px-6 bg-gray-700 text-gray-400"
          >
            <h2>
              <IoMdLogIn />
            </h2>
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
