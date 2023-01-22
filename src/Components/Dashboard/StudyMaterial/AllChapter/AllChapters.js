import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../../../Network/API";

const AllChapters = () => {
  const [allSubjectsChapters, setAllSubjectsChapters] = useState([]);
  const [classes, setClasses] = useState([]);
  const [chapterHandle, setchapterHandle] = useState(false);
  const [AllClasses, setAllClasses] = useState([]);
  const [classWiseSubjeccts, setClassWiseSubjeccts] = useState([]);
  const [chapters, setChapters] = useState([]);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm(); // react form hooks

    useEffect(() => {
      (async () => {
        const { data } = await API.get("chapter");
        setAllSubjectsChapters(data?.data);
        console.log(data?.data);
      })();
    }, []);

  // TODO: GET All Classes
  useEffect(() => {
    (async () => {
      const { data } = await API.get("student_classes");
      setAllClasses(data?.data);
    })();
  }, []);

  // TODO: Handle form submit (Add Subject)
    const onSubmit = async (data) => {
      console.log(data)
    // const response = await API.post("chapter", data);
    // if (response.status === 204) {
    //   toast.success("Chapter Added Successfully");
    //   setchapterHandle(!chapterHandle);
    //   reset();
    // } else {
    //   toast.error("Something went wrong");
    // }
  };

  //   const deleteSubject = async (id) => {
  //     const response = await API.delete(`subject/${id}`);
  //     if (response.status === 204) {
  //       toast.success("Subject Deleted Successfully");
  //       setSubjectHandle(!subjectHandle);
  //     } else {
  //       toast.error("Something went wrong");
  //     }
  //   };

  //TODO: handle class-change onSelect
  
  const onClassChange = async (e) => {
    const response = await API.get(`class_wise_subject/${e.target.value}`);
    setClassWiseSubjeccts(response.data.data.subjects);
    
    console.log(response.data.data);
  };

  //TODO: handle subject-change onSelect
  const onSubjectChange = async (e) => {
    const response = await API.get(`subject_wise_chapter/${e.target.value}`);
    setValue("subjects_id", e.target.value);
    setAllSubjectsChapters(response.data.data.chapters);
    console.log(response.data.data);
  };
  return (
    <div className="py-24 px-20">
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2 ">
          <div className="flex gap-x-4 items-center mb-4">
            <div className="">
              <label className="label">
                <span className="label-text text-sm">Whice Class ?</span>
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
                <span className="label-text text-sm">Whice Subject ?</span>
              </label>
              <select
                disabled={classWiseSubjeccts.length === 0 && true}
                defaultValue= ""
                title="Select Classs At First"
                onChange={(e) => onSubjectChange(e)}
                className="select border-black focus:outline-0 w-full "
              >
                <option value="" disabled>
                  Select One
                </option>
                {classWiseSubjeccts.map((sub) => (
                  <option key={sub.uuid} value={sub.uuid}>
                    {sub.name}{" "}
                  </option>
                ))}
              </select>
            </div>
            {/* <div className="mt-8 text-end">
                <button onClick={()=>navigate()} className='btn bg-success'> Add Chapter</button>
            </div> */}
          </div>
          <h4 className="text-lg font-bold mb-3">Chapter List</h4>
          <table className="table w-full rounded shadow-lg">
            <thead>
              <tr>
                <th>Index</th>
                <th>Chapter Name</th>
                <th>Class</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allSubjectsChapters?.map((subject, index) => {
                return (
                  <tr key={index} className={`${index % 2 !== 0 && ""} `}>
                    <td>{index + 1}</td>
                    <td>{subject.name}</td>
                    <td>{subject.class}</td>
                    <td
                      className={`${
                        subject.status === 1 ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {subject.status === 1 ? "Active" : "Deactive"}
                    </td>
                    <td>
                      <FontAwesomeIcon
                        // onClick={() => deleteSubject(subject?.uuid)}
                        className=" text-xl w-[34px] text-red-600 mr-2 hover:cursor-pointer"
                        icon={faTrash}
                      />
                      <FontAwesomeIcon
                        // onClick={() => editSubject(subject?.uuid, subject.name)}
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
          <h4 className="text-lg font-bold mb-3">Add Chapter</h4>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white px-4 pt-2 pb-8 rounded"
          >
            <div className="flex flex-col gap-y-4">
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
                  {...register("subjects_id", {
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
                  {classWiseSubjeccts?.map((subject) => (
                    <option key={subject.uuid} value={subject.uuid}>
                      {subject.name}
                    </option>
                  ))}
                </select>
                {errors?.subjects_id?.type === "required" && (
                  <p className="text-red-500">{errors?.subjects_id?.message}</p>
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

              <button type="submit" className="btn btn-primary">
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
