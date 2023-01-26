import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "./HeroArea2.css";

const HeroArea2 = () => {
  const navigate = useNavigate()

  const settings = {
    dots: false,
    autoplay: true,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow: <></>,
    prevArrow: <></>,
  };
  return (
    <div>
      <div className="hero hero-area relative min-h-screen">
        <div className="hero-content flex flex-col-reverse lg:flex-row gap-x-20 gap-y-4 lg:gap-y-14 pt-12">
          <div className="max-w-lg text-center lg:text-start">
            <h1 className="font-[Galada] leading-loose text-3xl lg:text-5xl xl:text-6xl 2xl:text-6xl leading-[40px] lg:leading-[60px] xl:leading-[70px] text-white ">
              {/* বছর জুড়ে */}
              স্কিল ডেভেলপমেন্ট এবং <br /> অনলাইন কুইজ প্লাটফর্ম
            </h1>
            <p className="mb-8 mt-3 text-[15px] lg:text-sm xl:text-lg text-white">
              পঞ্চম শ্রেণি থেকে দ্বাদশ শ্রেণি পর্যন্ত শিক্ষার্থীদের পড়ালেখার
              <br />
              এবং অনলাইন কুইজ দেওয়ার কমপ্লিট সল্যুশন
            </p>
            <div className="flex gap-x-6">
              <Link
                to="/mcq"
                className="btn bg-main font-[Galada] font-thin shadow-2xl lg:text-[16px] xl:text-lg tracking-wider hover:bg-white hover:text-main transition duration-[300ms] ease-in-out"
              >
                কুইজ শুরু করো
              </Link>
              <Link
                to=""
                className="btn bg-main font-[Galada] font-thin shadow-2xl lg:text-[16px] xl:text-lg tracking-wider hover:bg-white hover:text-main transition duration-[300ms] ease-in-out"
              >
                স্কিল ডেভেলপমেন্ট করো
              </Link>
            </div>
          </div>
          <div className="">
            <Slider
              {...settings}
              className="w-[300px] lg:w-[450px] xl:w-[500px]"
            >
              <div className="focus:outline-0">
                <img
                  className=" lg:w-[450px] xl:w-[800px]"
                  src="../images/hero_banner7.png"
                  alt=""
                />
              </div>
              <div className="focus:outline-0">
                <img
                  className="  lg:w-[450px] xl:w-[800px] "
                  src="../images/hero_banner5.png"
                  alt=""
                />
              </div>
              <div className="focus:outline-0">
                <img
                  className="  lg:w-[450px] xl:w-[800px] "
                  src="../images/hero_banner4.png"
                  alt=""
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea2;
