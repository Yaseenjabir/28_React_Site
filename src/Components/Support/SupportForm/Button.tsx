import React, { useState } from "react";

const Button: React.FC = () => {
  const [classname1, setClassname1] = useState<string>("border-black");

  const handleHover = (): void => {
    setClassname1("border-white");
  };
  const handleNotHover = (): void => {
    setClassname1("border-black");
  };

  return (
    <>
      <button
        onMouseEnter={handleHover}
        onMouseLeave={handleNotHover}
        className="w-[138px] border-2 items-center justify-center h-[56px] border-black flex self-center relative px-3 hover:bg-black hover:text-white transition-all ease-in-out duration-100"
      >
        <hr className={`border w-6 ${classname1}`} />
        <span className="font-semibold text-lg mx-2">Send</span>
        <hr className={`border w-6 ${classname1}`} />
      </button>
    </>
  );
};

export default Button;
