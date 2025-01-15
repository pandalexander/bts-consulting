import { Upload, Coins } from "lucide-react";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-6 lg:mt 20">
        <h1 className="text-6xl sm:text-8xl lg:text-8xl text-center tracking-wide ">
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
          <a
            href="#"
            className="text-nowrap	 font-bold shadow-xl py-3 px-6 border-0 rounded-md bg-gradient-to-br from-amber-300 to-amber-700 text-white hover:from-amber-200 hover:to-amber-600"
          >
            <div className="flex space-x-2 items-center justify-center">
              <Coins color="white" size={20} />

              <p>Cut Tax Costs</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
