import React, { useState } from 'react';
import "./CarriculumPrograms.css"

const CarriculumPrograms = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/images/program10.jpg",
    "/images/program3.jpg",
    "/images/program5.jpg",
    "/images/program2.jpg",
    "/images/program6.jpg",
    "/images/program4.jpg",
  ];
  
  const data = [
    {
      id: "1",
      title: "লাইভ MCQ টেস্ট",
    },
    {
      id: "2",
      title: "এডমিশন টেস্ট",
    },

    {
      id: "3",
      title: "অনলাইন রেকর্ডেড ক্লাস",
    },
    {
      id: "4",
      title: "লাইভ ক্লাস",
    },
    {
      id: "5",
      title: "পরীক্ষা প্রস্তুতির ক্লাস",
    },
    {
      id: "6",
      title: "পরীক্ষা প্রস্তুতি টেস্ট",
    },
  ];

  return (
    <div className="curriculum_section h-[100vh] flex items-center justify-center">
      <div className="">
        <div className="md:max-w-[800px] mx-auto lg:px-20 xl:py-6 rounded-lg text-center">
          <h1 className=" px-2 text-xl lg:text-3xl xl:text-4xl 2xl:text-6xl md:leading-[75px] text-main font-[Galada]">
            নিজেকে পূর্ণাঙ্গ ভাবে প্রস্তুত এবং যাচাই করার জন্য আমাদের যে সকল
            প্রোগ্রাম রয়েছে
          </h1>
        </div>
        <div className="hero">
          <div className="hero-content shadow-[#020240] max-w-[1320px] rounded-lg flex-col lg:flex-row gap-x-14 items-center">
            <div className="">
              <img
                className="w-[358px] h-[290px] mx-auto lg:w-[470px] lg:h-[410px] xl:w-[610px] xl:h-[460px] rounded-2xl "
                src={images[currentImage]}
                alt=""
              />
            </div>
            <div className="grid grid-cols-2 lg:flex lg:flex-col gap-3 text-start">
              {data?.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className="lg:w-[300px] xl:w-[350px] flex items-center rounded-lg bg-main text-white p-1 py-2 lg:px-6 xl:px-10 lg:py-2 xl:py-[14px] 
                    transition
                    duration-[400ms]
                    focus:duration-[100ms]
                    ease-in-out
                    hover:bg-main
                    hover:cursor-pointer
                    hover:translate-x-2
                    focus:translate-x-2
                    focus:bg-white
                    focus:text-main
                    focus:border-main
                    focus:border-2
                    focus:outline-none"
                  >
                    <img
                      className="w-[25px]"
                      src="https://cdn.apito.io/media/shikho_website_v2_8ma77/shikhoHomepageV3/13SX02ME9W_live_class.svg"
                      alt=""
                    />
                    <p className="ml-1 lg:ml-4 text-[14px] lg:text-lg">
                      {item.title}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarriculumPrograms;