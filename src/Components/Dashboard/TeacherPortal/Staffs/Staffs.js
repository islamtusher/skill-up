import { faEdit, faLock, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import API from '../../../../Network/API';
import authHeader, { baseURL } from '../../../../Network/AuthApi';

const Staffs = () => {
  const navigate = useNavigate()
  const [staffs, setStaffs] = useState([]);
  const [teacherHandle, setTeacherHandle] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(); // react form hooks

  // TODO: Get All Teachers
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(baseURL + "teacher", {
        headers: authHeader(),
      });
      setStaffs(data?.data);
    })();
  }, [teacherHandle]);


  // TODO: Handle form submit (Post Teacher Data)
  const onSubmit = async (formData) => {
    const response = await axios.post(baseURL+"teacher", formData,{headers: authHeader()});
    if (response.status === 204) {
      toast.success("Teacher Added Successfully");
      setTeacherHandle(!teacherHandle);
      reset();
    } else {
      toast.error("Something went wrong");
    }
  };

  // TODO: Handle Teacher Delete
  const handleTeacherDeleted = async(id) => { 
    try {
      const response = await axios.delete(baseURL + `teacher/${id}`, {
        headers: authHeader(),
      });
      if (response.status === 204) {
        toast.success("Teacher Deleted Successfully");
        setTeacherHandle(!teacherHandle);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  // TODO: Handle Teacher Update
  const handleTeacherEdit = async (id) => {
    navigate(`/dashboard/staffsEdit/${id}`);
    console.log(id);
  };

  return (
    <div className="py-24 px-20">
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2 ">
          <h4 className="text-lg font-bold mb-3">Teacher List</h4>
          <table className="table w-full rounded shadow-lg">
            <thead>
              <tr>
                <th>Index</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {staffs?.map((staff, index) => {
                return (
                  <tr key={index} className={`${index % 2 !== 0 && ""} `}>
                    <td>{index + 1}</td>
                    <td>{staff.name}</td>
                    <td>{staff.phone_no}</td>
                    {/* <td
                      className={`${
                        staff.status === 1 ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {staff.status === 1 ? "Active" : "Deactive"}
                    </td> */}
                    <td>
                      <FontAwesomeIcon
                        title="Update"
                        onClick={() => handleTeacherEdit(staff.uuid)}
                        className=" text-xl w-[34px] text-blue-400 hover:cursor-pointer"
                        icon={faEdit}
                      />
                      <FontAwesomeIcon
                        title="Delete"
                        onClick={() => handleTeacherDeleted(staff.uuid)}
                        className=" text-xl w-[34px] text-red-600 hover:cursor-pointer"
                        icon={faTrash}
                      />
                      <FontAwesomeIcon
                        title="Permission"
                        className=" text-xl w-[34px] text-green-500 hover:cursor-pointer"
                        icon={faLock}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="">
          <h4 className="text-lg font-bold mb-3">Add Teacher</h4>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white px-4 pt-2 pb-8 rounded"
          >
            <div className="flex flex-col gap-y-2">
              <div className="form-control w-full mx-auto">
                <label className="label">
                  <span className="label-text text-sm">Teacher Name</span>
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
                  <span className="label-text text-sm">Phone Number</span>
                </label>
                <input
                  type="tel"
                  className="input border-black focus:outline-0 focus:border-primary w-full  "
                  {...register("phone_no", {
                    required: {
                      value: true,
                      message: "Phone Number Required",
                    },
                  })}
                />
                {errors?.phone_no?.type === "required" && (
                  <p className="text-red-500">{errors?.phone_no?.message}</p>
                )}
              </div>
              <div className="form-control w-full mx-auto">
                <label className="label">
                  <span className="label-text text-sm">Password</span>
                </label>
                <input
                  type="password"
                  className="input border-black focus:outline-0 focus:border-primary w-full  "
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Status Required",
                    },
                  })}
                />
                {errors?.password?.type === "required" && (
                  <p className="text-red-500">{errors?.password?.message}</p>
                )}
              </div>
              <div className="form-control w-full mx-auto">
                <label className="label">
                  <span className="label-text text-sm">Confirm Password</span>
                </label>
                <input
                  type="password"
                  className="input border-black focus:outline-0 focus:border-primary w-full  "
                  {...register("password_confirmation", {
                    required: {
                      value: true,
                      message: "Confirm Password Required",
                    },
                  })}
                />
                {errors?.password_confirmation?.type === "required" && (
                  <p className="text-red-500">
                    {errors?.password_confirmation?.message}
                  </p>
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

export default Staffs;