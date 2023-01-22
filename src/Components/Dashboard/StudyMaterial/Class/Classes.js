import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../../../Network/API";

const Classes = () => {
  const navigate = useNavigate()
  const [classes, setClasses] = useState([]);
  const [classeHandle, setClasseHandle] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(); // react form hooks

  // TODO: GET All Classes
  useEffect(() => {
    (async () => {
      const { data } = await API.get("student_classes");
      setClasses(data?.data);
    })();
  }, [classeHandle]);

  // TODO: Handle form submit
  const onSubmit = async (data) => {
    const response = await API.post("student_classes", data);
     if (response.status === 204) {
       toast.success("Class Added Successfully");
       setClasseHandle(!classeHandle);
       reset();
     } else {
       toast.error("Something went wrong");
     }
  };
  
  // TODO: Handle Class Edit
  const editClass = async (id, className) => {
    // const cls = className.split(" ")[0]
    navigate(`/dashboard/class-edit/${id}`)
    // const data = await API.put(`student_classes/${id}`);
    // console.log(cls)
  }   


  // TODO: Handle Class Delete
  const deleteClass = async (id) => {
    const response = await API.delete(`student_classes/${id}`);
    if (response.status === 204) {
      toast.success("Class Deleted Successfully");
      setClasseHandle(!classeHandle);
    } else {
      toast.error("Something went wrong");
    }
  }   

  return (
    <div className="py-24 px-20">
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2 ">
          <h4 className="text-lg font-bold mb-3">Class List</h4>
          <table className="table w-full rounded shadow-lg">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {classes?.map((cls, index) => {
                return (
                  <tr key={index} className={`${index % 2 !== 0 && ""} `}>
                    <td>{index + 1}</td>
                    <td>{cls.name}</td>
                    <td
                      className={`${
                        cls.status === 1 ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {cls.status === 1 ? "Active" : "Deactive"}
                    </td>
                    <td>
                      <FontAwesomeIcon
                        onClick={() => deleteClass(cls.id)}
                        className=" text-xl w-[34px] text-red-600 mr-2 hover:cursor-pointer"
                        icon={faTrash}
                      />
                      <FontAwesomeIcon
                        onClick={() => editClass(cls?.id, cls.name)}
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
          <h4 className="text-lg font-bold mb-3">Add Class</h4>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white px-4 pt-2 pb-8 rounded"
          >
            <div className="flex flex-col gap-y-4">
              <div className="form-control w-full mx-auto">
                <label className="label">
                  <span className="label-text text-sm">Class Name</span>
                </label>
                <input
                  type="text"
                  className="input border-black focus:outline-0 focus:border-primary w-full  "
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Class Name Required",
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
};;

export default Classes;