import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { current } from "daisyui/src/colors";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import authHeader, { baseURL } from "../../../../Network/AuthApi";
import Loading from '../../.././Loading/Loading'

const Classes = () => {
  const navigate = useNavigate()
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [classesHandle, setClassesHandle] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(); // react form hooks

  // TODO: GET All Classes
  useEffect(() => {
    (async () => {
      setLoading((current) => !current);
      const { data } = await axios.get(baseURL + "student_classes", {
        headers: authHeader(),
      });
        setClasses(data?.data);
        setLoading((current) => !current);
    })();
  }, [classesHandle]);

  // TODO: Handle form submit
  const onSubmit = async (data) => {    
    const response = await axios.post(baseURL + "student_classes", data, {
      headers: authHeader(),
    });
     if (response.status === 204) {
       toast.success("Class Added Successfully");
       setClassesHandle(!classesHandle);
       reset();
     } else {
       toast.error("Something went wrong");
     }
  };
  
  // TODO: Handle Class Edit
  const editClass = async (id) => {
    navigate(`/dashboard/class-edit/${id}`)
  }   

  // TODO: Handle Class Delete
  const deleteClass = async (id) => {
    const response = await axios.delete(baseURL + `student_classes/${id}`, {
      headers: authHeader(),
    });
    if (response.status === 204) {
      toast.success("Class Deleted Successfully");
      setClassesHandle(!classesHandle);
    } else {
      toast.error("Something went wrong");
    }
  }   

  // Loading Showing
  // if (loading) {
  //   return <Loading></Loading>
  // }

  return (
    <div className="py-24 px-20">
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2 ">
          <h4 className="text-lg font-bold mb-3">Class List</h4>
          <table className="table w-full rounded shadow-lg">
            <thead>
              <tr>
                <th>IN</th>
                <th>Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                // loading ?
                //   <div className="w-full h-auto flex items-center justify-center">
                //     <div className=" w-10 h-10 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
                //   </div>
                //   :
                  classes?.map((cls, index) => {
                    return (
                      <tr key={index} className={`${index % 2 !== 0 && ""} `}>
                        <td>{index + 1}</td>
                        <td>{cls.name}</td>
                        <td
                          className={`${
                            cls.status === 1 ? "text-green-600" : "text-red-500"
                          }`}
                        >
                          {cls.status === 1 ? "Active" : "Deactivate"}
                        </td>
                        <td>
                          <FontAwesomeIcon
                            onClick={() => deleteClass(cls.id)}
                            className=" text-xl w-[34px] text-red-600 mr-2 hover:cursor-pointer"
                            icon={faTrash}
                          />
                          <FontAwesomeIcon
                            onClick={() => editClass(cls?.id)}
                            className=" text-xl w-[34px] text-blue-400 hover:cursor-pointer"
                            icon={faEdit}
                          />
                        </td>
                      </tr>
                    );
                  })
              }              
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

              <button type="submit" className="btn bg-main hover:bg-primary">
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