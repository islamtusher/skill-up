import React, { useState } from 'react';
import "./CarriculumPrograms.css"

const CarriculumPrograms = () => {
  const [currentImage, setCurrentImage] = useState(0);
  // const images = [
  //   "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/q_auto/f_auto/c_scale,w_841/v1670221272/Shikho%20Website%20V3/Homepage/Feature%20Image%20Carousel/Website_Banner_%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%95%E0%A6%9F%E0%A6%BF%E0%A6%B8_MCQ_%E0%A6%9F%E0%A7%87%E0%A6%B8%E0%A7%8D%E0%A6%9F_841x656_gt6s6z",
  //   "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/q_auto/f_auto/c_scale,w_841/v1671090148/Shikho%20Website%20V3/Homepage/Feature%20Image%20Carousel/Website_Banner_Live_class_841x656_1_yvfkbu",
  //   "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/q_auto/f_auto/c_scale,w_841/v1671090186/Shikho%20Website%20V3/Homepage/Feature%20Image%20Carousel/Website_Banner_Animeted_Video_841x656_qgv12n",
  //   "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/q_auto/f_auto/c_scale,w_841/v1670221271/Shikho%20Website%20V3/Homepage/Feature%20Image%20Carousel/Website_Banner_Live_Exam_841x656_om8gg0",
  //   "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/q_auto/f_auto/c_scale,w_841/v1670924728/Shikho%20Website%20V3/Homepage/Feature%20Image%20Carousel/Website_Banner_Class_Note_841x656_ksbwoy",
  //   "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/q_auto/f_auto/c_scale,w_841/v1670221271/Shikho%20Website%20V3/Homepage/Feature%20Image%20Carousel/Website_Banner_Smart_Note_841x656_ijvm1o",
  //   "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/q_auto/f_auto/c_scale,w_841/v1670221271/Shikho%20Website%20V3/Homepage/Feature%20Image%20Carousel/Website_Banner_Report_Card_841x656_weoyb8",
  // ];
  const images = [
    // "https://i.ibb.co/DMhLqH8/exam-pre.jpg",
    "/images/program10.jpg",
    "/images/program3.jpg",
    "/images/program5.jpg",
    "/images/program2.jpg",

    "/images/program6.jpg",
    "/images/program4.jpg",
    // "https://i.ibb.co/Y0N3CRL/animated-video.jpg",
    // "https://i.ibb.co/jwVG72B/recorded-video.jpg",
    // "https://i.ibb.co/JK7bTLR/live-class.jpg",
    // "https://i.ibb.co/mG8FR1G/22343631-Content-creator-editing-video-footage-in-studio.jpg",
    // "https://i.ibb.co/0ZjWFy3/online-test.jpg",
    // "https://i.ibb.co/DMhLqH8/exam-pre.jpg",
  ];
  
  const data = [
    {
      id: "1",
      title: "লাইভ MCQ টেস্ট",
    },
    {
      id: "2",
      title: "লাইভ ক্লাস",
    },
    {
      id: "3",
      title: "অনলাইন রেকর্ডেড ক্লাস",
    },
    {
      id: "4",
      title: "এডমিশন টেস্ট",
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
    <div className="carriculum_section lg:pt-16 xl:pt-8 flex items-center justify-center">
      <div className="">
        <div className="md:max-w-[800px] mx-auto lg:px-20 xl:py-6 rounded-lg text-center">
          <h1 className=" px-2 text-xl lg:text-3xl xl:text-4xl 2xl:text-6xl md:leading-[75px] text-main font-[Galada]">
            নিজেকে পূর্ণাঙ্গ ভাবে প্রস্তুত এবং যাচাই করার জন্য আমাদের যে সকল
            প্রোগ্রাম রয়েছে
          </h1>
        </div>
        <div className="hero">
          <div className="hero-content shadow-[#020240] max-w-[1320px] rounded-lg flex-col lg:flex-row gap-x-14 px-0 items-center">
            <div className="">
              <img
                className="w-[] h-full mx-auto lg:w-[470px] lg:h-[410px] xl:w-[610px] xl:h-[460px] rounded-lg "
                src={images[currentImage]}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-y-3 text-start ">
              {data?.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className="lg:w-[300px] xl:w-[350px] flex items-center rounded-lg bg-success text-white lg:px-6 xl:px-10 lg:py-2 xl:py-[12px] 
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
                      // className='lg:w-[500px]'
                      src="https://cdn.apito.io/media/shikho_website_v2_8ma77/shikhoHomepageV3/13SX02ME9W_live_class.svg"
                      alt=""
                    />
                    <p className="ml-4 font-bold text-lg">{item.title}</p>
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