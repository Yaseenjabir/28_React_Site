import ProductComponent from "./ProductComponent";
import { data1, data2 } from "./assets/data";
const ProductMain = () => {
  return (
    <>
      <section className="bg-[#D8D7D9] py-8">
        <h1 className="text-center text-4xl font-medium">Products</h1>
        <div className="mt-16 px-8 grid md:grid-cols-2 gap-y-16 md:gap-x-7 max-w-[1150px] md:mx-auto md:gap-y-10 lg:grid-cols-3">
          {data1.map((item) => {
            return (
              <>
                <ProductComponent
                  key={item.id}
                  title={item.title}
                  text={item.text}
                  img={item.img}
                />
              </>
            );
          })}
        </div>
        <hr className="mt-10 border border-[#00000013] w-[90%] mx-auto" />
        <div className="mt-16 px-8 grid md:grid-cols-2 gap-y-16 md:gap-x-7 max-w-[1150px] md:mx-auto md:gap-y-10 lg:grid-cols-3">
          {data2.map((item) => {
            return (
              <>
                <ProductComponent
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
    </>
  );
};
export default ProductMain;
