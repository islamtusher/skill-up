import React from 'react';
import { useForm } from 'react-hook-form';

const Mcq = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='flex flex-col items-center'>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content w-full flex-col lg:flex-row-reverse justify-around">
                    <img src="https://placeimg.com/260/400/arch" class="w-80 rounded-lg shadow-2xl" alt=''/>
                    <div className=''>
                        <form onSubmit={handleSubmit(onSubmit)} className=''>
                            <div className="my-1">
                                <h1>Chouse Quiz Type</h1>
                                <dv class="flex justify-between">
                                    <label className="cursor-pointer flex items-center">
                                        <input type="radio" name="radio-2" value='mcq' class="radio mr-3 radio-primary" {...register("type")} />                                
                                        <span class="label-text font-bold">MCQ</span> 
                                    </label>      
                                    <label className="cursor-pointer flex items-center">
                                        <input type="radio" name="radio-1" value='written' class="radio mr-3 radio-primary" {...register("type")} />
                                        <span class="label-text font-bold">Written</span> 
                                    </label>
                                </dv>
                            </div>
                            <div className="my-1">
                                <label class="label">
                                    <span class="">Select Your Class</span>
                                </label>
                                <select class="select select-bordered w-60" {...register("class")}>
                                    <option disabled selected>Pick one</option>
                                    <option>Calss 5</option>
                                    <option>Classs 6</option>
                                    <option>Lord of the Rings</option>
                                    <option>Planet of the Apes</option>
                                    <option>Star Trek</option>
                                </select>
                            </div>
                            <div className="my-1">
                                <label class="label">
                                    <span class="">Select Subject</span>
                                </label>
                                <select class="select select-bordered w-60" {...register("subject")}>
                                    <option disabled selected>Pick one</option>
                                    <option >Bangla</option>
                                    <option >English</option>
                                    <option >Physic</option>
                                    <option >Mathematics</option>
                                    <option >Social Science</option>                                
                                </select>
                            </div>
                            <div><button type="submit" className='btn bg-primary my-4 text-black hover:bg-white'>Next</button></div>
                        </form>
                    </div>
                </div>
            </div>



            
            <div class="form-control w-full max-w-xs">
                
            </div>
            {/* <div class="accordion lg:min-w-[800px] lg:max-w-[800px]" id="accordionExample">
                <div class="accordion-item  bg-white border border-gray-200">
                    <h2 class="accordion-header mb-0" id="headingOne">
                        <button class="
                            accordion-button
                            relative
                            flex
                            items-center
                            w-full
                            py-4
                            px-5
                            text-base text-gray-800 text-left
                            bg-white
                            border-0
                            rounded-none
                            transition
                            focus:outline-none
                        " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            Class Five
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                        <div class="accordion-body py-4 px-5">
                            <ul class="menu bg-primary rounded">
                                <li className='border-b-2 border-black'><Link to=''>Bangla</Link></li>
                                <li className='border-b-2 border-black'><Link to=''>English</Link></li>
                                <li className='border-b-2 border-black'><Link to=''>Mathematics</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item bg-white border border-gray-200">
                    <h2 class="accordion-header mb-0" id="headingTwo">
                    <button class="
                        accordion-button
                        collapsed
                        relative
                        flex
                        items-center
                        w-full
                        py-4
                        px-5
                        text-base text-gray-800 text-left
                        bg-white
                        border-0
                        rounded-none
                        transition
                        focus:outline-none
                    " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                        aria-controls="collapseTwo">
                        Class Six
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body py-4 px-5">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default,
                        until the collapse plugin adds the appropriate classes that we use to style each
                        element. These classes control the overall appearance, as well as the showing and
                        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just about any HTML can go within
                        the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div class="accordion-item bg-white border border-gray-200">
                    <h2 class="accordion-header mb-0" id="headingThree">
                    <button class="
                        accordion-button
                        collapsed
                        relative
                        flex
                        items-center
                        w-full
                        py-4
                        px-5
                        text-base text-gray-800 text-left
                        bg-white
                        border-0
                        rounded-none
                        transition
                        focus:outline-none
                    " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                        aria-controls="collapseThree">
                        Class Seven
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body py-4 px-5">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default,
                        until the collapse plugin adds the appropriate classes that we use to style each
                        element. These classes control the overall appearance, as well as the showing and
                        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just about any HTML can go within
                        the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Mcq;