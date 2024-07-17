import React, { useState } from "react";
import SupportForm from "./SupportForm/SupportForm";
import { BiSolidComment } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

const Support: React.FC = () => {
  const [className, setClassname] = useState<string>("translate-x-[100%]");

  const addClassName = (): void => {
    setClassname("translate-x-[0%]");
  };

  const removeClassName = (): void => {
    setClassname("translate-x-[100%]");
  };

  return (
    <>
      <div
        className={`fixed top-0 w-full h-screen z-40 bg-white text-black py-1 md:right-0 md:w-[370px] transition-all ease-in-out duration-200 rounded-md ${className}`}
      >
        <div className="bg-gray-200 px-5 relative h-[111px]">
          <h1 className="text-2xl tracking-wider max-w-[400px] font-medium">
            Brandz Management Consultancy
          </h1>
          <div
            className="bg-slate-100 
           px-4 text-[15px] py-3 rounded-md"
          >
            <p className="max-w-[361px]">
              Hi! Let us know how we can help and we’ll respond shortly.
            </p>
          </div>
          <RxCross1
            onClick={removeClassName}
            className="absolute top-3 right-3 text-xl cursor-pointer"
          />
        </div>
        <SupportForm />
      </div>
      <button
        onClick={addClassName}
        className="bg-gray-200 shadow-2xl z-20 p-4 rounded-full fixed bottom-4 right-4 cursor-pointer"
      >
        <BiSolidComment className="text-4xl" />
      </button>
    </>
  );
};

export default Support;
