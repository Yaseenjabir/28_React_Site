import React from "react";
import { DataType } from "./assets/data";

const ServiceComponent: React.FC<DataType> = ({ title, text, img }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center mt-10">
        <img className="w-full" src={img} />
        <div className="mt-4 md:h-[120px] lg:h-[230px]">
          <h1 className="text-3xl mb-4">{title}</h1>
          <p className="px-5 text-md font-medium">{text}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceComponent;
