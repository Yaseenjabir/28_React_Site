import React from "react";

const Section2: React.FC = () => {
  return (
    <>
      <div className="text-center">
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-medium tracking-widest ">
            Better yet, see us in person!
          </h1>
          <p className="font-medium">
            Feel free to visit during normal business hours.
          </p>
        </div>
        <div className="flex flex-col gap-5 mt-10">
          <h1 className="text-xl font-medium tracking-widest ">
            Brandz Management Consultancy
          </h1>
          <p className="font-medium">
            Office 501 Court Building 5th Floor Oudh Metha, Dubai UAE.
          </p>
        </div>
        <div className="mt-5">
          <h1 className="text-gray-600 cursor-pointer hover:text-gray-500">
            hr@bmctelecom.ae
          </h1>
          <p>(Careers)</p>
        </div>
        <div className="mt-5">
          <h1 className="text-gray-600 cursor-pointer hover:text-gray-500">
            marketing@bmctelecom.ae
          </h1>
          <p>(Subscription)</p>
        </div>
        <div className="mt-10">
          <h1 className="text-2xl font-medium">Hours</h1>
          <p className="flex gap-5 justify-center mt-5 font-medium">
            <span>Mon - Sat</span>
            <span>9:00am - 6:00pm</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Section2;
