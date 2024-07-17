import React from "react";
import InputElement from "./InputElement";
import Textarea from "./Textarea";
import Button from "./Button";

const Section1: React.FC = () => {
  const fieldNames: string[] = ["Name", "Phone", "Email*"];

  return (
    <div className="my-10 lg:my-0">
      <h1 className="text-center font-medium text-2xl">Drop Us A Message</h1>
      <form className="mt-8 flex flex-col gap-7">
        {fieldNames.map((item, index) => (
          <InputElement key={index} data={item} />
        ))}
        <Textarea />
        <Button />
        <p className="text-center text-[12px] text-gray-600">
          This site is protected by reCAPTCHA and the Google{" "}
          <a
            href="https://policies.google.com/privacy"
            className="text-black font-medium cursor-pointer"
          >
            Privacy Policy
          </a>{" "}
          and
          <a
            href="https://policies.google.com/terms"
            className="text-black font-medium cursor-pointer"
          >
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </form>
    </div>
  );
};

export default Section1;
