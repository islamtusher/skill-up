import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const About = () => {
    return (
      <div className="lg:max-w-[1000px] xl:max-w-[1320px] mx-auto mt-16 ">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse font-[jost] gap-x-10">
            <div className="lg:w-[40%] xl:w-[50%] ">
              <h3 className="text-main lg:text-2xl xl:text-3xl font-bold mb-4 tracking-[1px]">
                আমাদের প্লাটফর্ম কেন গুরুত্বপূর্ণ
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
                শেখার এবং নির্দেশনার জন্য শীর্ষস্থানীয় প্লাটফর্ম
                <hr className="w-[20%] mt-4 border-primary" />
              </h3>
              <p className="my-1 text-zinc-200 xl:text-[18px] lg:text-[15px]">
                <span className="font-bold lg:text-sm xl:text-[18px] text-white">
                  অনলাইন কোর্স -
                </span>{" "}
                আমাদের প্ল্যাটফর্মে রয়েছে একাডেমিকে এবং প্রফেশনাল স্কিকেলস সমূহ
                ডেভেলপমেন্ট করার জন্য লাইভ এবং রেকর্ডেড ভিডিও, আমাদের লাইভ ক্লাস
                গুল সম্পাদন করার জন্য রয়েছে অভিজ্ঞ শিক্ষক গন
              </p>
              <p className="my-2 text-zinc-200 xl:text-[18px] lg:text-[15px]">
                <span className="font-bold lg:text-sm xl:text-[18px] text-white">
                  অনলাইন MCQ -
                </span>{" "}
                নিজেদের মেধা যাচাই করার জন্য আমাদের রয়েছে সকল বিষয় এর উপর অনলাইন
                MCQ টেস্ট দেওয়ার মাধ্যম, MCQ এর প্রশ্ন এবং সঠিক উত্তর নির্বাচন
                করার জন্য রয়েছে অভিজ্ঞ শিক্ষক গন
              </p>
              <p className="my-1 text-zinc-200 xl:text-[18px] lg:text-[15px]">
                <span className="font-bold lg:text-sm xl:text-[18px] text-white">
                  অভিজ্ঞ শিক্ষক গন -
                </span>{" "}
                Dolor sit amet consectetur adipisicing elit. Odio perspiciatis
                consequuntur facilis, commodi enim eum, sunt quibusdam porro
                officiis provident minus distinctio.
              </p>

              <p className="w-[100px] xl:w-[120px] font-[jost] flex items-center justify-between mt-4 border-b-2 border-zinc-500 hover:text-success hover:border-success hover:cursor-pointer transition ease-in-out duration-300">
                <span className="text-sm lg:text-md xl:text-lg tracking-[2px]">
                  আরো জানো
                </span>
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