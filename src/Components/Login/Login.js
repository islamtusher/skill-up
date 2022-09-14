import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();

    const  onSubmit = (data) => {

        fetch("http://127.0.0.1:8000/api/login", {
            method: 'POST',
            headers: {
                "Accept":"application/json",
                'Content-type': 'application/json',
                // 'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        
        console.log(data)
    }
    return (
        <div className="hero min-h-secreen lg:w-3/4 mx-auto pt-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left lg:pl-8">
                    <h1 className="text-5xl font-bold">Login Now</h1>
                    <p className="py-6">
                        If you dont't have any user accout on AutoManufac site then feel free to Register now. It will be give you more comfortable and easiest visiting.
                    </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body pt-3">

                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-4'>                    
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-lg">Phone Number</span>
                                </label>
                                <input
                                    type='tel'
                                    className="input input-bordered focus:outline-0 focus:border-primary w-full "
                                    {...register("phone_no", {
                                        required: {
                                            value: true,
                                            message: 'Phone Number is Required'
                                        }})
                                    }
                                />
                                {errors?.phone_no?.type === 'required' && <p className='text-red-500'>{errors?.phone?.message}</p>}                                
                                {/* {hooksError && <p className='text-red-500'>{hooksError}</p> } */}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-lg">Password</span>
                                </label>
                                <input
                                    type='password'
                                    autoComplete='current-password'
                                    className="input input-bordered focus:outline-0 focus:border-primary w-full  "
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password Must Required'
                                        },
                                        pattern: {
                                            value: /(?=.*[!@#$%^&*])/,
                                            message: 'Need Minimum 1 Special Character'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Need Minimum 6 characters'
                                        }
                                        
                                    })}
                                />
                                {errors?.password?.type === 'required' && <p className='text-red-500'>{errors?.password?.message}</p>}
                                {errors?.password?.type === 'pattern' && <p className='text-red-500'>{errors?.password?.message}</p>}
                                {errors?.password?.type === 'minLength' && <p className='text-red-500'>{errors?.password?.message}</p>}                                
                            </div>

                            <button  type='submit' className="btn bg-[#0099ff] hover:text-black hover:bg-white text-[17px] w-full mt-6 mb-2" >Log In</button>
                            <p className='text-center text-md '>
                                New User?
                                <span onClick={()=>navigate('/signup')} className='text-blue-600 cursor-pointer'> Please Sign Up</span>
                            </p>
                        </form>                                            
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;