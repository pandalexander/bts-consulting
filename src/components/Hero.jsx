import { Upload, Coins } from "lucide-react";
import video1 from "../assets/taxes-video-1.mp4";
import video2 from "../assets/taxes-video-2.mp4";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-6 lg:mt 20">
        <h1 className="text-6xl font-semibold sm:text-8xl lg:text-8xl text-center tracking-wide ">
          The Taxpayer’s{" "}
          <span className="bg-gradient-to-br from-amber-300 to-amber-700 bg-clip-text text-transparent">
            Champion
          </span>
        </h1>
        <h2 className="text-balance font-semibold p-4 lg:mt-4 text-lg sm:text-xl lg:text-2xl text-center tracking-tight bg-gradient-to-r from-sky-400 to-sky-700 bg-clip-text text-transparent">
          Expert Tax & Accounting Services Since 2010
        </h2>

        <div className="flex flex-col mt-4  gap-5 md:flex-row">
          <a
            href="#"
            className="text-nowrap font-bold shadow-xl py-3 px-6 border-0 rounded-md bg-gradient-to-br from-sky-700 to-sky-500 text-white hover:from-sky-600 hover:to-sky-400"
          >
            <div className="flex space-x-2 items-center justify-center">
              <Upload color="white" size={18} strokeWidth={3} />
              <p>Share Documents Securely</p>
            </div>
          </a>

          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            className="text-nowrap	 font-bold shadow-xl py-3 px-6 border-0 rounded-md bg-gradient-to-br from-amber-300 to-amber-700 text-white hover:from-amber-200 hover:to-amber-600 hover:cursor-pointer"
          >
            <div className="flex space-x-2 items-center justify-center">
              <Coins color="white" size={20} />

              <p>Cut Tax Costs</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex mt-10 justify-center flex-col md:flex-row">
        <video
          autoPlay
          loop
          muted
          className="w-auto md:w-1/2 rounded-lg shadow-lg mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your Browser does not support the video.
        </video>
        <video
          autoPlay
          loop
          muted
          className=" w-auto md:w-1/2 rounded-lg shadow-lg mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your Browser does not support the video.
        </video>
      </div>
    </div>
  );
};

export default Hero;
