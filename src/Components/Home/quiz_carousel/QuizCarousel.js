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
      className={`${className} text-[3px] text-main font-bold p-1 block rounded-full hover:bg-main hover:text-white`}
      icon={faAngleRight}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      onClick={onClick}
      style={{ ...style }}
      className={`${className}  text-[3px] text-main font-bold p-1 block rounded-full hover:bg-main hover:text-white`}
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
    autoplaySpeed: 2500,
    pauseOnHover: true,
    initialSlide: 0,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          prevArrow: <></>,
          nextArrow: <></>,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
          prevArrow: <></>,
          nextArrow: <></>,
        },
      },
      {
        breakpoint: 374,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          prevArrow: <></>,
          nextArrow: <></>,
        },
      },
    ],
  };
  return (
    <div className=" quiz-carousel pt-20 px-2 lg:p-20 lg:pb-10">
      <div className="lg:pb-4 xl:pb-10 text-center">
        <h2 className="text-xl lg:text-3xl xl:text-4xl 2xl:text-6xl md:leading-[75px] text-main font-[Galada] lg:pb-2 xl:pb-2">
          মাধ্যমিক ও উচ্চমাধ্যমিকের সকল শ্রেণির কুইজ প্রস্তুতি
        </h2>
        <p className="mt-2 mb-4 lg:text-sm xl:text-lg">
          পঞ্চম শ্রেণি থেকে দ্বাদশ শ্রেণি পর্যন্ত শিক্ষার্থীদের সারাবছর পড়ালেখার
          এবং <br /> অনলাইন কুইজ দেওয়ার কমপ্লিট সল্যুশন
        </p>
      </div>
      {/*  */}
      {/*  */}
      <div className=" lg:max-w-[820px] xl:max-w-[1080px] mx-auto rounded-xl">
        <div className=" lg:max-w-[800px] xl:max-w-[1000px] mx-auto">
          <Slider {...settings} className="lg:py-4 ">
            <div className="md:p-2 focus:outline-0">
              <img
                className=" rounded-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:cursor-pointer hover:scale-105 "
                src="../images/quiz_banner/cls5_bng_bnr.png"
                alt=""
              />
            </div>
            <div className="md:p-2 focus:outline-0">
              <img
                className="rounded-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:cursor-pointer hover:scale-105"
                src="../images/quiz_banner/cls6_meth_bnr.png"
                alt=""
              />
            </div>
            <div className="md:p-2  focus:outline-0">
              <img
                className="rounded-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:cursor-pointer hover:scale-105 "
                src="../images/quiz_banner/cls7_meth_bnr.png"
                alt=""
              />
            </div>
            <div className="md:p-2 focus:outline-0">
              <img
                className="rounded-lg  transition duration-300 ease-in-out hover:-translate-y-1 hover:cursor-pointer hover:scale-105 "
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
