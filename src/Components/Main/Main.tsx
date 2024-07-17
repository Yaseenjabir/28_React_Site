import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import TextSlider from "./TextSlider/TextSlider";
import AuthorizedMain from "./AuthorizedChannel/AuthorizedMain";
import ServicesMain from "./Services/ServicesMain";
import ProductMain from "./Products/ProductsMain";
import Testimonial from "./Testimonial/Testimonial";
import Careers from "./Careers/Careers";
import Contact from "./Contact/Contact";
import GoogleMap from "./Map/Map";
import Newsletter from "./Newsletter/Newletter";

const Main: React.FC = () => {
  return (
    <>
      <main>
        <HeroSection />
        <TextSlider />
        <AuthorizedMain />
        <ServicesMain />
        <ProductMain />
        <Testimonial />
        <Careers />
        <Contact />
        <GoogleMap />
        <Newsletter />
      </main>
    </>
  );
};

export default Main;
