import React from "react";

const Section1: React.FC = () => {
  const stringArr: string[] = [
    "Excellent English skills (Verbal and written).",
    "Proven experience in Tele Sales would be an advantage.",
    "Excellent negotiation and problem-solving skills.",
    "Preferred nationalities: Indians / Filipinos.",
  ];

  return (
    <div className=" border-black pt-14 py-5 ">
      <h1 className="text-3xl mb-36">Join Our Team</h1>
      <h1 className="font-bold text-lg mb-10">Tele Sales Executive </h1>
      {stringArr.map((item, index) => (
        <p className="font-medium w-full text-[17px] mb-8" key={index}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default Section1;
