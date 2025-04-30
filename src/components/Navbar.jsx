import { RxHamburgerMenu } from "react-icons/rx";
import ThemeToogle from "./ThemeToogle";

import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import logo from '../assets/lokmanlogo.png'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow shadow-gray-200 dark:bg-zinc-800-c dark:text-white dark:shadow-zinc-800-c sticky top-0 z-50">
      <div className="container min-h-14 mx-auto px-8 py-2 flex justify-between align-middle items-center">
        <a className="content-center md:order-1"> <img src={logo} alt="logo" width="300" /> </a>

        <div className="flex gap-6 md:order-3">
          <div className="content-center relative top-1">
            <ThemeToogle />
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl md:hidden"
          >
            <RxHamburgerMenu />
          </button>
        </div>

        <nav
          className={`absolute top-14 left-0 w-full flex flex-col gap-4 text-xl text-center p-4 border-t-2 border-gray-200 md:border-none dark:border-none bg-white dark:bg-zinc-800-c md:static md:flex md:flex-row md:gap-6 md:w-fit md:order-2 ${
            mobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <HashLink
          smooth
            to="/#home"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-amber-600 transition-colors duration-200"
          >
            Home
          </HashLink>

          <HashLink
            smooth
            to="/#about-me"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-amber-600 transition-colors duration-200"
          >
            About
          </HashLink>

          <HashLink
            smooth
            to="/#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-amber-600 transition-colors duration-200"
          >
            Skills
          </HashLink>

          <HashLink
            smooth
            to="/#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-amber-600 transition-colors duration-200"
          >
            Portfolio
          </HashLink>

          <HashLink
            smooth
            to="/#contact-me"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-amber-600 transition-colors duration-200"
          >
            Contact
          </HashLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
