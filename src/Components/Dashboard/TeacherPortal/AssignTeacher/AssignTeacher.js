import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import authHeader, { baseURL } from '../../../../Network/AuthApi';

const AssignTeacher = () => {
  const [staffs, setStaffs] = useState([]);
  const [classes, setClasses] = useState([]);
  const [assignedTeacher, setAssignedTeacher] = useState([]);
  const [availableSubjects, setAvailableSubjeccts] = useState([]);
  const [teacherAssignHandle, setTeacherrAssignHandle] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm(); // react form hook

  // TODO: Get All Teachers
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(baseURL+"teacher",{
        headers: authHeader(),
      });
      setStaffs(data?.data);
    })();
  }, []);

  // TODO: Get All Assigned Teacher Data
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(baseURL+"teach-assign",{
        headers: authHeader(),
      });
      setAssignedTeacher(data?.data);
    })();
  }, [teacherAssignHandle]);

  console.log(assignedTeacher);

  // TODO: GET All Classes
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(baseURL+"student_classes",{
        headers: authHeader(),
      });
      setClasses(data?.data);
    })();
  }, []);

  //TODO: Handle Teacher Changes
  const onTeacherChange = (e) => {
    setValue("teacher_id", e.target.value); // set the value on from Data
  };

  // TODO: handle class-change AND Load subjects
  const onClassChange = async (e) => {
    const response = await axios.get(baseURL+`class_wise_subject/${e.target.value}`,{
        headers: authHeader(),
      });
    setAvailableSubjeccts(response.data.data.subjects);
    setValue("class_id", e.target.value); // set the value on from Data
  };

  // TODO: Handle Subject Change
  const handleSubjectChange = (e) => {
    setValue("subject_id", e.target.value); // set the value on from Data
  };

  // TODO: Handle form submit
  const onSubmit = async (data) => {
    const response = await axios.post(baseURL+"teach-assign", data,{
        headers: authHeader(),
      });
    if (response.status === 204) {
      setTeacherrAssignHandle(!teacherAssignHandle);
      toast.success("Teacher Assign Successfully");
      reset()
    } else {
      toast.error("Something went wrong");
    }
  };

  // TODO: Handle Delete assigned-Teacher
  const handleEditAssignedTeacher = (id) => {
    // teach - assign / 3
    console.log(id);
  };

  // TODO: Handle Delete assigned-Teacher
  const handleDeleteAssignedTeacher = async (id) => {
    const response = await axios.delete(baseURL+`teach-assign/${id}`,{
        headers: authHeader(),
      });
    if (response.status === 204) {
      setTeacherrAssignHandle(!teacherAssignHandle);
      toast.success("Teacher Delete Successfully");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="py-24 px-12">
      <div className="grid grid-cols-4 gap-10">
        <div className="col-span-3 ">
          <h4 className="text-lg font-bold mb-3">Teacher List</h4>
          <table className="table w-full rounded shadow-lg">
            <thead>
              <tr>
                <th>Index</th>
                <th>Name</th>
                <th>Subject</th>
                <th>Class</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {assignedTeacher.map((teacher, index) => {
                return (
                  <tr className="" key={index}>
                    <td>{index + 1}</td>
                    <td>{teacher.teacher_name}</td>
                    <td>{teacher.subject}</td>
                    <td>{teacher.class}</td>
                    <td className="text-green-500">Active</td>
                    <td>
                      <FontAwesomeIcon
                        onClick={() => handleDeleteAssignedTeacher(teacher.id)}
                        className=" text-xl w-[34px] text-red-600 mr-2 hover:cursor-pointer"
                        icon={faTrash}
                      />
                      <FontAwesomeIcon
                        onClick={() => handleEditAssignedTeacher(teacher.id)}
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
          <h4 className="text-lg font-bold mb-3">Assign Teacher</h4>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white px-4 pt-2 pb-8 rounded"
          >
            <div className="my-2">
              <label className="label">
                <span className="label-text text-sm">Select Teacher</span>
              </label>
              <select
                className="select select-bordered w-full focus:outline-0"
                {...register("teacher_id", {
                  required: {
                    value: true,
                    message: "Please Select Your Class",
                  },
                  onChange: (e) => onTeacherChange(e),
                })}
                defaultValue=""
              >
                <option disabled value="">
                  Select
                </option>
                {staffs?.map((teacher) => (
                  <option key={teacher.uuid} value={teacher.uuid} className="">
                    {teacher.name}
                  </option>
                ))}
              </select>
              {errors?.teacher_id?.type === "required" && (
                <p className="text-red-500">{errors?.teacher_id?.message}</p>
              )}
            </div>
            <div className="my-2">
              <label className="label">
                <span className="label-text text-sm">Assign Class</span>
              </label>
              <select
                className="select select-bordered w-full focus:outline-0"
                {...register("class_id", {
                  required: {
                    value: true,
                    message: "Please Select Your Class",
                  },
                  onChange: (e) => onClassChange(e),
                })}
                defaultValue=""
              >
                <option disabled value="">
                  Class
                </option>
                {classes?.map((cls) => (
                  <option key={cls.id} value={cls.id}>
                    {cls.name}
                  </option>
                ))}
              </select>
              {errors?.class_id?.type === "required" && (
                <p className="text-red-500">{errors?.class_id?.message}</p>
              )}
            </div>
            <div className="my-2">
              <label className="label">
                <span className="label-text text-sm">Assign Subject</span>
              </label>
              <select
                disabled={availableSubjects.length === 0 && true}
                className={`select select-bordered w-full focus:outline-0`}
                title={
                  availableSubjects.length === 0 ? "Select Class At First" : ""
                }
                {...register("subject_id", {
                  required: {
                    value: true,
                    message: "Please Select Subject",
                  },
                  onChange: (e) => handleSubjectChange(e),
                })}
                defaultValue=""
              >
                <option value="">Subject</option>
                {availableSubjects.map((sub) => (
                  <option key={sub.uuid} value={sub.uuid}>
                    {sub.name}
                  </option>
                ))}
              </select>
              {errors?.subject_id?.type === "required" && (
                <p className="text-red-500">{errors?.subject_id?.message}</p>
              )}
            </div>
            <button type="submit" className="btn bg-success w-full">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};;

export default AssignTeacher;