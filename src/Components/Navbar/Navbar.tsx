import React from "react";

const Navbar: React.FC = () => {
  const imgLink: string =
    "//img1.wsimg.com/isteam/ip/bc2c3097-dc7e-420d-a1b0-9849b39b6da0/blob.png/:/rs=h:57,cg:true,m/qt=q:100/ll";

  return (
    <>
      <header
        className="z-10 w-full flex bg-transparent py-5 px-8 absolute top-0 left-0 lg:justify-between"
        id="header"
      >
        <img
          className="md:w-[130px] lg:w-[94px] relative lg:left-20"
          src={imgLink}
          alt="navLogo"
        />
      </header>
    </>
  );
};

export default Navbar;
