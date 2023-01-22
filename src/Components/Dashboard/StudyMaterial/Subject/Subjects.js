import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../../../Network/API";

const Subjects = () => {
  const [subjects, setSubjects] = useState([]);
  const [classes, setClasses] = useState([]);
  const [subjectHandle, setSubjectHandle] = useState(false);
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
      const { data } = await API.get("subject");
      setSubjects(data?.data);
      console.log(data?.data);
    })();
  }, [subjectHandle]);

  // TODO: GET All Classes
  useEffect(() => {
    (async () => {
      const { data } = await API.get("student_classes");
      setClasses(data?.data);
    })();
  }, []);

  // TODO: Handle form submit (Add Subject)
  const onSubmit = async (data) => {
    const response = await API.post("subject", data);
     if (response.status === 204) {
       toast.success("Subject Added Successfully");
       setSubjectHandle(!subjectHandle);
       reset();
     } else {
       toast.error("Something went wrong");
     }
  };

  // TODO: Handle Subject Edit
  const editSubject = async (id, className) => {
    const cls = className.split(" ")[0];
    navigate(`/dashboard/subject-edit/${className}/${id}`);
    // const data = await API.put(`student_subjects/${id}`);
    console.log(cls);
  };

  const deleteSubject = async (id) => {
    const response = await API.delete(`subject/${id}`);
    if (response.status === 204) {
      toast.success("Subject Deleted Successfully");
      setSubjectHandle(!subjectHandle);
    } else {
      toast.error("Something went wrong");
    }
  };
  const onClassChange = (e) => {
    setValue("student_class_id", e.target.value);
  }
  return (
    <div className="py-24 px-20">
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2 ">
          <h4 className="text-lg font-bold mb-3">Subject List</h4>
          <table className="table w-full rounded shadow-lg">
            <thead>
              <tr>
                <th>Index</th>
                <th>Subject Name</th>
                <th>Class</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {subjects?.map((subject, index) => {
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
                        onClick={() => deleteSubject(subject?.uuid)}
                        className=" text-xl w-[34px] text-red-600 mr-2 hover:cursor-pointer"
                        icon={faTrash}
                      />
                      <FontAwesomeIcon
                        onClick={() => editSubject(subject?.uuid, subject.name)}
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
          <h4 className="text-lg font-bold mb-3">Add Subject</h4>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white px-4 pt-2 pb-8 rounded"
          >
            <div className="flex flex-col gap-y-4">
              <div className="form-control w-full mx-auto">
                <label className="label">
                  <span className="label-text text-sm">Subject Name</span>
                </label>
                <input
                  type="text"
                  className="input border-black focus:outline-0 focus:border-primary w-full  "
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Subject Name Required",
                    },
                  })}
                />
                {errors?.name?.type === "required" && (
                  <p className="text-red-500">{errors?.name?.message}</p>
                )}
              </div>
              <div className="my-2">
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
                  {classes?.map((cls) => (
                    <option
                      key={cls.id}
                      value={cls.id}
                      className=""
                    >
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

export default Subjects;
