import React from 'react';
import { faAngleLeft, faAngleRight, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import './Testtimonial.css'
function SampleNextArrow(props) {
   const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      onClick={onClick}
      style={{ ...style }}
      className={`${className} bg-main text-white font-bold p-1 block rounded-full hover:bg-success hover:text-white`}
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
      className={`${className} bg-main text-white font-bold p-1 block rounded-full hover:bg-success hover:text-white`}
      icon={faAngleLeft}
    />
  );
}
const Testimonial = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow/>
  };
    return (
      <div className=" p-20">
        <div className="pb-10  text-center">
          <h2 className="text-4xl text-main font-[Galada] pb-4">
            <q> শিক্ষার্থী ও অভিভাবকগণ আমাদের সম্পর্কে যা বলেন </q>
          </h2>
          <p>
            পঞ্চম শ্রেণি থেকে দ্বাদশ শ্রেণি পর্যন্ত শিক্ষার্থীদের সারাবছর
            পড়ালেখার এবং অনলাইন কুইজ দেওয়ার কমপ্লিট সল্যুশন
          </p>
        </div>
        <div className="testimonial-carousel max-w-[1080px] mx-auto rounded-xl">
          <div className=" max-w-[1000px] mx-auto">
            <Slider {...settings} className="flex g-x-4 py-6 px-2">
              <div className="p-2 focus:outline-0">
                <section className="text-center md:text-left rounded-md">
                  <div className="flex justify-center">
                    <div className="max-w-xl">
                      <div className="block p-6 rounded-lg shadow-xl bg-white m-4">
                        <div className="md:flex md:flex-row">
                          <div className="md:w-72 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0">
                            <img
                              src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"
                              className="rounded-full shadow-md"
                              alt="woman avatar"
                            />
                          </div>
                          <div className="md:ml-6">
                            <p className="text-gray-600 font-light mb-6">
                              <q>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Id quam sapiente molestiae
                                numquam quas, voluptates omnis nulla ea odio
                                quia similique corrupti magnam.
                              </q>
                            </p>
                            <p className="font-semibold text-xl text-success">
                              Anna Smith
                            </p>
                            <p className=" text-gray-500 ">Product manager</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="p-2 focus:outline-0">
                <section className="text-center md:text-left rounded-md">
                  <div className="flex justify-center">
                    <div className="max-w-xl">
                      <div className="block p-6 rounded-lg shadow-xl bg-white m-4">
                        <div className="md:flex md:flex-row">
                          <div className="md:w-72 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0">
                            <img
                              src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"
                              className="rounded-full shadow-md"
                              alt="woman avatar"
                            />
                          </div>
                          <div className="md:ml-6">
                            <p className="text-gray-600 font-light mb-6">
                              <q>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Id quam sapiente molestiae
                                numquam quas, voluptates omnis nulla ea odio
                                quia similique corrupti magnam.
                              </q>
                            </p>
                            <p className="font-semibold text-xl text-success">
                              Anna Smith
                            </p>
                            <p className=" text-gray-500 ">Product manager</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="p-2 focus:outline-0">
                <section className="text-center md:text-left rounded-md">
                  <div className="flex justify-center">
                    <div className="max-w-xl">
                      <div className="block p-6 rounded-lg shadow-xl bg-white m-4">
                        <div className="md:flex md:flex-row">
                          <div className="md:w-72 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0">
                            <img
                              src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"
                              className="rounded-full shadow-md"
                              alt="woman avatar"
                            />
                          </div>
                          <div className="md:ml-6">
                            <p className="text-gray-600 font-light mb-6">
                              <q>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Id quam sapiente molestiae
                                numquam quas, voluptates omnis nulla ea odio
                                quia similique corrupti magnam.
                              </q>
                            </p>
                            <p className="font-semibold text-xl text-success">
                              Anna Smith
                            </p>
                            <p className=" text-gray-500 ">Product manager</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
};

export default Testimonial;