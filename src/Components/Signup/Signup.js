import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "../../Network/API";
import { loginStart } from "../../redux/slice/userSlice";
import Loading from "../Loading/Loading";
import { getUserInfo } from "../../redux/apiCalls/apiCall";

const Signup = () => {
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState(""); // password not matcing error
  const {register,reset,formState: { errors },handleSubmit,} = useForm(); // React from Hook

  // Redux Toolkit
  const loading = useSelector((state) => state.user.panding);
  const dispatch = useDispatch();

  // Show Loading on Sign Up panding
  if (loading) {
    return <Loading></Loading>;
  }

  // Form submit handle
  const onSubmit = async (formData) => {
    dispatch(loginStart());
    try {
      if (formData.password === formData.password_confirmation) {
        const { data } = await API.post(`/register`, formData); // store userInfo & get access token
        if (data?.access_token) {
          getUserInfo(data?.access_token, dispatch, reset, navigate);
        }
      } else {
        setPasswordError("Confirm-Password Not Matched");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="hero min-h-secreen lg:w-3/4 mx-auto pt-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left lg:pl-8">
          {/* <h1 className="text-5xl font-bold">সাইন আপ করুন!</h1>
          <p className="py-6">
            If you dont't have any user accout on AutoManufac site then feel
            free to Register now. It will be give you more comfortable and
            easiest visiting.
          </p> */}
          <img className="w-[700px]" src="../images/login_image.jpg" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body pt-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col mt-4"
            >
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-lg">আপনার নাম</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered focus:outline-0 focus:border-primary w-full "
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                />
                {errors?.name?.type === "required" && (
                  <p className="text-red-500">{errors?.name?.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-lg">মোবাইল নম্বর লিখুন</span>
                </label>
                <input
                  type="tel"
                  className="input input-bordered focus:outline-0 focus:border-primary w-full "
                  {...register("phone_no", {
                    required: {
                      value: true,
                      message: "Phone Number is Required",
                    },
                  })}
                />
                {errors?.phone_no?.type === "required" && (
                  <p className="text-red-500">{errors?.phone_no?.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-lg">পাসওয়ার্ড লিখুন</span>
                </label>
                <input
                  type="password"
                  autoComplete="current-password"
                  className="input input-bordered focus:outline-0 focus:border-primary w-full  "
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password Must Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Need Minimum 6 characters",
                    },
                  })}
                />
                {errors?.password?.type === "required" && (
                  <p className="text-red-500">{errors?.password?.message}</p>
                )}
                {errors?.password?.type === "pattern" && (
                  <p className="text-red-500">{errors?.password?.message}</p>
                )}
                {errors?.password?.type === "minLength" && (
                  <p className="text-red-500">{errors?.password?.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-lg">
                    পাসওয়ার্ডটি পুনরায় লিখুন
                  </span>
                </label>
                <input
                  type="password"
                  className="input input-bordered focus:outline-0 focus:border-primary w-full  "
                  {...register("password_confirmation", {
                    required: {
                      value: true,
                      message: "Password Must Required",
                    },
                  })}
                />
                {errors?.confirmPassword?.type === "required" && (
                  <p className="text-red-500">
                    {errors?.confirmPassword?.message}
                  </p>
                )}
                {passwordError && (
                  <p className="text-red-500">{passwordError}</p>
                )}
              </div>
              <button
                type="submit"
                className="btn bg-main hover:text-black hover:bg-white text-[17px] w-full mt-6 mb-2"
              >
                সাইন আপ করুন
              </button>
              <p className="text-center text-md">
                আপনার একাউন্ট রয়েছে ?
                <span
                  onClick={() => navigate("/login")}
                  className="text-blue-600 cursor-pointer"
                >
                  {" "}
                  লগ ইন করুন
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
