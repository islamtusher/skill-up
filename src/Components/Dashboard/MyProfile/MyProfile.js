import React from "react";
import { useSelector } from "react-redux";

const MyProfile = () => {
  const user = useSelector((state) => state.user.userInfo);
  console.log(user);
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="flex items-center justify-center gap-x-16 bg bg-white p-16 shadow-xl">
        <div className="">
          <img className="" src="../images/profile.jpeg" alt="" />
        </div>
        <div className="flex flex-col gap-y-2 font-[jost]">
          <h2>
            Student ID: <span className="text-xl font-bold"> {user?.id}</span>
          </h2>
          <h2>
            Full Name: <span className="text-xl font-bold"> {user?.name}</span>
          </h2>
          <h2>
            Phone Number:
            <span className="text-xl font-bold"> {user?.phone_no}</span>
          </h2>
          <h2>
            Address:
            <span className="text-xl font-bold"> Dhaka Bangladesh</span>
          </h2>
          <button className="btn bg-primary w-[150px] text-center mt-4">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
