import React from "react";
import logo from "@/assets/images/full_logo.png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-row justify-between items-center text-sm drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] p-5 bg-black">
      <img src={logo} alt="Cisco Logo" className="h-8" />
      <p className="m-auto text-center text-gray-500">
      Made with ♡ by{" "}
        <a
          href="https://github.com/baristabarita"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          @baristabarita
        </a>
      </p>
      <p className="text-center text-gray-500">
        <a
          href="https://www.linkedin.com/in/shanelouisbarita/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Shane Louis Barita
        </a>
      </p>
    </footer>
  );
};

export default Footer;
