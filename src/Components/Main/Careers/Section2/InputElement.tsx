import React, { useRef, useState } from "react";

interface DataType {
  data: string;
}

const InputElement: React.FC<DataType> = ({ data }) => {
  const InputRef = useRef<any>();

  const [baseClass, setBaseClass] = useState<string>(
    "top-[18px] left-3 text-base"
  );

  const [hover, setHover] = useState<string>("");

  const handleOnFocus = (): void => {
    setBaseClass("top-[4px] left-2 text-[12px]");
  };

  const handleOnBlur = (): void => {
    if (InputRef.current?.value) return;
    else {
      setBaseClass("top-[18px] left-3 text-base");
    }
  };
  return (
    <div className="relative">
      <input
        required
        className={`w-full bg-transparent border-b border-black outline-none  py-5 px-2 hover:bg-gray-300 ${hover}`}
        type="text"
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        ref={InputRef}
      />
      <h1
        onMouseEnter={() => {
          setHover("bg-gray-300");
        }}
        onMouseLeave={() => {
          setHover("");
        }}
        className={`select-none cursor-text transform ease-in-out duration-150 absolute ${baseClass}`}
      >
        {data}
      </h1>
    </div>
  );
};

export default InputElement;
