import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import authHeader, { baseURL } from "../../../../Network/AuthApi";

const AllQuestions = () => {
  const [subjectWiseChapters, setSubjectWiseChapters] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [chapterHandle, setChapterHandle] = useState(false);
  const [AllClasses, setAllClasses] = useState([]);
  const [allQuestions, setAllQuestions] = useState([]);
  const [classWiseSubjects, setClassWiseSubjects] = useState([]);
  const [handleQuestionUp, setHandleQuestionUp] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [pagination, setPagination] = useState({});

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm(); // react form hooks

  // TODO: GET All Classes
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(baseURL + "student_classes", {
        headers: authHeader(),
      });
      setAllClasses(data?.data);
    })();
  }, []);

  // TODO: GET All questions
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(baseURL + "mcq_question", {
        headers: authHeader(),
      });
      setAllQuestions(data?.data);
      console.log(data);
    })();
  }, [handleQuestionUp]);

  //TODO: Handle Page Button click
  const paginationHandler = async (page) => {
    try {
      const { data } = await axios.get(
        baseURL + `chapter?page=${page.selected + 1}`,
        {
          headers: authHeader(),
        }
      );
      setSubjectWiseChapters(data?.data);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  //TODO: Handle form Submission (Add Question)
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
    try {
      const response = await axios.post(baseURL + "mcq_question", submitData, {
        headers: authHeader(),
      });
      if (response.status === 204) {
        setHandleQuestionUp(!handleQuestionUp)
        reset();
        setOpenModal(!openModal)
        toast.success("Question Upload Successful");

      }
    } catch (error) {
      toast.error("Something went wrong uploading");
    }
  };

  //TODO: handle class-change on-Select
  const onClassChange = async (e) => {
    const response = await axios.get(
      baseURL + `class_wise_subject/${e.target.value}`,
      { headers: authHeader() }
    );
    setClassWiseSubjects(response.data.data.subjects);
  };

  //TODO: handle subject-change on-Select
  const onSubjectChange = async (e) => {
    const response = await axios.get(
      baseURL + `subject_wise_chapter/${e.target.value}`,
      { headers: authHeader() }
    );
    setChapters(response.data.data.chapters);
    console.log(response.data.data.chapters);
  };
    
  //TODO: handle subject-change on-Select
  const onChapterChange = async (e) => {
    const {data} = await axios.get(
      baseURL + `chapter_wise_mcq_question/${e.target.value}`,
      { headers: authHeader()}
    );
    setAllQuestions(data.data.mcq_questions);
    // console.log(data);
  };

  //TODO: Handle Chapter Delete
  const handleQuestionDelete = async (id) => {
    const response = await axios.delete(baseURL + `mcq_question/${id}`, {
      headers: authHeader(),
    });
    if (response.status === 204) {
      setHandleQuestionUp(!handleQuestionUp);
      toast.success("Question Delete Successfully");
    } else {
      toast.error("Something went wrong");
    }
  };

  //TODO: Handle Chapter Update
  const handleChapterUpdate = async (id) => {
    navigate(`/dashboard/chapter-Edit/${id}`);
  };
  return (
    <div className="py-24 px-10">
      <div className="">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-4 items-center mb-4">
            <div className="">
              <label className="label">
                <span className="label-text text-sm">Which Class ?</span>
              </label>
              <select
                defaultValue=""
                className="select border-black focus:outline-0 w-full "
                onChange={(e) => onClassChange(e)}
              >
                <option value="" disabled>
                  Select Class
                </option>
                {AllClasses?.map((cls) => (
                  <option key={cls?.id} value={cls.id}>
                    {cls.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="">
              <label className="label">
                <span className="label-text text-sm">Which Subject ?</span>
              </label>
              <select
                disabled={classWiseSubjects.length === 0 && true}
                defaultValue=""
                title="Select Classes At First"
                onChange={(e) => onSubjectChange(e)}
                className="select border-black focus:outline-0 w-full "
              >
                <option value="" disabled>
                  Select One
                </option>
                {classWiseSubjects.map((sub) => (
                  <option key={sub.uuid} value={sub.uuid}>
                    {sub.name}{" "}
                  </option>
                ))}
              </select>
            </div>
            <div className="">
              <label className="label">
                <span className="label-text text-sm">Which Chapters ?</span>
              </label>
              <select
                disabled={chapters.length === 0 && true}
                defaultValue=""
                title="Select Subject At First"
                onChange={(e) => onChapterChange(e)}
                className="select border-black focus:outline-0 w-full "
              >
                <option value="" disabled>
                  Select One
                </option>
                {chapters.map((sub) => (
                  <option key={sub.uuid} value={sub.uuid}>
                    {sub.name}{" "}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="">
            <label
              onClick={() => setOpenModal(!openModal)}
              htmlFor="my-modal-6"
              className="btn bg-main hover:bg-primary"
            >
              Add Question
            </label>
          </div>
        </div>
        <h4 className="text-lg font-bold mb-3">Questions List</h4>
        <table className="table table-auto w-full rounded shadow-lg">
          <thead>
            <tr>
              <th>IN</th>
              <th>Question</th>
              <th>Answer</th>
              {/* <th>Options</th> */}
              {/* <th>Chapter</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allQuestions?.map((question, index) => {
              return (
                <tr key={index} className={`${index % 2 !== 0 && ""}`}>
                  <td>{index + 1}</td>
                  <td className="text-[14px]">{question.question}</td>
                  <td>{question?.answer}</td>
                  {/* <td>{question?.chapter_name}</td> */}
                  <td>
                    <FontAwesomeIcon
                      onClick={() => handleQuestionDelete(question?.uuid)}
                      className=" text-xl w-[34px] text-red-600 mr-2 hover:cursor-pointer"
                      icon={faTrash}
                    />
                    <FontAwesomeIcon
                      onClick={() => handleChapterUpdate(question?.uuid)}
                      className=" text-xl w-[34px] text-blue-400 hover:cursor-pointer"
                      icon={faEdit}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="mt-6 mx-auto">
          {allQuestions?.length > 0 && (
            <nav>
              <ReactPaginate
                previousLabel={
                  <span className=" page-link page-link-icon mr-2">
                    Previous
                  </span>
                }
                nextLabel={
                  <span className=" page-link page-link-icon ml-2 ">Next</span>
                }
                breakLabel={"..."}
                breakClassName={"break-me"}
                activeClassName={"active"}
                containerClassName={"pagination pagination-space m-b-0"}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                initialPage={
                  pagination.current_page ? pagination?.current_page - 1 : 1
                }
                pageCount={pagination?.totalPage ? pagination.totalPage : 1}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={paginationHandler}
              />
            </nav>
          )}
        </div>
      </div>
      <input
        checked={openModal && true}
        type="checkbox"
        id="my-modal-6"
        className="modal-toggle"
      />
      <div
        className={`modal modal-bottom sm:modal-middle ${
          openModal && "modal-open"
        }`}
      >
        <div className="modal-box relative lg:mt-10 lg:pt-2 xl:pt-4">
          <label
            onClick={() => setOpenModal(!openModal)}
            title="Close"
            htmlFor="my-modal-6"
            className="btn bg-red-600 border-0 btn-sm btn-circle absolute right-2 lg:top-2 xl:top-4"
          >
            ✕
          </label>
          <div className="lg:text-left">
            <h1 className="text-md lg:text-lg xl:text-xl font-[jost] text-center font-bold tracking-wider ">
              Upload Question
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className=" xl:mt-2">
              <div className="flex gap-x-4">
                <div className="form-control w-full mx-auto max-w-xs">
                  <label className="label">
                    <span className="label-text text-sm">Which Class ?</span>
                  </label>
                  <select
                    defaultValue=""
                    className="select w-full max-h-[32px] min-h-[30px] text-sm lg:text-[12px] xl:text-sm bg-gray-100 border-black focus:outline-0 rounded "
                    onChange={(e) => onClassChange(e)}
                  >
                    <option value="" disabled>
                      Select One
                    </option>
                    {AllClasses?.map((cls) => (
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
                    disabled={classWiseSubjects.length === 0 && true}
                    defaultValue=""
                    onChange={(e) => onSubjectChange(e)}
                    className="select w-full max-h-[32px] min-h-[30px] text-sm lg:text-[12px] xl:text-sm bg-gray-100 border-black focus:outline-0 rounded "
                  >
                    <option value="" disabled>
                      Select One
                    </option>
                    {classWiseSubjects.map((sub) => (
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
                    className="select w-full max-h-[32px] min-h-[30px] text-sm lg:text-[12px] xl:text-sm bg-gray-100 border-black focus:outline-0 rounded "
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
                  className="input border-black focus:outline-0 focus:border-primary w-full  h-[35px] rounded  "
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
                  className="input border-black focus:outline-0 focus:border-primary w-full h-[35px] rounded "
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
                      className="input border-black focus:outline-0 focus:border-primary w-full h-[35px] rounded "
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
                      className="input border-black focus:outline-0 focus:border-primary w-full h-[35px] rounded "
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
                        Define Question Set
                      </span>
                    </label>
                    <input
                      type="text"
                      className="input border-black focus:outline-0 focus:border-primary w-full h-[35px] rounded"
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
                      className="input border-black focus:outline-0 focus:border-primary w-full  h-[35px] rounded"
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
                      className="input border-black focus:outline-0 focus:border-primary w-full  h-[35px] rounded"
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

                  <div className="modal-action mt-[34px]">
                    <button
                      // htmlFor="my-modal-6"
                      type="submit"
                      className="btn bg-main hover:bg-primary w-full min-h-[30px] max-h-[36px] rounded"
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
      {/* <div className="">
          <h4 className="text-lg font-bold mb-3">Add Chapter</h4>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white px-4 pt-2 pb-8 rounded"
          >
            <div className="flex flex-col gap-y-1">
              <div className="form-control w-full mx-auto">
                <label className="label">
                  <span className="label-text text-sm">Select Class</span>
                </label>
                <select
                  className="select select-bordered w-full focus:outline-0"
                  {...register("student_class_id", {
                    required: {
                      value: true,
                      message: "Please Select Your Class",
                    },
                    onChange: (e) => onClassChange(e),
                  })}
                  defaultValue=""
                >
                  <option disabled value="">
                    Select
                  </option>
                  {AllClasses?.map((cls) => (
                    <option key={cls.id} value={cls.id} className="">
                      {cls.name}
                    </option>
                  ))}
                </select>
                {errors?.student_class_id?.type === "required" && (
                  <p className="text-red-500">
                    {errors?.student_class_id?.message}
                  </p>
                )}
              </div>
              <div className="my-2">
                <label className="label">
                  <span className="label-text text-sm">Select Subject</span>
                </label>
                <select
                  className="select select-bordered w-full focus:outline-0"
                  {...register("subject_id", {
                    required: {
                      value: true,
                      message: "Please Select Your Class",
                    },
                    onChange: (e) => onSubjectChange(e),
                  })}
                  defaultValue=""
                >
                  <option disabled value="">
                    Select
                  </option>
                  {classWiseSubjects?.map((subject) => (
                    <option key={subject.uuid} value={subject.uuid}>
                      {subject.name}
                    </option>
                  ))}
                </select>
                {errors?.subject_id?.type === "required" && (
                  <p className="text-red-500">{errors?.subject_id?.message}</p>
                )}
              </div>
              <div className="form-control w-full mx-auto">
                <label className="label">
                  <span className="label-text text-sm">Chapter Name</span>
                </label>
                <input
                  type="text"
                  className="input border-black focus:outline-0 focus:border-primary w-full  "
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Chapter Required",
                    },
                  })}
                />
                {errors?.name?.type === "required" && (
                  <p className="text-red-500">{errors?.name?.message}</p>
                )}
              </div>
              <div className="form-control w-full mx-auto">
                <label className="label">
                  <span className="label-text text-sm">Status</span>
                </label>
                <input
                  type="text"
                  className="input border-black focus:outline-0 focus:border-primary w-full  "
                  {...register("status", {
                    required: {
                      value: true,
                      message: "Status Required",
                    },
                  })}
                />
                {errors?.status?.type === "required" && (
                  <p className="text-red-500">{errors?.status?.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="btn bg-main hover:bg-primary mt-1"
              >
                Save
              </button>
            </div>
          </form>
        </div> */}
    </div>
  );
};

export default AllQuestions;
