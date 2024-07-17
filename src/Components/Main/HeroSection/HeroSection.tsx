const HeroSection = () => {
  return (
    <>
      <section
        id="heroSection"
        className="h-screen w-full flex flex-col-reverse text-end px-7 xl:px-20"
      >
        <div className="mb-8 z-10 w-full flex flex-col items-end md:mb-12 lg:mb-16 border">
          <h1 className="text-black max-w-[800px] px-2 font-semibold leading-[50px] lg:text-6xl xl:text-7xl text-4xl">
            Brandz Management Consultancy
          </h1>
          <p className="text-[25px] px-2 max-w-[1020px] lg:text-[29px]">
            Connecting you to the world Fast and reliable telecommunications
            services for your business needs
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
