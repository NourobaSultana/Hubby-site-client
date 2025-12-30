import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  //   const links = (
  //     <ul>
  //       <li>
  //         <a href="">Home</a>
  //       </li>
  //       <li>
  //         <a href="">All Groups</a>
  //       </li>
  //       <li>
  //         <a href="">Create Group</a>
  //       </li>
  //       <li>
  //         <a href="">My Groups</a>
  //       </li>
  //       <li>
  //         <a href="">Login</a>
  //       </li>
  //     </ul>
  //   );
  return (
    <>
      <div className="navbar bg-base-100 shadow-md px-4 lg:px-8">
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
          <Link
            to="/"
            className="btn btn-ghost text-2xl font-bold tracking-wide"
          >
            Hubby
          </Link>
        </div>

        {/* CENTER (Desktop Menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1">
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

        {/* RIGHT */}
        <div className="navbar-end">
          <Link to="/login" className="btn btn-neutral rounded-xl px-6">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
