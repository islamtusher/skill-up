import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import authHeader, { baseURL } from '../../../Network/AuthApi';

const QuestionUpload = () => {
    const [currentClasses, setCurrentClasses] = useState([]);
    const [availableSubjects, setAvailableSubjects] = useState([]);
    const [chapters, setChapters] = useState([]);

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm(); // react form hooks

    // load current classes
    useEffect(() => {
      (async () => {
        const response = await axios.get(baseURL + "student_classes", {
          headers: authHeader(),
        });
        setCurrentClasses(response.data.data);
      })();
    }, []);

    // handle class-change onSelect
    const onClassChange = async (e) => {
      const response = await axios.get(baseURL + `class_wise_subject/${e.target.value}`,
        { headers: authHeader() });
      setAvailableSubjects(response.data.data.subjects);
    };

    // handle subject-change onSelect
    const onSubjectChange = async (e) => {
      const { data } = await axios.get(baseURL + `subject_wise_chapter/${e.target.value}`,
        { headers: authHeader() });
      setChapters(data.data.chapters);
    };

    const onSubmit = async (formData) => {
      const {
        question,
        answer,
        set,
        option1,
        option2,
        option3,
        option4,
        chapters_id,
      } = formData;
      const submitData = {
        question,
        answer,
        set,
        options: [option1, option2, option3, option4],
        chapters_id,
      };
      
      const data = await axios.post(baseURL + "/mcq_question", submitData,
        { headers: authHeader() });
      console.log(data);
      reset();
      toast.success('Question Upload Successful')
    };
  return (
    <div className="min-h-screen flex items-center justify-center pt-[55px]">
      <div className="hero ">
        <div className="hero-content px-6 p-4 bg-white shadow-xl">
          <div className=" lg:text-left">
            <h1 className="text-2xl font-[jost] text-center font-bold tracking-wider ">
              Upload Question
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className=" mt-2">
              <div className="flex gap-x-4">
                <div className="form-control w-full mx-auto max-w-xs">
                  <label className="label">
                    <span className="label-text text-sm">Which Class?</span>
                  </label>
                  <select
                    defaultValue=""
                    className="select bg-gray-100 border-black focus:outline-0 w-full "
                    onChange={(e) => onClassChange(e)}
                  >
                    <option value="" disabled>
                      Select One
                    </option>
                    {currentClasses?.map((cls) => (
                      <option key={cls?.id} value={cls.id}>
                        {cls.name}
                      </option>
                    ))}
                  </select>
                  {errors?.class?.type === "required" && (
                    <p className="text-red-500 mb-6">
                      {errors?.class?.message}
                    </p>
                  )}
                </div>
                <div className="form-control w-full mx-auto max-w-xs">
                  <label className="label">
                    <span className="label-text text-sm">Which Subject</span>
                  </label>
                  <select
                    disabled={availableSubjects.length === 0 && true}
                    defaultValue=""
                    onChange={(e) => onSubjectChange(e)}
                    className="select bg-gray-100 border-black focus:outline-0 w-full "
                  >
                    <option value="" disabled>
                      Select One
                    </option>
                    {availableSubjects.map((sub) => (
                      <option key={sub.uuid} value={sub.uuid}>
                        {sub.name}{" "}
                      </option>
                    ))}
                  </select>
                  {errors?.subject?.type === "required" && (
                    <p className="text-red-500 mb-6">
                      {errors?.subject?.message}
                    </p>
                  )}
                </div>
                <div className="form-control w-full mx-auto max-w-xs">
                  <label className="label">
                    <span className="label-text text-sm">Which Chapters?</span>
                  </label>
                  <select
                    disabled={chapters.length === 0 && true}
                    defaultValue=""
                    className="select bg-gray-100 border-black focus:outline-0  "
                    {...register("chapters_id", {
                      required: {
                        value: true,
                        message: "Select a Chapter",
                      },
                    })}
                  >
                    <option value="" disabled>
                      Select One
                    </option>
                    {chapters?.map((chapter) => (
                      <option key={chapter.uuid} value={chapter.uuid}>
                        {chapter.name}
                      </option>
                    ))}
                  </select>
                  {errors?.chapters_id?.type === "required" && (
                    <p className="text-red-500 mb-6">
                      {errors?.chapters_id?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="form-control w-full mx-auto">
                <label className="label">
                  <span className="label-text text-sm">Write The Question</span>
                </label>
                <input
                  type="text"
                  className="input border-black focus:outline-0 focus:border-primary w-full  "
                  {...register("question", {
                    required: {
                      value: true,
                      message: "A Question is Required",
                    },
                  })}
                />
                {errors?.question?.type === "required" && (
                  <p className="text-red-500">{errors?.question?.message}</p>
                )}
              </div>
              <div className="form-control w-full mx-auto">
                <label className="label">
                  <span className="label-text text-sm">
                    Define Correct Answer
                  </span>
                </label>
                <input
                  type="text"
                  className="input border-black focus:outline-0 focus:border-primary w-full  "
                  {...register("answer", {
                    required: {
                      value: true,
                      message: "Write the Correct Answer Here",
                    },
                  })}
                />
                {errors?.answer?.type === "required" && (
                  <p className="text-red-500">{errors?.answer?.message}</p>
                )}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <div className="form-control w-full mx-auto max-w-xs">
                    <label className="label">
                      <span className="label-text text-sm">Option 1</span>
                    </label>
                    <input
                      type="text"
                      className="input border-black focus:outline-0 focus:border-primary w-full  "
                      {...register("option1", {
                        required: {
                          value: true,
                          message: "Option Required",
                        },
                      })}
                    />
                    {errors?.option1?.type === "required" && (
                      <p className="text-red-500">{errors?.option1?.message}</p>
                    )}
                  </div>
                  <div className="form-control w-full mx-auto max-w-xs">
                    <label className="label">
                      <span className="label-text text-sm">Option 3</span>
                    </label>
                    <input
                      type="text"
                      className="input border-black focus:outline-0 focus:border-primary w-full  "
                      {...register("option3", {
                        required: {
                          value: true,
                          message: "Option Required",
                        },
                      })}
                    />
                    {errors?.option3?.type === "required" && (
                      <p className="text-red-500">{errors?.option3?.message}</p>
                    )}
                  </div>
                  <div className="form-control w-full mx-auto max-w-xs">
                    <label className="label">
                      <span className="label-text text-sm">
                        Define Qustion Set
                      </span>
                    </label>
                    <input
                      type="text"
                      className="input border-black focus:outline-0 focus:border-primary w-full  "
                      {...register("set", {
                        required: {
                          value: true,
                          message: "Define any Set",
                        },
                      })}
                    />
                    {errors?.set?.type === "required" && (
                      <p className="text-red-500">{errors?.set?.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <div className="form-control w-full mx-auto max-w-xs">
                    <label className="label">
                      <span className="label-text text-sm">Option 2</span>
                    </label>
                    <input
                      type="tel"
                      className="input border-black focus:outline-0 focus:border-primary w-full  "
                      {...register("option2", {
                        required: {
                          value: true,
                          message: "Option Required",
                        },
                      })}
                    />
                    {errors?.option2?.type === "required" && (
                      <p className="text-red-500">{errors?.option2?.message}</p>
                    )}
                  </div>
                  <div className="form-control w-full mx-auto max-w-xs">
                    <label className="label">
                      <span className="label-text text-sm">Option 4</span>
                    </label>
                    <input
                      type="tel"
                      className="input border-black focus:outline-0 focus:border-primary w-full  "
                      {...register("option4", {
                        required: {
                          value: true,
                          message: "Option Required",
                        },
                      })}
                    />
                    {errors?.option4?.type === "required" && (
                      <p className="text-red-500">{errors?.option4?.message}</p>
                    )}
                  </div>

                  <div className="mt-[34px]">
                    <button
                      type="submit"
                      className="btn bg-primary hover:bg-[#0281d6] w-full"
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionUpload;