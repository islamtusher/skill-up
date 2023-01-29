import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../../../Network/API";
import authHeader, { baseURL } from "../../../../Network/AuthApi";

const ClassEdit = () => {
  const { id, className } = useParams();
  const navigate = useNavigate();

  const [classes, setClasses] = useState([]);
  const [currentClass, setCurrentClass] = useState("");
  const [singleClass, setSingleClass] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [toggle, setToggle] = useState(false);
  const [classesHandle, setClassesHandle] = useState(false);

  const { register, handleSubmit, setValue, reset } = useForm(); // react form hooks
   

  //TODO: Load All Classes
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(baseURL + "student_classes", {
        headers: authHeader(),
      });
      setClasses(data?.data);
    })();
  }, [toggle, classesHandle]);

  //TODO: Load Single Class
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(baseURL + `student_classes/${id}`, {
        headers: authHeader(),
      });
      // setSingleClass(data?.data);
      reset(data.data);
    })();
  }, [id, reset]);

  // TODO: Handle form submit
  const onSubmit = async (data) => {
    const response = await axios.put(baseURL + `student_classes/${id}`,
      {
        name: data?.name,
        status: data?.status,
      },
      {
        headers: authHeader(),
      });
    if (response.status === 204) {
      toast.success("success");
      setToggle((prevState) => !prevState);
      console.log('reset');
      reset();
    } else {
      toast.error("Something went wrong");
    }
    console.log(data)
  };

  // TODO: Handle Class Delete
  const deleteClass = async (id) => {
    const response = await axios.get(baseURL + `student_classes/${id}`, {
      headers: authHeader(),
    });
    if (response.status === 204) {
      toast.success("Class Deleted Successfully");
      setClassesHandle(!classesHandle);
    } else {
      toast.error("Something went wrong");
    }
  };

  // TODO: Handle Class Edit Icon Events
  const editClass = (selectedClass) => {
    navigate(`/dashboard/class-edit/${selectedClass?.id}`);
    // console.log(selectedClass);
    // setSingleClass(selectedClass);
    // setValue('name', singleClass.name)
  };
  // console.log(singleClass);
  const handleChange = (event) => {
    // setInputValue(event.target.value);
    console.log(event.target.value);
  };

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
                        onClick={() => editClass(cls)}
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
          <h4 className="text-lg font-bold mb-3">Edit Class</h4>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white px-4 pt-2 pb-8 rounded"
          >
            {/* {console.log(singleClass)} */}
            {/* {singleClass?.name && ( */}
              <div className="flex flex-col gap-y-4">
                <div className="form-control w-full mx-auto">
                  <label className="label">
                    <span className="label-text text-sm">Class Name</span>
                  </label>
                  <input
                    // defaultValue={singleClass?.name}
                    type="text"
                    className="input border-black focus:outline-0 focus:border-primary w-full  "
                    {...register("name", {
                      // onChange: (value) => handleChange(value),
                    })}
                  />
                </div>
                <div className="form-control w-full mx-auto">
                  <label className="label">
                    <span className="label-text text-sm">Status</span>
                  </label>
                  <input
                    // defaultValue={singleClass?.status}
                    type="text"
                    className="input border-black focus:outline-0 focus:border-primary w-full  "
                    {...register("status")}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            {/* )} */}
          </form>
        </div>
      </div>
    </div>
  );
};;;

export default ClassEdit;
