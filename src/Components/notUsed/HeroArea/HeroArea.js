import React from 'react';
import { faBus, faGraduationCap, faSchool } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeroArea = () => {
    return (
        <div className=''> 
            <div className=" bg-slate-200">              
                <div className="py-20">
                    <div className=" w-[65%] mx-auto flex flex-col items-center bg-white rounded py-16 gap-y-10">
                        <div className="">
                            <h1 className='text-5xl text-[#0099ff] font-["Caveat_Brush"] uppercase font-bold '>
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
            
        </div>
    );
};

export default HeroArea;