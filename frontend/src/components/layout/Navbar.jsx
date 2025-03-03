import React from "react";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";

function Navbar() {
  return (
    <div className=" fixed top-0 w-full z-50 bg-main">
      <div className=" max-w-7xl mx-auto px-4 h-14 flex items-center justify-between bg-main">
        <Link to="/" className=" flex items-center gap-2">
          <div className=" w-7 h-7">
            <img
              src="/logo.png"
              className=" w-full h-full object-contain"
              alt="Remo Labs"
            />
          </div>
          <h1 className="font-bold text-lg text-gray-700">Remo Labs</h1>
        </Link>
        <div className="hidden md:flex gap-8 text-sm">
          <a
            href="https://dexscreener.com/solana/6YaXag31ioCNyzzVmbm5qo9h493qiRxzWE1utJEBpump"
            target="_blank"
            className=" text-text hover:text-blue-400 transition"
          >
            dex
          </a>
          <Link
            to="/whitepaper"
            className=" text-text hover:text-blue-400 transition"
          >
            whitepaper
          </Link>
          <Link
            to="/docs"
            className=" text-text hover:text-blue-400 transition"
          >
            docs
          </Link>
          {/* <Link
            to="/whitepaper"
            className=" text-text hover:text-blue-400 transition"
          >
            roadmap
          </Link> */}
          <Link
            to="/roadmap"
            className=" text-text hover:text-blue-400 transition"
          >
            roadmap
          </Link>
        </div>
        <div className="drawer-content block lg:hidden">
          {/* Page content here */}
          <label htmlFor="my-drawer-4" className="drawer-button">
            <IoMenuSharp className=" w-6 h-6" />
          </label>
        </div>
      </div>
      {/* drawer */}
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu  bg-main text-base-content min-h-full w-52 p-4">
            {/* Sidebar content here */}
            <div className=" flex flex-col gap-3">
              <a
                href="https://dexscreener.com/solana/6YaXag31ioCNyzzVmbm5qo9h493qiRxzWE1utJEBpump"
                target="_blank"
                className=" text-text hover:text-blue-400 transition"
              >
                dex
              </a>
              <Link
                to="/whitepaper"
                className=" text-text hover:text-blue-400 transition"
              >
                whitepaper
              </Link>
              <Link
                to="/docs"
                className=" text-text hover:text-blue-400 transition"
              >
                docs
              </Link>
              {/* <Link
            to="/whitepaper"
            className=" text-text hover:text-blue-400 transition"
          >
            roadmap
          </Link> */}
              <Link
                to="/roadmap"
                className=" text-text hover:text-blue-400 transition"
              >
                roadmap
              </Link>
            </div>
          </ul>
        </div>
      </div>
      {/* drawer end  */}
    </div>
  );
}

export default Navbar;
