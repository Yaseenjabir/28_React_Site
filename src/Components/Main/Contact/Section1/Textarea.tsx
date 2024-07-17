import React from "react";

const Textarea: React.FC = () => {
  return (
    <>
      <textarea
        rows={5}
        placeholder="Message"
        className="outline-none px-2 bg-transparent border-b border-black hover:bg-white py-2"
      ></textarea>
    </>
  );
};

export default Textarea;
