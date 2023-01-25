import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/apiCalls/apiCall";
import Loading from "../Loading/Loading";

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
  const loading = useSelector((state) => state.user.panding);
  const dispatch = useDispatch();

  // User Login Handler
  const onSubmit = (data) => {
    loginUser(data, dispatch, reset, navigate, from);
  };

  // Show Loading on login panding
  // if (loading) {
  //   return <Loading></Loading>;
  // }
  return (
    <div className="">
      <div className="hero min-h-secreen pt-20">
        <div className=" hero-content flex-col lg:flex-row-reverse items-center">
          <div className=" text-center lg:text-left lg:pl-8">
            {/* <h1 className="text-5xl font-bold">Login Now</h1>
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
                    <span className="label-text text-lg">
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
                    <p className="text-red-500">{errors?.phone?.message}</p>
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
                    })}
                  />
                  {errors?.password?.type === "required" && (
                    <p className="text-red-500">{errors?.password?.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn bg-main hover:text-black hover:bg-white text-[17px] w-full mt-6 mb-2"
                >
                  লগ ইন করুন
                </button>
                <p className="text-center text-md ">
                  <span className="text-main font-bold">ই-একাডেমিকে</span> নতুন ?
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
