import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const TeacherPortal = () => {
  const user = useSelector((state) => state.user.userInfo); // current User
  

  return (
    <div className="min-h-screen flex items-center justify-center pt-[55px]">
      <div className="hero ">
        <div className="hero-content px-6 p-4 bg-white shadow-xl">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default TeacherPortal;
