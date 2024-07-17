import ServiceComponent from "./ServiceComponent";
import data from "./assets/data";
const ServicesMain = () => {
  return (
    <section className="py-10">
      <h1 className="text-center font-medium text-4xl">Services</h1>
      <div className="md:grid md:grid-cols-2 items-center md:gap-x-11 px-8 lg:grid-cols-4">
        {data.map((item) => {
          return (
            <>
              <ServiceComponent
                key={item.id}
                title={item.title}
                text={item.text}
                img={item.img}
              />
            </>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesMain;
