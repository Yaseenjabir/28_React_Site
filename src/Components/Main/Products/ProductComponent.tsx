import React from "react";
import { DataType } from "../Services/assets/data";
const ProductComponent: React.FC<DataType> = ({ img, text, title }) => {
  return (
    <>
      <div className="flex flex-col items-center max-w-[440px] mx-auto">
        <img className="w-full" src={img} />
        <div>
          <h1 className="font-medium my-5 text-2xl">{title}</h1>
          <p className="text-md font-medium">{text}</p>
        </div>
      </div>
    </>
  );
};

export default ProductComponent;
