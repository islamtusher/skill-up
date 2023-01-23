import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const About = () => {
    return (
      <div className="lg:max-w-[1000px] xl:max-w-[1320px] mx-auto mt-16 ">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse font-[jost] gap-x-10">
            <div className="lg:w-[40%] xl:w-[50%] ">
              <h3 className="lg:text-2xl xl:text-3xl font-bold mb-4">
                আমাদের প্লাটফর্ম কেন জনপ্রিয়
                <hr className="w-[20%] mt-4 border-primary" />
              </h3>
              <p>
                <span className="">Lorem ipsum </span>
                dolor sit amet consectetur adipisicing elit. Odio perspiciatis
                consequuntur facilis, commodi enim eum, sunt quibusdam porro
                officiis provident minus distinctio incidunt repudiandae fugit
                sit ipsum. Magni, quod consectetur! dolor sit amet consectetur
                adipisicing elit.
              </p>
              <p className="mt-2">
                <span className="">Lorem ipsum</span>
                dolor sit amet consectetur adipisicing elit. Odio perspiciatis
                consequuntur facilis, commodi enim eum, sunt quibusdam porro
                officiis provident minus.
              </p>
            </div>

            <div className="lg:w-[60%] xl:w-[50%] lg:text-left bg-[#131b23] text-white lg:p-10 p-4">
              <h3 className="lg:text-2xl xl:text-3xl text-success font-bold mb-8">
                শেখার এবং নির্দেশনার জন্য শীর্ষস্থানীয় বিশ্বব্যাপী প্লাটফর্ম
                <hr className="w-[20%] mt-4 border-primary" />
              </h3>
              <p className="my-1 text-zinc-200 xl:text-[18px] lg:text-[15px]">
                <span className="font-bold lg:text-sm xl:text-md text-white">
                  অনলাইন কোর্স -
                </span>{" "}
                Dolor sit amet consectetur adipisicing elit. Odio perspiciatis
                consequuntur facilis, commodi enim eum, sunt quibusdam porro
                officiis provident minus distinctio incidunt.
              </p>
              <p className="my-1 text-zinc-200 xl:text-[18px] lg:text-[15px]">
                <span className="font-bold lg:text-sm xl:text-md text-white">
                  অনলাইন MCQ -
                </span>{" "}
                Dolor sit amet consectetur adipisicing elit. Odio perspiciatis
                consequuntur facilis, commodi enim eum, sunt quibusdam porro
                officiis provident.
              </p>
              <p className="my-1 text-zinc-200 xl:text-[18px] lg:text-[15px]">
                <span className="font-bold lg:text-sm xl:text-md text-white">
                  অনলাইন সার্টিফিকেশন -
                </span>{" "}
                Dolor sit amet consectetur adipisicing elit. Odio perspiciatis
                consequuntur facilis, commodi enim eum, sunt quibusdam porro
                officiis provident minus distinctio.
              </p>

              <p className="w-[120px] font-[jost] flex items-center justify-between mt-4 border-b-2 border-zinc-500 hover:text-primary hover:border-primary hover:cursor-pointer transition ease-in-out duration-300">
                <span className="text-lg tracking-[2px]">আরো জানো</span>
                <FontAwesomeIcon
                  className=" text-sm mt-1"
                  icon={faArrowRightLong}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;