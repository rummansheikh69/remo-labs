import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" fixed bottom-0 w-full bg-main border-t border-zinc-300">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between text-sm">
        <div className="text-gray-800 text-sm">
          © {new Date().getFullYear()} Remo Labs
        </div>
        <div className="flex gap-6 text-sm">
          <Link
            to="/privacy"
            className=" text-text hover:text-blue-400 transition"
          >
            privacy
          </Link>
          <Link
            to="/terms"
            className=" text-text hover:text-blue-400 transition"
          >
            terms
          </Link>
          <Link
            to="https://x.com/remolabs"
            target="_blank"
            className=" text-text hover:text-blue-400 transition"
          >
            x
          </Link>
          <Link
            to="https://t.me/remo_labs"
            target="_blank"
            className=" text-text hover:text-blue-400 transition"
          >
            telegram
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
