import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
// php artisan serve
const Signup = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        if (data.password === data.password_confirmation) {

            // let myHeaders = new Headers();
            // myHeaders.append("Accept", "application/json");
            // myHeaders.append("Content-Type", "application/json");

            // let raw = JSON.stringify({
            //     "name": data.name,
            //     "password": data.password,
            //     "password_confirmation": data.password_confirmation,
            //     "phone_no": data.phone_no,
            // });

            // let requestOptions = {
            //     method: 'POST',
            //     headers: myHeaders,
            //     body:  JSON.stringify(data),
            //     redirect: 'follow'
            // };

            // fetch("http://127.0.0.1:8000/api/register", requestOptions)
            //     .then(response => response.text())
            //     .then(result => console.log(result))
            //     .catch(error => console.log('error', error));

            console.log('matched');
            fetch("http://127.0.0.1:8000/api/register", {
                method: 'POST',
                headers: {
                    "Accept":"application/json",
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(data)
            })
                .then(res => console.log(res.text()))
                .then(data => console.log(data))
        } else {
            console.log('Not Matched');
        }
        // console.log(data)
    }
    return (
        <div className="hero min-h-secreen lg:w-3/4 mx-auto pt-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left lg:pl-8">
                    <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                    <p className="py-6">
                        If you dont't have any user accout on AutoManufac site then feel free to Register now. It will be give you more comfortable and easiest visiting.
                    </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body pt-3">

                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-4'>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-lg">Name</span>
                                </label>
                                <input
                                    type='text'
                                    className="input input-bordered focus:outline-0 focus:border-primary w-full "
                                    {...register("name", { 
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                     })}
                                />
                                {errors?.name?.type === 'required' && <p className='text-red-500'>{errors?.name?.message}</p>}
                            </div>
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
                                {errors?.phone_no?.type === 'required' && <p className='text-red-500'>{errors?.phone_no?.message}</p>}                                
                                
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
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-lg">Confirm Password</span>
                                </label>
                                <input
                                    type='password'
                                    className="input input-bordered focus:outline-0 focus:border-primary w-full  "
                                    {...register("password_confirmation", {
                                        required: {
                                            value: true,
                                            message: 'Password Must Required'
                                        }                                        
                                    })}
                                />
                                {errors?.confirmPassword?.type === 'required' && <p className='text-red-500'>{errors?.confirmPassword?.message}</p>}                                
                            </div>
                            <button  type='submit' className="btn bg-[#0099ff] hover:text-black hover:bg-white text-[17px] w-full mt-6 mb-2" >SIGN UP</button>
                            <p className='text-center text-md '>
                                Allready Registered?
                                <span onClick={()=>navigate('/login')} className='text-blue-600 cursor-pointer'> Please Log In</span>
                            </p>
                        </form>                                                                                               
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;