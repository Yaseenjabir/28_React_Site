import React from "react";
import AuthorizedComponent from "./AuthorizedComponent";
import data from "./assets/componentData";
import { IoMdStarOutline } from "react-icons/io";
const AuthorizedMain: React.FC = () => {
  return (
    <>
      <section className="bg-[#E2E1E3] py-10">
        <h1 className="text-center text-3xl px-10 leading-relaxed">
          A proud authorized channel partner of Du Telecom
        </h1>
        <div className="border">
          <IoMdStarOutline />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 max-w-[1160px] mx-auto">
          {data.map((item) => {
            return (
              <>
                <AuthorizedComponent
                  key={item.id}
                  title={item.title}
                  text={item.text}
                  img={item.img}
                  id={item.id}
                />
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AuthorizedMain;
