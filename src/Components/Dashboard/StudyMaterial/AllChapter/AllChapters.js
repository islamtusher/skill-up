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
import './AllChapters.css';

const AllChapters = () => {
  const [allSubjectsChapters, setAllSubjectsChapters] = useState([]);
  const [chapterHandle, setChapterHandle] = useState(false);
  const [AllClasses, setAllClasses] = useState([]);
  const [classWiseSubjects, setClassWiseSubjects] = useState([]);
  const [pagination, setPagination] = useState({});

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm(); // react form hooks

  // TODO: Load All Chapters
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(baseURL + `chapter?page=1`, {
        headers: authHeader(),
      });
      setAllSubjectsChapters(data?.data);
      setPagination({
        current_page: data.meta.current_page,
        totalPage: data.meta.last_page,
        total: data.meta.total,
      });
      console.log(data);
    })();
  }, [chapterHandle]);
  console.log(pagination);

  // TODO: GET All Classes
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(baseURL + "student_classes", {
        headers: authHeader(),
      });
      setAllClasses(data?.data);
    })();
  }, []);

  //TODO: Handle Page Button click
  const paginationHandler = async(page) => {
    try {
      const { data } = await axios.get(baseURL + `chapter?page=${page.selected + 1}`, {
        headers : authHeader()
      });
      setAllSubjectsChapters(data?.data);
    } catch (error) {
      toast.error('Something went wrong')
    } 
  };

  // TODO: Handle form submit (Add Subject)
  const onSubmit = async (data) => {
    console.log(data);
    const response = await axios.post(baseURL + "chapter", data, {
      headers: authHeader(),
    });
    if (response.status === 204) {
      toast.success("Chapter Added Successfully");
      setChapterHandle(!chapterHandle);
      reset();
    } else {
      toast.error("Something went wrong");
    }
  };

  //TODO: handle class-change onSelect
  const onClassChange = async (e) => {
    const response = await axios.get(
      baseURL + `class_wise_subject/${e.target.value}`,
      { headers: authHeader() }
    );
    setClassWiseSubjects(response.data.data.subjects);
  };

  //TODO: handle subject-change onSelect
  const onSubjectChange = async (e) => {
    const response = await axios.get(
      baseURL + `subject_wise_chapter/${e.target.value}`,
      { headers: authHeader() }
    );
    setValue("subjects_id", e.target.value);
    setAllSubjectsChapters(response.data.data.chapters);
    console.log(response.data.data.chapters);
  };

  //TODO: Handle Chapter Delete
  const handleChapterDelete = async (id) => {
    const response = await axios.delete(baseURL + `chapter/${id}`, {
      headers: authHeader(),
    });
    if (response.status === 204) {
      setChapterHandle(!chapterHandle)
      toast.success("Chapter Successfully Deleted");
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
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2 ">
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
          </div>
          <h4 className="text-lg font-bold mb-3">Chapter List</h4>
          <table className="table w-full rounded shadow-lg">
            <thead>
              <tr>
                <th>IN</th>
                <th>Chapter Name</th>
                <th>Subject Name</th>
                <th>Class Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allSubjectsChapters?.map((chapter, index) => {
                return (
                  <tr key={index} className={`${index % 2 !== 0 && ""} `}>
                    <td>{index + 1}</td>
                    <td>{chapter.name}</td>
                    <td>{chapter?.subject?.name}</td>
                    <td>{chapter?.class?.name}</td>
                    <td
                      className={`${
                        chapter.status === 1 ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {chapter.status === 1 ? "Active" : "Deactivate"}
                    </td>
                    <td>
                      <FontAwesomeIcon
                        onClick={() => handleChapterDelete(chapter?.uuid)}
                        className=" text-xl w-[34px] text-red-600 mr-2 hover:cursor-pointer"
                        icon={faTrash}
                      />
                      <FontAwesomeIcon
                        onClick={() => handleChapterUpdate(chapter?.uuid)}
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
            {allSubjectsChapters?.length > 0 && (
              <nav>
                <ReactPaginate
                  previousLabel={
                    <span className=" page-link page-link-icon mr-2">
                      Previous
                    </span>
                  }
                  nextLabel={
                    <span className=" page-link page-link-icon ml-2 ">
                      Next
                    </span>
                  }
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  activeClassName={"active"}
                  containerClassName={"pagination pagination-space m-b-0"}
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  initialPage={ pagination.current_page ? pagination?.current_page -1 : 1}
                  pageCount={pagination?.totalPage ? pagination.totalPage : 1}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={paginationHandler}
                />
              </nav>
            )}
          </div>
        </div>
        <div className="">
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
        </div>
      </div>
    </div>
  );
};

export default AllChapters;
