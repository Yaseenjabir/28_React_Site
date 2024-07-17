import React from "react";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";

const Contact: React.FC = () => {
  return (
    <>
      <section className="bg-[#F6F6F6] py-14 px-5 ">
        <h1 className="font-semibold text-center text-4xl max-w-[1030px] mx-auto">
          Contact Us
        </h1>
        <div className="flex flex-col lg:flex-row gap-10 lg:mt-16 lg:justify-center lg:items-start max-w-[1030px] mx-auto">
          <Section1 />
          <Section2 />
        </div>
      </section>
    </>
  );
};

export default Contact;
