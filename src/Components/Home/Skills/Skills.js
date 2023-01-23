import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Skills.css';

const Skills = () => {
  return (
    <div className=" quiz-background">
      <div className="hero min-h-screen lg:max-w-[1000px] xl:max-w-[1320px] mx-auto">
        <div className="hero-content flex flex-col lg:flex-row items-start justify-between gap-y-20">
          <div className="lg:w-[50%] flex flex-col gap-y-2">
            <h1 className="font-[Galada] lg:text-4xl xl:text-5xl 2xl:text-6xl ">
              দারুণ সব <span className="text-success"> স্কিলস </span>
              ডেভেলপমেন্ট করার জন্য রয়েছে অ্যানলিমেটেড ভিডিও
            </h1>
            <p className="font-[Jost] my-3 lg:text-sm xl:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing
              elit amet consectetur adipisicing elit
            </p>
            <div className="">
              <button className="btn bg-main font-[Galada] border-0 font-thin shadow-2xl lg:text-[16px] xl:text-lg tracking-wider hover:bg-white hover:text-main transition duration-[300ms] ease-in-out">
                সকল কোর্স সমূহ
              </button>
            </div>
          </div>
          <div className="lg:w-[50%] font-[jost] ">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="rounded-lg bg-white lg:w-[300px] flex flex-col items-center  gap-y-2 transition hover:cursor-pointer hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-500 shadow-xl ">
                <img className="rounded-t-lg" src="../images/c6-8.png" alt="" />
                <div className="text-center p-2">
                  <h1 className=" text-lg  font-bold">
                    Class 6th to 8th All Subjects
                  </h1>
                  <p className=" leading-5 text-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Minima modi culpa inventore, dolores,{" "}
                  </p>
                  <p className="w-[140px] mx-auto font-[jost] flex items-center justify-between border-b-2 border-zinc-500 hover:text-zinc-500 hover:border-primary hover:cursor-pointer transition ease-in-out duration-300">
                    <span className="text-lg tracking-[2px]">Learn More</span>
                    <FontAwesomeIcon
                      className=" text-sm mt-1"
                      icon={faArrowRightLong}
                    />
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-white lg:w-[300px] flex flex-col items-center  gap-y-2 transition hover:cursor-pointer hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-500 shadow-xl ">
                <img
                  className="rounded-t-lg"
                  src="../images/c9-10.png"
                  alt=""
                />
                <div className="text-center p-2 pb-4">
                  <h1 className="  text-lg font-bold">
                    Class 9th to 10th All Subjects
                  </h1>
                  <p className="leading-5 text-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Minima modi culpa inventore, dolores,{" "}
                  </p>
                  <p className="w-[140px] mx-auto font-[jost] flex items-center justify-between  border-b-2 border-zinc-500 hover:text-zinc-500 hover:border-primary hover:cursor-pointer transition ease-in-out duration-300">
                    <span className="text-lg tracking-[2px]">Learn More</span>
                    <FontAwesomeIcon
                      className=" text-sm mt-1"
                      icon={faArrowRightLong}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
