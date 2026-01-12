import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-base-200">
        {/* Navbar */}
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>

        {/* Main Content */}
        <main className="flex-grow w-full">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <Outlet />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-base-100 border-t">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default MainLayout;
