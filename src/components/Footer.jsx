import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-green-100 px-8 py-12 mt-16 border-t border-green-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
        <div className="flex items-center flex-shrink-0">
          <span className="text-3xl mr-2">🌿</span>
          <h2 className="text-2xl font-bold">PlantCare</h2>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p>Email: support@plantcare.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-5 text-xl">
            <a
              href="https://facebook.com"
              className="hover:text-blue-300"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-sky-300"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-pink-300"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:support@plantcare.com"
              className="hover:text-green-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-green-200 mt-12">
        © {new Date().getFullYear()} PlantCare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
