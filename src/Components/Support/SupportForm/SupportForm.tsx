import React from "react";
import InputElement from "./InputElement";
import Textarea from "./Textarea";
import Button from "./Button";

const SupportForm: React.FC = () => {
  const fieldNames: string[] = ["Name", "Phone", "Email*"];

  return (
    <div className="bg-white w-full px-5">
      <form className="mt-7 flex flex-col gap-3">
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

export default SupportForm;
