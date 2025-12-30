import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col ">
        <Navbar></Navbar>

        <div className="flex-grow w-full max-w-6xl mx-auto mt-4 mb-4">
          <Outlet></Outlet>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;
