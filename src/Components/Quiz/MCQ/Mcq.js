import React, { useEffect } from "react";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './Academic.css'
import authHeader, { baseURL } from "../../../Network/AuthApi";
import axios from "axios";

const Mcq = () => {
  const navigate = useNavigate();
  const [currentClasses, setCurrentClasses] = useState([]);
  const [availableSubjects, setAvailableSubjects] = useState([]);
  const [subjectId, setSubjectId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // React Hook Form

  // load current classes
  useEffect(() => {
    (async () => {
      const response = await axios.get(baseURL + "student_classes", {
        headers: authHeader(),
      });
      // const response = await API.get("student_classes");
      setCurrentClasses(response.data.data);
    })();
  }, []);

  // handle class-change AND Load subjects
  const onClassChange = async (e) => {
    // setIsLoading(!isLoading)
    const response = await axios.get(
      baseURL + `class_wise_subject/${e.target.value}`,
      { headers: authHeader()}
    );
    setAvailableSubjects(response.data.data.subjects);
    // setIsLoading(!isLoading)
  };

  // handle subject-change onSelect
  const onSubjectChange = (e) => {
    setSubjectId(e.target.value);
  };

  // handle Form submit
  const onSubmit = (data) => {
    navigate(`/exam-type-${data.type}/${subjectId}`);
    console.log(data);
  };
  return (
    <div className="academic-background flex flex-col items-center">
      <div className="hero min-h-screen  pt-16">
        <div className="hero-content w-full flex-col-reverse lg:flex-row-reverse justify-evenly xl:gap-y-10">
          <img
            src="./images/quiz_banner.png"
            className="lg:w-[550px] xl:w-[800px]"
            alt=""
          />
          <div className="shadow-2xl rounded-lg p-6 bg-white">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col lg:gap-y-2 xl:gap-y-4"
            >
              <div className="my-2">
                <h1 className="text-md lg:text-lg xl:text-xl font-[jost] font-bold text-main mb-1">
                  Choose Quiz Type
                </h1>
                <div className="flex ">
                  <label className="cursor-pointer flex items-center mr-8">
                    <input
                      type="radio"
                      name="radio-2"
                      value="1"
                      className="radio mr-3 radio-primary"
                      {...register("type", {
                        required: {
                          value: true,
                          message: "Please Select Exam Type",
                        },
                      })}
                    />
                    <span className="label-text font-bold">Quiz</span>
                  </label>
                  <label className="cursor-pointer flex items-center">
                    <input
                      type="radio"
                      name="radio-1"
                      value="2"
                      className="radio mr-3 radio-primary"
                      {...register("type")}
                    />
                    <span className="label-text font-bold">Model Test</span>
                  </label>
                </div>
                {errors?.type?.type === "required" && (
                  <p className="text-red-500">{errors?.type?.message}</p>
                )}
              </div>
              <div className="my-2 font-[Galada]  ">
                <label className="label">
                  <h1 className=" text-md lg:text-lg xl:text-xl  text-main">
                    ক্লাস নির্বাচন কর
                  </h1>
                </label>
                <select
                  className="select focus:outline-0 select-bordered font-thin text-gray-500  w-full  lg:w-64 xl:w-72 lg:text-[17px] xl:text-[20px]"
                  {...register("class", {
                    required: {
                      value: true,
                      message: "Please Select Your Class",
                    },
                    onChange: onClassChange,
                  })}
                  defaultValue=""
                >
                  <option disabled value="">
                    ক্লাস
                  </option>
                  {console.log(currentClasses)}
                  {currentClasses?.map((cls) => (
                    <option key={cls.id} value={cls.id}>
                      {cls.name}
                    </option>
                  ))}
                </select>
                {errors?.class?.type === "required" && (
                  <p className="text-red-500">{errors?.class?.message}</p>
                )}
              </div>
              <div className="my-2 font-[Galada]">
                <label className="label">
                  <h1 className="text-md lg:text-lg xl:text-xl font-thin text-main">
                    বিষয় নির্বাচন কর
                  </h1>
                </label>
                <select
                  disabled={availableSubjects.length === 0 && true}
                  className={`select focus:outline-0 select-bordered text-gray-700 w-full  lg:w-64 xl:w-72 font-thin lg:text-[17px] xl:text-[20px]`}
                  title={
                    availableSubjects.length === 0
                      ? "প্রথমে ক্লাস নির্বাচন কর"
                      : ""
                  }
                  {...register("subject", {
                    required: {
                      value: true,
                      message: "Please Select Subject",
                    },
                    onChange: onSubjectChange,
                  })}
                  defaultValue=""
                >
                  <option disabled value="">
                    বিষয়
                  </option>
                  {availableSubjects.map((sub) => (
                    <option key={sub.uuid} value={sub.uuid}>
                      {sub.name}
                    </option>
                  ))}
                </select>
                {errors?.subject?.type === "required" && (
                  <p className="text-red-500">{errors?.subject?.message}</p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="w-[68px] font-[jost] flex items-center justify-between border-b-2 border-zinc-500 hover:text-success hover:border-primary hover:cursor-pointer transition ease-in-out duration-300"
                >
                  <span className="text-md lg:text-md xl:text-xl tracking-[2px]">
                    Next
                  </span>
                  <FontAwesomeIcon
                    className=" text-md mt-1"
                    icon={faArrowRightLong}
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mcq;
