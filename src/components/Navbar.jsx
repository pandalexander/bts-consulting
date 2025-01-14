import Logo from "../assets/bts-logo.jpg";
import { Phone } from "lucide-react";
import { File, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div>
      <nav className="z-50 py-3 bg-brandDark shadow-lg">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center ">
            <a href="/" className="flex items-center flex-shrink-0 ">
              <img src={Logo} alt="" className="h-10 w-10 mr-2" />
              <h1 className="text-2xl tracking-tight text-white">
                BTS&nbsp;Consulting
              </h1>
            </a>
            <div className="lg:hidden flex text-white">
              {menuIsOpen ? (
                <X onClick={handleMenuClick} />
              ) : (
                <Menu onClick={handleMenuClick} />
              )}
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12 text-white  ">
              <li>
                <a href="#" className="hover:text-sky-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-300">
                  Contact
                </a>
              </li>
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a
                href="#"
                className="py-2 px-3 border-0 rounded-md bg-gradient-to-br from-sky-700 to-sky-500 text-white hover:from-sky-600 hover:to-sky-400"
              >
                <div className="flex space-x-2 items-center justify-center">
                  <File color="white" size={18} />
                  <p>Send Documents</p>
                </div>
              </a>
              <a
                href="tel:1-719-465-2465"
                className="py-2 px-3 border-0 rounded-md bg-gradient-to-br from-sky-700 to-sky-500 text-white hover:from-sky-600 hover:to-sky-400"
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
        // <div className="bg-gradient-to-br from-sky-700 to-sky-500 lg:hidden fixed w-full right-0 z-20 md:grid md:grid-cols-2 flex flex-col gap-5 justify-center p-4">
        <div className="bg-brandDark lg:hidden  w-full right-0 z-20 md:grid md:grid-cols-2 flex flex-col gap-5 justify-center p-4">
          <a
            href="tel:1-719-465-2465"
            className="md:col-span-2 py-2 px-3 border-0 rounded-md bg-gradient-to-br from-sky-700 to-sky-500 text-white hover:from-sky-600 hover:to-sky-400"
          >
            <div className="flex space-x-2 items-center justify-center">
              <Phone color="white" size={20} />
              <p>(719) 465-2465</p>
            </div>
          </a>

          <a
            href="#"
            className="py-2 px-3 text-center rounded-md bg-gradient-to-br from-zinc-100 to-zinc-200 text-brandDark hover:from-white hover:to-white hover:text-sky-600 "
          >
            Services
          </a>
          <a
            href="#"
            className="py-2 px-3 text-center rounded-md bg-gradient-to-br from-zinc-100 to-zinc-200 text-brandDark hover:from-white hover:to-white hover:text-sky-600 "
          >
            About
          </a>
          <a
            href="#"
            className="py-2 px-3 text-center rounded-md bg-gradient-to-br from-zinc-100 to-zinc-200 text-brandDark hover:from-white hover:to-white hover:text-sky-600 "
          >
            Contact
          </a>
          <a
            href="#"
            className="py-2 px-3 border-0 rounded-md bg-gradient-to-br from-sky-700 to-sky-500 text-white hover:from-sky-600 hover:to-sky-400"
          >
            <div className="flex space-x-2 items-center justify-center">
              <File color="white" size={18} />
              <p>Send Documents</p>
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
