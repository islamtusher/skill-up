import React from 'react';
import './HeroArea2.css'
const HeroArea2 = () => {
    return (
        <div>
            {/* <div class="px-6 py-12 md:px-12 text-center lg:text-left">
                <div class="container mx-auto xl:px-32">
                    <div class="grid lg:grid-cols-2 gap-12 flex items-center">
                        <div class="mt-12 lg:mt-0">
                            <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12" style={{"color": "hsl(218, 81%, 95%)"}}>The best offer <br /><span style={{"color": "hsl(218, 81%, 75%)"}}>for your business</span></h1>
                            <a class="inline-block px-7 py-3 mr-2 bg-gray-200 text-gray-700 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
                            <a class="inline-block px-7 py-3 bg-transparent text-white font-medium text-sm leading-snug uppercase rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a>
                        </div>
                        <div class="mb-12 lg:mb-0">
                            <img
                            src="https://mdbootstrap.com/img/new/ecommerce/horizontal/048.jpg"
                            class="w-full rounded-lg shadow-lg"
                            alt=""
                            />
                        </div>
                    </div>
                </div>
            </div> */}
            <div class="hero min-h-screen bg-[url('https://mdbootstrap.com/img/new/textures/full/142.jpg')] bg-[50%]">
                <div class="hero-overlay bg-opacity-90 bg-[#0099ff]"></div>
                <div class="hero-content flex flex-col lg:flex-row gap-x-10 gap-y-20">
                    <div class="max-w-lg text-center lg:text-start">
                        <h1 class='text-5xl md:text-6xl xl:text-7xl text-white font-["Caveat_Brush"] uppercase font-bold '>Develop your skills with <br /> <span class="text-primary">Skill up</span></h1>
                        <p class="mb-5 text-lg text-white font-[jost]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Enrolled Now</button>
                    </div>
                    <div className="">
                        <img className='w-[80%] mx-auto' src=".././images/p-removebg-preview.png" alt="" />
                    </div>
                </div>
                
            </div>
            
            {/* <svg
                className='bg-opacity-90'
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"><path
                    fill="#0099ff" fill-opacity="1"
                    d="M0,320L40,293.3C80,267,160,213,240,192C320,171,400,181,480,192C560,203,640,213,720,181.3C800,149,880,75,960,64C1040,53,1120,107,1200,106.7C1280,107,1360,53,1400,26.7L1440,0L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z">
                </path>
            </svg> */}
        </div>
    );
};

export default HeroArea2;