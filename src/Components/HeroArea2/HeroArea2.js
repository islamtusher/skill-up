import React from 'react';
import './HeroArea2.css'
const HeroArea2 = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-[url('https://mdbootstrap.com/img/new/textures/full/142.jpg')] bg-[50%]">
                <div className="hero-overlay bg-opacity-90 bg-primary"></div>
                <div className="hero-content flex flex-col lg:flex-row gap-x-10 gap-y-20">
                    <div className="max-w-lg text-center lg:text-start">
                        <h1 className='text-5xl md:text-6xl xl:text-7xl text-white font-["Caveat_Brush"] uppercase font-bold '>Develop your skills with <br /> <span className="text-secondary">Skill up</span></h1>
                        <p className="mb-5 text-lg text-white font-[jost]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Enrolled Now</button>
                    </div>
                    <div className="">
                        <img className='w-[80%] mx-auto' src=".././images/heroImage.png" alt="" />
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default HeroArea2;