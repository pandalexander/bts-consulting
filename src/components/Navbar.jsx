import Logo from "../assets/bts-logo.jpg";
import { Phone } from "lucide-react";
import { File } from "lucide-react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 py-3 bg-brandDark border-b border-neutral-700/80 shadow-lg">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center flex-shrink-0">
            <img src={Logo} alt="" className="h-10 w-10 mr-2" />
            <h1 className="text-2xl tracking-tight text-white">
              BTS&nbsp;Consulting
            </h1>
          </a>
          <ul className="hidden lg:flex ml-14 space-x-12 text-white ">
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
                <File color="white" size={20} />
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
    </div>
  );
};

export default Navbar;
