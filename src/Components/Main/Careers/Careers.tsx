import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";

const Careers: React.FC = () => {
  return (
    <>
      <section className="bg-[#e2e1e3] py-20 px-7">
        <h1 className="text-3xl max-w-[1030px] mx-auto">Careers</h1>
        <div className="flex flex-col lg:flex-row lg:gap-4 max-w-[1030px] mx-auto">
          <Section1 />
          <Section2 />
        </div>
      </section>
    </>
  );
};

export default Careers;
