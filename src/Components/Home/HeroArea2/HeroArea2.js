import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "./HeroArea2.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

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
    nextArrow: false,
    prevArrow: false,
  };
  return (
    <div>
      <div className="hero hero-area relative min-h-screen">
        <div className="hero-content flex flex-col lg:flex-row gap-x-14 gap-y-14 pt-12">
          <div className="max-w-lg text-center lg:text-start">
            <h1 className="font-[Galada] text-4xl leading-loose md:text-6xl md:leading-[75px] text-white ">
              বছর জুড়ে স্কিল ডেভেলপমেন্ট এবং অনলাইন কুইজ প্লাটফর্ম
            </h1>
            <p className="mb-8 mt-3 text-lg text-white">
              পঞ্চম শ্রেণি থেকে দ্বাদশ শ্রেণি পর্যন্ত শিক্ষার্থীদের সারাবছর
              <br />
              পড়ালেখার এবং অনলাইন কুইজ দেওয়ার কমপ্লিট সল্যুশন
            </p>
            <div className="flex gap-x-6">
              <Link
                to="/mcq"
                className="btn bg-success border-0 text-lg tracking-wider hover:bg-white hover:text-success transition duration-[300ms] ease-in-out"
              >
                কুইজ শুরু করো
              </Link>
              <Link
                to=""
                className="btn bg-success border-0 text-lg tracking-wider hover:bg-white hover:text-success transition duration-[300ms] ease-in-out"
              >
                স্কিল ডেভেলপমেন্ট করো
              </Link>
            </div>
          </div>
          <div className="">            
            <Slider {...settings} className="w-[500px]">
              <div className="focus:outline-0">
                <img
                  className=" w-[800px]"
                  src="../images/hero_banner7.png"
                  alt=""
                />
                
              </div>
              <div className="focus:outline-0">
                <img
                  className="w-[800px] "
                  src="../images/hero_banner5.png"
                  alt=""
                />
              </div>
              <div className="focus:outline-0">
                <img
                  className=" w-[800px] "
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
