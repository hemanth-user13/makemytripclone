import React from "react";
import { FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black h-44 text-white p-4">
      <div className="container mx-auto flex justify-between items-center h-16">
        <div className="flex items-center mt-28">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={24} />
          </a>
        </div>

        <div className="text-center mt-28">
          <p className="text-sm font-bold">© 2024 MAKEMYTRIP PVT. LTD.</p>
          <p className="text-sm font-bold">
            Country <span className="mx-2">|</span> India{" "}
            <span className="mx-2">|</span> USA <span className="mx-2">|</span>{" "}
            UAE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
