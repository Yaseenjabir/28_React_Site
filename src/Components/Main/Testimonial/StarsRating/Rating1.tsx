import React from "react";
import { IoMdStar } from "react-icons/io";

const Rating1: React.FC = () => {
  return (
    <div className="flex mt-4">
      <IoMdStar className="text-yellow-400 text-2xl" />
      <IoMdStar className="text-yellow-400 text-2xl" />
      <IoMdStar className="text-yellow-400 text-2xl" />
      <IoMdStar className="text-yellow-400 text-2xl" />
      <IoMdStar className="text-yellow-400 text-2xl" />
    </div>
  );
};

export default Rating1;
