import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Slider from "react-slick";
import "./QuizCarousel.css"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      onClick={onClick}
      style={{ ...style }}
      className={`${className} bg-main text-white font-bold p-1 block rounded-full hover:bg-main hover:text-white`}
      icon={faAngleRight}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      onClick={onClick}
      style={{...style }}
      className={`${className} bg-main text-white font-bold p-1 block rounded-full hover:bg-main hover:text-white`}
      icon={faAngleLeft}
    />
  );
}
const QuizCarousel = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow/>
  };
  return (
    <div className=" quiz-carousel p-20 pb-10">
      <div className="pb-10  text-center">
        <h2 className="text-4xl text-main font-[Galada] pb-4">
          মাধ্যমিক ও উচ্চমাধ্যমিকের সকল শ্রেণির কুইজ প্রস্তুতি
        </h2>
        <p className="text-xl">
          পঞ্চম শ্রেণি থেকে দ্বাদশ শ্রেণি পর্যন্ত শিক্ষার্থীদের সারাবছর পড়ালেখার
          এবং <br /> অনলাইন কুইজ দেওয়ার কমপ্লিট সল্যুশন
        </p>
      </div>
      <div className="section_backgraound max-w-[1080px] mx-auto rounded-xl">
        <div className=" max-w-[1000px] mx-auto">
          <Slider {...settings} className="flex g-x-4 py-4 px-2">
            <div className="p-2 focus:outline-0">
              <img
                className="focus:border-0 focus:outline-0 rounded-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:cursor-pointer hover:scale-105 "
                src="../images/quiz_banner/cls5_bng_bnr.png"
                alt=""
              />
            </div>
            <div className="p-2  focus:outline-0">
              <img
                className=" rounded-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:cursor-pointer hover:scale-105"
                src="../images/quiz_banner/cls6_meth_bnr.png"
                alt=""
              />
            </div>
            <div className="p-2  focus:outline-0">
              <img
                className=" rounded-lg  transition duration-300 ease-in-out hover:-translate-y-1 hover:cursor-pointer hover:scale-105 "
                src="../images/quiz_banner/cls7_meth_bnr.png"
                alt=""
              />
            </div>
            <div className="p-2 focus:outline-0">
              <img
                className=" rounded-lg  transition duration-300 ease-in-out hover:-translate-y-1 hover:cursor-pointer hover:scale-105 "
                src="../images/quiz_banner/cls6_meth_bnr.png"
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default QuizCarousel;
