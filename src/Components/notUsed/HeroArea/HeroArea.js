import React, { useState } from 'react';
import { faBus, faGraduationCap, faSchool } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeroArea = () => {
    return (
        <div className=''> 
            {/* <div class="bg-[url('https://mdbootstrap.com/img/new/textures/full/142.jpg')] bg-[50%]"> */}
            <div class=" bg-slate-200">
                {/* <div class="hero-overlay bg-opacity-80 bg-[#0099ff]"></div> */}
                <div class="py-20">
                    <div class=" w-[65%] mx-auto flex flex-col items-center bg-white rounded py-16 gap-y-10">
                        <div className="">
                            <h1 class='text-5xl text-[#0099ff] font-["Caveat_Brush"] uppercase font-bold '>
                                Let's attend a quize with 
                            </h1>                        
                        </div>
                        <div className="flex flex-col lg:flex-row justify-evenly gap-x-10">
                            <div className="w-[200px] flex flex-col justify-center items-center rounded transition hover:cursor-pointer hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-500 border border-black p-4">
                                <FontAwesomeIcon icon={faBus} className='text-5xl' />
                                <h1 className='font-["Caveat_Brush"] font-light text-2xl '>Primary School</h1>
                                
                            </div>
                            <div className="w-[200px] flex flex-col justify-center items-center  rounded transition hover:cursor-pointer hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-500 border border-black p-4">
                                <FontAwesomeIcon icon={faSchool} className='text-5xl'/>
                                <h1 className='font-["Caveat_Brush"]  font-light text-2xl '>Secondary School</h1>
                                
                            </div>
                            <div className="w-[200px] flex flex-col justify-center items-center rounded transition hover:cursor-pointer hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-500 border border-black p-4">
                                <FontAwesomeIcon icon={faGraduationCap} className='text-5xl' />
                                <h1 className='font-["Caveat_Brush"] font-light text-2xl'>intermediate</h1>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="relative overflow-hidden bg-no-repeat bg-cover flex justify-center h-[70vh] bg-[url('https://mdbootstrap.com/img/new/textures/full/142.jpg')] bg-[50%]">                
                <h1 class='bg-opacity-70 bg-[#092bd6] px-12 lg:px-0 text-center text-5xl md:text-6xl xl:text-7xl text-white font-["Caveat_Brush"] uppercase md:text-6xl xl:text-7xl font-bold '>Develop your skills with <span class="text-primary">Skill up</span></h1>
            </div>*/}
{/* 
            <div class="container mx-auto px-6 md:px-12 xl:px-32">
                <div class="text-center text-gray-800">
                    <div class="block rounded-lg backdrop-blur-xl shadow-lg px-6 py-10" style={{ "background": "hsla(0, 0%, 100%, 0.7)"}}>
                        <h1 class="text-3xl font-['Caveat_Brush'] text-gray-700 mb-6 ">Primary and Advanched Courses</h1>                        
                    </div>
                </div>
            </div>  */}
            {/* <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">The best offer on the market <br /><span class="text-blue-600">for your business</span></h1>
            <a class="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
            <a class="inline-block px-7 py-3 text-white font-medium text-sm leading-snug bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a> */}
        </div>
    );
};

export default HeroArea;