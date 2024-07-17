import React, { useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { TiAttachment } from "react-icons/ti";

const Resume: React.FC = () => {
  const InputRef = useRef<any>(null);

  const [attachments, setAttachments] = useState<number | undefined>(0);
  const [filename, setFilename] = useState<string>();
  const [filesize, setFilesize] = useState<string>();
  const [className, setClassname] = useState<string>("hidden");

  const handleInput = (): void => {
    InputRef.current.click();
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.files?.[0].name);
    const fileLength = e.target.files?.length!;
    const fileName = e.target.files?.[0].name;
    const fileSizeBytes = e.target.files?.[0].size;
    const fileSizeKB = fileSizeBytes
      ? (fileSizeBytes / 1024).toFixed(2)
      : "0.00";
    if (fileLength > 0) {
      setClassname("block");
    }

    setFilename(fileName);
    setFilesize(fileSizeKB);
    setAttachments(fileLength);
  };

  const handleDelete = (): void => {
    setClassname("hidden");
    setFilename("");
    setFilesize("");
    setAttachments(0);
  };

  return (
    <>
      <div className="">
        <div className="flex justify-between">
          <div className="flex relative justify-center gap-1 items-center">
            <TiAttachment
              onClick={handleInput}
              className="text-xl cursor-pointer"
            />
            <p onClick={handleInput} className="font-medium cursor-pointer">
              Attach Resume
            </p>
            <input
              onChange={handleOnChange}
              type="file"
              className="hidden"
              ref={InputRef}
            />
          </div>
          <p className="text-[13px] flex self-center">
            Attachments({attachments})
          </p>
        </div>

        <div className={`bg-gray-300 mt-5 px-4 py-5 ${className} `}>
          <div className="flex items-center">
            <p className="flex-1">
              {filename} {`${filesize} KB`}
            </p>
            <RxCross1 onClick={handleDelete} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
