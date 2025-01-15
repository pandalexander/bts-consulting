import Logo from "../assets/bts-logo.jpg";
import { Phone } from "lucide-react";
import { Upload, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const handleTitleClick = () => {
    if (menuIsOpen) {
      setMenuIsOpen(!menuIsOpen);
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 bg-brandDark shadow-lg font-semibold">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center ">
            <Link
              onClick={handleTitleClick}
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              className="flex items-center flex-shrink-0 hover:cursor-pointer"
            >
              <img src={Logo} alt="" className="h-10 w-10 mr-2" />
              <h1 className="text-2xl tracking-tight text-white">
                BTS&nbsp;Consulting
              </h1>
            </Link>

            <div className="lg:hidden flex text-white">
              {menuIsOpen ? (
                <X onClick={handleMenuClick} />
              ) : (
                <Menu onClick={handleMenuClick} />
              )}
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12 text-white  ">
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  className="hover:text-sky-300 hover:cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  className="hover:text-sky-300 hover:cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  className="hover:text-sky-300 hover:cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a
                href="#"
                className="py-2 px-3 border-0 rounded-md bg-gradient-to-br from-sky-700 to-sky-500 text-white hover:from-sky-600 hover:to-sky-400"
              >
                <div className="flex space-x-2 items-center justify-center">
                  <Upload color="white" size={18} />
                  <p>Submit Your Files</p>
                </div>
              </a>
              <a
                href="tel:1-719-465-2465"
                className="py-2 px-3 border-0 rounded-md bg-gradient-to-br from-green-600 to-green-500 text-white hover:from-green-600 hover:to-green-400"
              >
                <div className="flex space-x-2 items-center justify-center">
                  <Phone color="white" size={20} />
                  <p>(719) 465-2465</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>
      {menuIsOpen && (
        <div className="bg-brandDark lg:hidden fixed  w-full right-0 z-20 md:grid md:grid-cols-2 flex flex-col gap-5 justify-center p-4 font-semibold">
          <Link
            onClick={handleMenuClick}
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            className="py-2 px-3 text-center rounded-md bg-gradient-to-br from-zinc-100 to-zinc-200 text-brandDark hover:from-white hover:to-white hover:text-sky-600 hover:cursor-pointer"
          >
            About
          </Link>
          <Link
            onClick={handleMenuClick}
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            className="py-2 px-3 text-center rounded-md bg-gradient-to-br from-zinc-100 to-zinc-200 text-brandDark hover:from-white hover:to-white hover:text-sky-600 hover:cursor-pointer"
          >
            Services
          </Link>
          <Link
            onClick={handleMenuClick}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            className="py-2 px-3 text-center rounded-md bg-gradient-to-br from-zinc-100 to-zinc-200 text-brandDark hover:from-white hover:to-white hover:text-sky-600 hover:cursor-pointer"
          >
            Contact
          </Link>

          <a
            onClick={handleMenuClick}
            href="#"
            className="py-2 px-3 border-0 rounded-md bg-gradient-to-br from-sky-700 to-sky-500 text-white hover:from-sky-600 hover:to-sky-400"
          >
            <div className="flex space-x-2 items-center justify-center">
              <Upload color="white" size={18} />
              <p>Submit Your Files</p>
            </div>
          </a>
          <a
            onClick={handleMenuClick}
            href="tel:1-719-465-2465"
            className="md:col-span-2 py-2 px-3 border-0 rounded-md bg-gradient-to-br from-green-600 to-green-500 text-white hover:from-green-600 hover:to-green-400"
          >
            <div className="flex space-x-2 items-center justify-center">
              <Phone color="white" size={20} />
              <p>(719) 465-2465</p>
            </div>
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
