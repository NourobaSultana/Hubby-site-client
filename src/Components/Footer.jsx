import React from "react";
import logo from "/home/toma/best-website/hubby-site-client/public/Untitled_design-removebg-preview.png";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-slate-900 via-slate-800 to-slate-900 text-white px-6 lg:px-20 py-12">
      {/* Top Section: Links & Logo */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info & Logo */}
        <div className="flex flex-col gap-4">
          <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
          <p className="text-slate-300 text-sm">
            Hobby platform connecting people with their favorite hobbies. Join,
            create, and grow communities that inspire.
          </p>
        </div>

        {/* Services Links */}
        <div className="flex flex-col gap-2">
          <h6 className="text-yellow-400 font-bold text-lg">Services</h6>
          <a href="#" className="hover:text-yellow-400 transition-colors">
            Branding
          </a>
          <a href="#" className="hover:text-yellow-400 transition-colors">
            Design
          </a>
          <a href="#" className="hover:text-yellow-400 transition-colors">
            Marketing
          </a>
          <a href="#" className="hover:text-yellow-400 transition-colors">
            Advertisement
          </a>
        </div>

        {/* Company Links */}
        <div className="flex flex-col gap-2">
          <h6 className="text-yellow-400 font-bold text-lg">Company</h6>
          <a href="#" className="hover:text-yellow-400 transition-colors">
            About Us
          </a>
          <a href="#" className="hover:text-yellow-400 transition-colors">
            Contact
          </a>
          <a href="#" className="hover:text-yellow-400 transition-colors">
            Jobs
          </a>
          <a href="#" className="hover:text-yellow-400 transition-colors">
            Press Kit
          </a>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-slate-700" />

      {/* Social Icons */}
      <div className="flex justify-center md:justify-end gap-4">
        <a className="p-3 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-white transition-all">
          <FaFacebookF />
        </a>
        <a className="p-3 rounded-full bg-white/10 hover:bg-blue-500 hover:text-white transition-all">
          <FaTwitter />
        </a>
        <a className="p-3 rounded-full bg-white/10 hover:bg-red-600 hover:text-white transition-all">
          <FaYoutube />
        </a>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-slate-400 text-sm">
        © 2026 Hobby. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
