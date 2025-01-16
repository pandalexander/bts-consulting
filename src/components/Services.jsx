import {
  ShieldAlert,
  Calculator,
  Briefcase,
  FileSearch,
  FileCheck,
  FolderCheck,
  Phone,
} from "lucide-react";

const Services = () => {
  return (
    <div>
      <div className="relative b min-h-[800px]">
        <div className="text-center">
          <h2 className="font-specialSerif text-5xl sm:text-6xl lg:text-7xl tracking-wide text-balance">
            Professional Tax and Business Consulting{" "}
            <span className="bg-gradient-to-br from-sky-400 to-sky-600 text-transparent bg-clip-text">
              Services
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10 lg:mt-20 ">
          <div className="p-6 shadow-lg rounded-lg border-2 border-sky-500">
            <div className="flex">
              <div className="flex mr-6 h-10 w-10 p-2 bg-gradient-to-br from-green-400 to-green-500 text-white justify-center items-center rounded-full">
                <ShieldAlert />
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl text-balance">
                  Audit and Conflict Resolution Support
                </h5>
                <p className="text-md text-neutral-500">
                  Dependable audit support and IRS conflict resolution services
                  to protect your interests and ensure compliance.
                </p>
              </div>
            </div>
          </div>
          {/* HEY THIS IS A NEW THING */}{" "}
          <div className="p-6 shadow-lg rounded-lg border-2 border-sky-500">
            <div className="flex">
              <div className="flex mr-6 h-10 w-10 p-2 bg-gradient-to-br from-green-400 to-green-500 text-white justify-center items-center rounded-full">
                <Calculator />
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl text-balance">
                  Tax Planning{" "}
                </h5>
                <p className="text-md text-neutral-500">
                  Personalized tax planning strategies to reduce liabilities,
                  optimize finances, and secure long-term financial success.
                </p>
              </div>
            </div>
          </div>
          {/* HEY THIS IS A NEW THING */}{" "}
          <div className="p-6 shadow-lg rounded-lg border-2 border-sky-500">
            <div className="flex">
              <div className="flex mr-6 h-10 w-10 p-2 bg-gradient-to-br from-green-400 to-green-500 text-white justify-center items-center rounded-full">
                <Briefcase />
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl text-balance">
                  Business Consulting
                </h5>
                <p className="text-md text-neutral-500">
                  Strategic business consulting services for growth, financial
                  planning, and operational efficiency tailored to your goals.
                </p>
              </div>
            </div>
          </div>
          {/* HEY THIS IS A NEW THING */}
          <div className="p-6 shadow-lg rounded-lg border-2 border-sky-500">
            <div className="flex">
              <div className="flex mr-6 h-10 w-10 p-2 bg-gradient-to-br from-green-400 to-green-500 text-white justify-center items-center rounded-full">
                <FileSearch />
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl text-balance">
                  Individual Filing for Past Tax Year(s){" "}
                </h5>
                <p className="text-md text-neutral-500">
                  Expert assistance filing past-year individual taxes, resolving
                  outstanding issues and maximizing eligible deductions.
                </p>
              </div>
            </div>
          </div>
          {/* HEY THIS IS A NEW THING */}{" "}
          <div className="p-6 shadow-lg rounded-lg border-2 border-sky-500">
            <div className="flex">
              <div className="flex mr-6 h-10 w-10 p-2 bg-gradient-to-br from-green-400 to-green-500 text-white justify-center items-center rounded-full">
                <FileCheck />
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl text-balance">
                  Current Year Tax Preparation and Filing{" "}
                </h5>
                <p className="text-md text-neutral-500">
                  Simplify current-year tax preparation with professional filing
                  assistance designed for accuracy and maximum savings.
                </p>
              </div>
            </div>
          </div>
          {/* HEY THIS IS A NEW THING */}{" "}
          <div className="p-6 shadow-lg rounded-lg border-2 border-sky-500">
            <div className="flex">
              <div className="flex mr-6 h-10 w-10 p-2 bg-gradient-to-br from-green-400 to-green-500 text-white justify-center items-center rounded-full">
                <FolderCheck />
              </div>

              <div className="">
                <h5 className="mt-1 mb-6 text-xl text-balance">
                  Business Filing for Current Tax Year
                </h5>
                <p className="text-md text-neutral-500 align-bottom">
                  Ensure compliant, timely business tax filings for the current
                  year with our expert preparation services.
                </p>
              </div>
            </div>
          </div>
          {/* HEY THIS IS A NEW THING */}
        </div>
        <div className="flex w-full my-16 justify-center">
          <a
            href="tel:1-719-465-2465"
            className="py-6 px-8 border-0 rounded-md bg-gradient-to-br from-green-600 to-green-500 text-white hover:from-green-600 hover:to-green-400 shadow-xl"
          >
            <div className="flex space-x-2 items-center justify-center">
              <Phone color="white" size={27} />
              <p className="font-bold text-xl">Call to get started</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
