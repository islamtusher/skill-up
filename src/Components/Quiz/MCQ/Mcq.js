import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Mcq = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    // fake data Classes
    const classes = [
        {id:6, className:"6th"},
        {id:7, className:"7th"},
        {id:8, className:"8th"},
        {id:9, className:"9th"},
        {id:10, className:"10th"},
    ]

    // fake data subjects
    const subjects = [
        {id:1, subName:"Bangla"},
        {id:2, subName:"English"},
        {id:3, subName:"Islam"},
        {id:4, subName:"Social"},
    ]

    const onSubmit = data => {
        navigate(`/class-${data.class}/${data.subject}`)
        console.log(data);
    };
    return (
        <div className='flex flex-col items-center'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-full flex-col lg:flex-row-reverse justify-evenly">
                    <img src="./images/quizImage.png" className="w-[500px] rounded-lg" alt=''/>
                    <div className=''>
                        <form onSubmit={handleSubmit(onSubmit)} className=''>
                            <div className="my-2">
                                <h1 className='text-[18px]'>Chouse Quiz Type</h1>
                                <div className="flex ">
                                    <label className="cursor-pointer flex items-center mr-8">
                                        <input type="radio" name="radio-2" value='mcq' className="radio mr-3 radio-primary" {...register("type")} />                                
                                        <span className="label-text font-bold">MCQ</span> 
                                    </label>      
                                    <label className="cursor-pointer flex items-center">
                                        <input type="radio" name="radio-1" value='written' className="radio mr-3 radio-primary" {...register("type")} />
                                        <span className="label-text font-bold">Written</span> 
                                    </label>
                                </div>
                            </div>
                            <div className="my-2">
                                <label className="label">
                                    <h1 className="text-[18px]">Select Your Class</h1>
                                </label>
                                <select
                                    className="select select-bordered w-72 text-[20px]"
                                    {...register("class", { 
                                        required: {
                                            value: true,
                                            message: 'Please Select Your Class'
                                        }
                                    })}>
                                    <option disabled selected value=''>Pick one</option>
                                    {
                                        classes.map( cls => <option key={cls.id} value={cls.id}>{cls.className}</option>)
                                    }                                    
                                </select>
                                {errors?.class?.type === 'required' && <p className='text-red-500'>{errors?.class?.message}</p>}
                            </div>
                            <div className="my-2">
                                <label className="label">
                                    <h1 className="text-[18px]">Select Subject</h1>
                                </label>
                                <select
                                    className="select select-bordered w-72 text-[20px]"
                                    {...register("subject", {
                                        required: {
                                            value: true,
                                            message: "Please Select Subject"
                                        }
                                    })}>
                                    
                                    <option disabled selected value=''>Pick one</option>
                                    {
                                        subjects.map( sub => <option key={sub.id}>{sub.subName}</option>)
                                    }                                                                    
                                </select>
                                {errors?.subject?.type === 'required' && <p className='text-red-500'>{errors?.subject?.message}</p>}
                            </div>
                            <div>
                                <button type="submit" className='btn btn-primary my-4'>Next</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mcq;