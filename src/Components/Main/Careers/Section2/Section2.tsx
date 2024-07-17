import Button from "./Button";
import InputElement from "./InputElement";
import Resume from "./Resume";
import Textarea from "./Textarea";

const Section2: React.FC = () => {
  const fieldNames: string[] = ["Name", "Phone", "Email*"];

  return (
    <div className="border-red-500 lg:pt-14">
      <h1 className="text-2xl font-medium">Apply Now</h1>
      <form className="mt-8 flex flex-col gap-7">
        {fieldNames.map((item, index) => (
          <InputElement key={index} data={item} />
        ))}
        <Textarea />
        <Resume />
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

export default Section2;
