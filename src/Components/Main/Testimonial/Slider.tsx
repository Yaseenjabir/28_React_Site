import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating1 from "./StarsRating/Rating1";
import Rating2 from "./StarsRating/Rating2";
import Rating3 from "./StarsRating/Rating3";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";
import data from "./assets/data";
import { DataType } from "./assets/data";
function CustomSlide({ text, title, dropdown, rating }: DataType) {
  const [transalte, setTranslate] = useState<string>("translate-y-[120%]");

  return (
    <div className="relative flex h-[500px] w-[95%] mx-auto bg-white items-center flex-col py-5">
      <span className="w-[100px] pb-3 text-[#CBCBCB] font-light text-[60px] h-[100px] bg-[#F0F0F0CC] flex items-center justify-center rounded-full">
        o
      </span>
      {rating == "full" ? (
        <Rating1 />
      ) : rating == "minus1" ? (
        <Rating2 />
      ) : (
        <Rating3 />
      )}

      <div className="mt-8">
        <h1 className="text-center text-xl">{title}</h1>
        <p className="text-center px-10 text-lg leading-6 mt-7">{text}</p>
        <button
          onClick={() => setTranslate("translate-y-[0%]")}
          className="w-full mt-3 text-gray-700"
        >
          View More
        </button>
      </div>
      <p className="mt-8 text-sm font-semibold text-gray-600">Our Client</p>
      <div
        className={`absolute top-0 left-0 w-full h-full bg-gray-300 ${transalte} transition-all ease-in-out duration-300`}
      >
        <p className="text-center text-black font-medium text-md mt-12 px-5">
          {dropdown}
        </p>
        <RxCross1
          onClick={() => setTranslate("translate-y-[120%]")}
          className="absolute top-4 right-4 text-xl cursor-pointer"
        />
      </div>
    </div>
  );
}

function MySlider() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let slidesToShow: number;
  let arrows = true;
  let dots = true;
  if (windowWidth > 1200) {
    slidesToShow = 3;
    arrows = false;
    dots = false;
  } else if (windowWidth > 900) {
    slidesToShow = 2;
  } else {
    slidesToShow = 1;
  }
  const settings = {
    dots,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows,
  };

  return (
    <div className="w-[70%] mx-auto">
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <>
              <CustomSlide
                key={item.id}
                title={item.title}
                text={item.text}
                rating={item.rating}
                dropdown={item.dropdown}
              />
            </>
          );
        })}
      </Slider>
    </div>
  );
}

export default MySlider;
