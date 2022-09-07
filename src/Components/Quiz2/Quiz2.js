import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Quiz2 = () => {
    return (
        <div className="max-w-[1320px] mx-auto">
            <div class="hero min-h-screen">
                <div class="hero-content flex flex-col lg:flex-row items-start justify-between gap-y-20">
                    <div class="lg:w-[50%] flex flex-col gap-y-6">
                        <h1 class='text-7xl font-["Caveat_Brush"] uppercase font-bold'>
                            Attend <span className='text-primary' > QUIZ'S</span> Almost All your Levels
                        </h1> 
                        <p className='font-[Jost]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit</p>
                        <div className="">
                            <button className='btn btn-primary font-[Jost]'>View all Quiz's</button>
                        </div>
                    </div>
                    <div className="lg:w-[50%] font-[jost]">                        
                        <div className="flex gap-x-8">
                            <div className=" lg:w-[300px] flex flex-col items-center p-2 gap-y-2 rounded transition hover:cursor-pointer hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-500 shadow-2xl ">
                                <img className='' src="../images/c6-8.png" alt="" />
                                <h1 className=' text-lg  font-bold'>Class 6th to 8th All Subjects</h1> 
                                <p className=' leading-5 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima modi culpa inventore, dolores, </p>                                                            
                                <p className='w-[140px] font-[jost] flex items-center justify-between border-b-2 border-zinc-500 hover:text-zinc-500 hover:border-primary hover:cursor-pointer transition ease-in-out duration-300'>
                                    <span className='text-lg tracking-[2px]'>Learn More</span>
                                    <FontAwesomeIcon className=' text-sm mt-1' icon={faArrowRightLong} />
                                </p>
                            </div>
                            <div className=" lg:w-[300px] flex flex-col items-center p-2 gap-y-2 rounded transition hover:cursor-pointer hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-500 shadow-2xl ">
                                <img className='' src="../images/c9-10.png" alt="" />
                                <h1 className='  text-lg font-bold'>Class 9th to 10th All Subjects</h1>
                                <p className='leading-5 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima modi culpa inventore, dolores, </p>
                                <p className='w-[140px] font-[jost] flex items-center justify-between  border-b-2 border-zinc-500 hover:text-zinc-500 hover:border-primary hover:cursor-pointer transition ease-in-out duration-300'>
                                    <span className='text-lg tracking-[2px]'>Learn More</span>
                                    <FontAwesomeIcon className=' text-sm mt-1' icon={faArrowRightLong} />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Quiz2;