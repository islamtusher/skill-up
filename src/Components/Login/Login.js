import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/apiCalls/apiCall";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm(); // react form hook

  // Redux Toolkit
  const loading = useSelector((state) => state.user.pending);
  const loginError = useSelector((state) => state.user.error);
  console.log(loginError, loading);

  const dispatch = useDispatch();

  // User Login Handler
  const onSubmit = (data) => {
    loginUser(data, dispatch, reset, navigate, from)
  };

  return (
    <div className="">
      <div className="hero min-h-screen pt-20 lg:p-0">
        <div className=" hero-content flex-col-reverse lg:flex-row-reverse items-center ">
          <div className=" text-center lg:text-left lg:pl-8">
            <img
              className=" lg:w-[550px] xl:w-[700px]"
              src="../images/login_image.jpg"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 xl:w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body p-6">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col mt-4"
              >
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-sm lg:text-md xl:text-lg">
                      মোবাইল নম্বর লিখুন
                    </span>
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-sm lg:text-md xl:text-lg">
                      পাসওয়ার্ড লিখুন
                    </span>
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
                    })}
                  />
                  {errors?.password?.type === "required" && (
                    <p className="text-red-500">{errors?.password?.message}</p>
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
                    "লগ ইন করুন"
                  ) : (
                    <span className="w-6 h-6 mx-auto border-t-4 border-b-4 border-green-900 rounded-full animate-spin" />
                  )}
                </button>
                <p className="text-center text-sm xl:text-md">
                  <span className="text-main font-bold">ই-একাডেমিতে</span> নতুন
                  ?{" "}
                  <span
                    onClick={() => navigate("/signup")}
                    className="text-blue-600 cursor-pointer"
                  >
                    {" "}
                    সাইন আপ করুন
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
