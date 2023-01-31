import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import authHeader, { baseURL } from "../../../../Network/AuthApi";

const ChapterEdit = () => {
  const [allSubjectsChapters, setAllSubjectsChapters] = useState([]);
  const [classes, setClasses] = useState([]);
  const [chapterHandle, setChapterHandle] = useState(false);
  const [AllClasses, setAllClasses] = useState([]);
  const [classWiseSubjects, setClassWiseSubjects] = useState([]);
  const [chapters, setChapters] = useState([]);
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
      const { data } = await axios.get(baseURL + "chapter", {
        headers: authHeader(),
      });
      setAllSubjectsChapters(data?.data);
    })();
  }, [chapterHandle]);

  // TODO: GET All Classes
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(baseURL + "student_classes", {
        headers: authHeader()
      });
      setAllClasses(data?.data);
    })();
  }, []);

  // TODO: Handle form submit (Add Subject)
  const onSubmit = async (data) => {
    console.log(data);
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
  };

  //TODO: Handle Chapter Delete
  const handleChapterDelete = async (id) => {
    
  };

  //TODO: Handle Chapter Update
    const handleChapterUpdate = async (id) => {
    //   const response = await axios.put(
    //     baseURL + `chapter/${id}`,
    //     { headers: authHeader() }
    //   );
    //   console.log(response.data.data);
    };
  return (
    <div className="py-24 px-20">
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
                title="Select Classs At First"
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
                <th>Index</th>
                <th>Chapter Name</th>
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
                    <td
                      className={`${
                        chapter.status === 1 ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {chapter.status === 1 ? "Active" : "Deactive"}
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
        </div>
        <div className="">
          <h4 className="text-lg font-bold mb-3">Edit Chapter</h4>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white px-4 pt-2 pb-8 rounded"
          >
            <div className="flex flex-col gap-y-1">
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
              <button type="submit" className="btn btn-primary mt-1">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChapterEdit;
