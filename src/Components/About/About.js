import { faArrowRight, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const About = () => {
    return (
        <div className="max-w-[1320px]  mx-auto">
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse font-[jost] gap-x-10">
                    <div class="lg:w-[50%] ">
                        <h3 className='text-3xl font-bold mb-8'>
                            Who and Why We Are
                            <hr className='w-[20%] mt-4 border-primary' />
                        </h3>
                        <p>
                            <span className=''>Lorem ipsum </span>
                            dolor sit amet consectetur adipisicing elit. Odio perspiciatis consequuntur facilis, commodi enim eum, sunt quibusdam porro officiis provident minus distinctio incidunt repudiandae fugit sit ipsum. Magni, quod consectetur! dolor sit amet consectetur adipisicing elit. Odio perspiciatis consequuntur facilis, commodi enim eum, sunt quibusdam porro officiis provident minus distinctio incidunt repudiandae fugit sit ipsum. Magni, quod consectetur!
                        </p>
                        <p className='mt-2'>
                            <span className=''>Lorem ipsum</span>
                            dolor sit amet consectetur adipisicing elit. Odio perspiciatis consequuntur facilis, commodi enim eum, sunt quibusdam porro officiis provident minus distinctio incidunt repudiandae fugit sit ipsum. Magni, quod consectetur!
                        </p>                
                    </div>
                
                    <div class="lg:w-[50%] lg:text-left bg-[#131b23] text-white lg:p-12 p-4">
                        <h3 className='text-3xl text-primary font-bold mb-8'>
                            The leading global website for learning and instruction
                            <hr className='w-[20%] mt-4 border-primary' />
                        </h3>
                        <p className='my-1 text-zinc-200'>
                            <span className='font-bold text-md text-white'>Online Courses -</span> Dolor sit amet consectetur adipisicing elit. Odio perspiciatis consequuntur facilis, commodi enim eum, sunt quibusdam porro officiis provident minus distinctio incidunt repudiandae fugit sit ipsum. Magni, quod consectetur!
                        </p>
                        <p className='my-1 text-zinc-200'>
                            <span className='font-bold text-md text-white'>Online MCQ -</span> Dolor sit amet consectetur adipisicing elit. Odio perspiciatis consequuntur facilis, commodi enim eum, sunt quibusdam porro officiis provident minus distinctio incidunt repudiandae fugit sit ipsum. Magni, quod consectetur!
                        </p>
                        <p className='my-1 text-zinc-200'>
                            <span className='font-bold text-md text-white'>Online Certification-</span> Dolor sit amet consectetur adipisicing elit. Odio perspiciatis consequuntur facilis, commodi enim eum, sunt quibusdam porro officiis provident minus distinctio incidunt repudiandae fugit sit ipsum. Magni, quod consectetur!
                        </p>                    

                        <p className='w-[140px] font-[jost] flex items-center justify-between mt-4 border-b-2 border-zinc-500 hover:text-primary hover:border-primary hover:cursor-pointer transition ease-in-out duration-300'>
                            <span className='text-lg tracking-[2px]'>Learn More</span>
                            <FontAwesomeIcon className=' text-sm mt-1' icon={faArrowRightLong} />
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;