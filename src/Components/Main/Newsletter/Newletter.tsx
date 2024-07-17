import React from "react";
import InputElement from "./InputElement";
import Button from "./Button";

const Newsletter: React.FC = () => {
  return (
    <>
      <div
        id="newsletter"
        className="px-5 text-white text-center py-10 relative"
      >
        <h1 className="text-4xl font-medium tracking-widest relative z-10">
          Newletter
        </h1>
        <p className="text-xl px-5 font-medium mt-10 relative z-10">
          Get 10% off your first purchase when you sign up for our newsletter!
        </p>
        <div className="flex flex-col md:gap-2 max-w-[923px] mx-auto md:justify-center md:items-center md:flex-row">
          <InputElement data={"Email"} />
          <Button />
        </div>
        <span className="absolute bg-[#0000003d] top-0 left-0 w-full h-full"></span>
      </div>
    </>
  );
};

export default Newsletter;
