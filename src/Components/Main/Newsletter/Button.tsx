import React, { useState } from "react";

const Button: React.FC = () => {
  const [classname1, setClassname1] = useState<string>("border-white");

  const handleHover = (): void => {
    setClassname1("border-black");
  };
  const handleNotHover = (): void => {
    setClassname1("border-white");
  };

  return (
    <>
      <button
        onMouseEnter={handleHover}
        onMouseLeave={handleNotHover}
        className="w-full mt-5 border-2 items-center justify-center h-[56px] border-white flex self-center relative px-3 hover:bg-white hover:text-black transition-all ease-in-out duration-500 z-10 md:w-[283px]"
      >
        <hr className={`border w-6 ${classname1}`} />
        <span className="font-semibold text-lg mx-2">Submit Application</span>
        <hr className={`border w-6 ${classname1}`} />
      </button>
    </>
  );
};

export default Button;
