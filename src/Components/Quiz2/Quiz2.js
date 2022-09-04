import React from 'react';

const Quiz2 = () => {
    return (
        <div className="max-w-[1320px] mx-auto">
            <div class="hero min-h-screen  ">
                <div class="hero-content flex flex-col lg:flex-row items-start justify-between gap-y-20">
                    <div class="lg:w-[50%] flex flex-col gap-y-6">
                        <h1 class='text-7xl font-["Caveat_Brush"] uppercase font-bold'>
                            Attend <span className='text-primary' > Courses</span> Almost All your Levels
                        </h1> 
                        <p className='font-[Jost]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit</p>
                        <div className="">
                            <button className='btn btn-primary font-[Jost]'>View all Courses</button>
                        </div>
                    </div>
                    <div className="lg:w-[50%] grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                        <div className=" lg:w-[300px] flex flex-col items-center rounded transition hover:cursor-pointer hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-500 shadow-2xl ">
                            <img className='' src="../images/pic1.jpg" alt="" />
                            <h1 className='font-["Caveat_Brush"] font-light text-2xl '>Primary Level</h1>
                            <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quis veritatis labore</p>
                        </div>
                        <div className="flex flex-col gap-y-8">
                            <div className=" lg:w-[250px] rounded transition hover:cursor-pointer hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-500 shadow-2xl ">
                                <img className='' src="../images/pic2.jpg" alt="" />
                                <h1 className='font-["Caveat_Brush"]  font-light text-2xl text-center '>Secondary Level</h1>                                                             
                            </div>
                            <div className=" lg:w-[250px]   rounded transition hover:cursor-pointer hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-500 shadow-2xl ">
                                <img className='' src="../images/pic3.jpg" alt="" />
                                <h1 className='font-["Caveat_Brush"] font-light text-2xl text-center'>intermediate Level</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className='flex '>
                <div className="max-w-lg">
                    <h1 class='text-7xl font-["Caveat_Brush"] uppercase font-bold  '>
                        Attend Quizs On Almost All Subjects
                    </h1> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cum repellat.</p>
                    <button className='btn btn-primary'>View all Courses</button>
                </div>
                <div className="">
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
            </div> */}
        </div>

    );
};

export default Quiz2;