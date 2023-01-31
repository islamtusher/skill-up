import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginError, loginStart } from "../../redux/slice/userSlice";
import Loading from "../Loading/Loading";
import { getUserInfo } from "../../redux/apiCalls/apiCall";
import axios from "axios";
import authHeader, { baseURL } from "../../Network/AuthApi";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState(""); // password not matcing error
  const {
    register,
    reset,
    setError,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm(); // React from Hook

  // Redux Toolkit
  const loading = useSelector((state) => state.user.pending);
  const dispatch = useDispatch();

  // Form submit handle
  const onSubmit = async (formData) => {     
      dispatch(loginStart());
      try {       
        const { data } = await axios.post(baseURL + `register`, formData, {
          // store userInfo & get access token
          headers: authHeader(),
        });
        if (data?.access_token) {
          localStorage.setItem("accessToken", data?.access_token);
          getUserInfo(data?.access_token, dispatch, reset, navigate, "/");
        }
      } catch (error) {
        dispatch(loginError());
        const errors = error.response.data.errors;
        if (errors?.phone_no) {
          console.log(errors.phone_no[0]);
          setError("phone_no", {
            type: "validation",
            message: errors.phone_no[0],
          });
        }
        else if (errors.password){
          console.log(errors.password[0]);
          setError("password_confirmation", {
            type: "validation",
            message: errors.password[0],
          });
        } 
      }
  };
  return (
    <div className="hero min-h-screen lg:w-3/4 mx-auto pt-16 lg:pt-12">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <div className="text-center lg:text-left lg:pl-8">
          <img
            className="w-full lg:w-[550px] xl:w-[700px]"
            src="../images/login_image.jpg"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 xl:w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body px-6 py-2 ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col mt-4"
            >
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-sm lg:text-md xl:text-lg">
                    আপনার নাম
                  </span>
                </label>
                <input
                  type="text"
                  className="input input-bordered focus:outline-0 focus:border-primary w-full lg:h-[44px] xl:h-[52px] "
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-sm lg:text-md xl:text-lg">
                    মোবাইল নম্বর লিখুন
                  </span>
                </label>
                <input
                  type="tel"
                  className="input input-bordered focus:outline-0 focus:border-primary w-full lg:h-[44px] xl:h-[52px]"
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
                {errors?.phone_no?.type === "validation" && (
                  <p className="text-red-500">{errors?.phone_no?.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-sm lg:text-md xl:text-lg">
                    পাসওয়ার্ড লিখুন
                  </span>
                </label>
                <input
                  type="password"
                  className="input input-bordered focus:outline-0 focus:border-primary w-full  lg:h-[44px] xl:h-[52px]"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password Must Required",
                    },
                    minLength: {
                      value: 8,
                      message: "Need Minimum 8 characters",
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-sm lg:text-md xl:text-lg">
                    পাসওয়ার্ডটি পুনরায় লিখুন
                  </span>
                </label>
                <input
                  type="password"
                  className="input input-bordered focus:outline-0 focus:border-primary w-full  lg:h-[44px] xl:h-[52px]"
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
                {errors?.password_confirmation?.type === "validation" && (
                  <p className="text-red-500">
                    {errors?.password_confirmation?.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className={`w-full hover:text-black hover:bg-white mt-6 mb-2  ${
                  loading
                    ? "btn bg-transparent"
                    : "btn bg-main text-[16px] font-thin "
                } `}
              >
                {!loading ? (
                  "সাইন আপ করুন"
                ) : (
                  <span className="w-6 h-6 mx-auto border-t-4 border-b-4 border-green-900 rounded-full animate-spin" />
                )}
              </button>
              {/* <button
                type="submit"
                className="btn bg-main hover:text-black hover:bg-white text-[16px] font-thin w-full mt-6 mb-2"
              >
                সাইন আপ করুন
              </button> */}

              <p className="text-center text-sm xl:text-md">
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
