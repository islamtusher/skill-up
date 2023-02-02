import {
  faBook,
  faChartColumn,
  faPersonChalkboard,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const user = useSelector((state) => state.user.userInfo);
  // console.log(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-slate-100 ">
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side w-[200px] ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu pl-2 overflow-y-auto bg-[#34373B] py-[80px] h-screen text-white">
          <li>
            <NavLink
              to="/dashboard/myprofile"
              className={({ isActive }) =>
                `flex items-center hover:bg-[#4B4F55] px-0 ${isActive ? "font-bold" : "font-thin"}`
              }
            >
              <FontAwesomeIcon className=" text-xl w-[34px]" icon={faUser} />
              Profile
            </NavLink>
          </li>
          {user.user_type === 3 && (
            <li>
              <div
                className="accordion hover:bg-[#4B4F55] px-0"
                id="accordionExample"
              >
                <div className="accordion-item ">
                  <h2
                    className="accordion-header collapsed relative flex items-center gap-x-3 transition font-thin "
                    id="headingOne"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-controls="collapseOne"
                  >
                    <FontAwesomeIcon
                      className=" text-xl w-[34px]"
                      icon={faChartColumn}
                    />
                    Performance
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                    aria-controls="collapseOne"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          <NavLink
                            to="/dashboard/mcqChart"
                            className={({ isActive }) =>
                              `flex items-center hover:font-bold transition pt-2 px-0 pb-0 
                          ${isActive ? "font-bold" : "font-thin"}`
                            }
                          >
                            <div className=" w-[34px]" />
                            MCQ Result
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/dashboard/modelTest"
                            className={({ isActive }) =>
                              `flex items-center hover:font-bold transition pt-2 px-0 pb-0 
                          ${isActive ? "font-bold" : "font-thin"}`
                            }
                          >
                            <div className=" w-[34px]" />
                            Model Test
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )}
          {(user.user_type === 1 || user.user_type === 2) && (
            <>
              {user.user_type === 1 && (
                <>
                  <li>
                    <div
                      className="accordion hover:bg-[#4B4F55] px-0"
                      id="studyMaterial"
                    >
                      <div className="accordion-item ">
                        <h2
                          className="accordion-header collapsed relative flex items-center gap-x-3 transition font-thin "
                          id="studyMaterial"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseStudyMaterial"
                          aria-controls="collapseOne"
                        >
                          <FontAwesomeIcon
                            className=" text-xl w-[34px]"
                            icon={faBook}
                          />
                          Study Material
                        </h2>
                        <div
                          id="collapseStudyMaterial"
                          className="accordion-collapse collapse"
                          aria-labelledby="studyMaterial"
                          data-bs-parent="#studyMaterial"
                          aria-controls="collapseOne"
                        >
                          <div className="accordion-body">
                            <ul>
                              <li>
                                <NavLink
                                  to="/dashboard/classes"
                                  className={({ isActive }) =>
                                    `flex items-center hover:font-bold transition pt-2 px-0 pb-0 
                          ${isActive ? "font-bold" : "font-thin"}`
                                  }
                                >
                                  <div className=" w-[34px]" />
                                  Classes
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/dashboard/subjects"
                                  className={({ isActive }) =>
                                    `flex items-center hover:font-bold transition pt-2 px-0 pb-0 
                          ${isActive ? "font-bold" : "font-thin"}`
                                  }
                                >
                                  <div className=" w-[34px]" />
                                  Subjects
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/dashboard/chapters"
                                  className={({ isActive }) =>
                                    `flex items-center hover:font-bold transition pt-2 px-0 pb-0 
                          ${isActive ? "font-bold" : "font-thin"}`
                                  }
                                >
                                  <div className=" w-[34px]" />
                                  Chapters
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/dashboard/questions"
                                  className={({ isActive }) =>
                                    `flex items-center hover:font-bold transition pt-2 px-0 pb-0 
                                    ${isActive ? "font-bold" : "font-thin"}`
                                  }
                                >
                                  <div className=" w-[34px]" />
                                  Questions
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="accordion hover:bg-[#4B4F55] px-0"
                      id="adminSettings"
                    >
                      <div className="accordion-item ">
                        <h2
                          className="accordion-header collapsed relative flex items-center gap-x-3 transition font-thin "
                          id="adminSettings"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseAdminSettings"
                          aria-controls="collapseOne"
                        >
                          <FontAwesomeIcon
                            className=" text-xl w-[34px]"
                            icon={faBook}
                          />
                          Human Resource
                        </h2>
                        <div
                          id="collapseAdminSettings"
                          className="accordion-collapse collapse"
                          aria-labelledby="adminSettings"
                          data-bs-parent="#adminSettings"
                          aria-controls="collapseOne"
                        >
                          <div className="accordion-body">
                            <ul>
                              <li>
                                <NavLink
                                  to="/dashboard/staffs"
                                  className={({ isActive }) =>
                                    `flex hover:font-bold items-center pt-2 px-0 pb-0 
                          ${isActive ? "font-bold " : "font-thin"}`
                                  }
                                >
                                  <div className=" w-[34px]" />
                                  All Teachers
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/dashboard/assignTeacher"
                                  className={({ isActive }) =>
                                    `flex items-center hover:font-bold transition pt-2 px-0 pb-0 
                          ${isActive ? "font-bold" : "font-thin"}`
                                  }
                                >
                                  <div className=" w-[34px]" />
                                  Assign Teacher
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </>
              )}
              {/* <li>
                <NavLink
                  to="/dashboard/addQuestion"
                  className={({ isActive }) =>
                    `flex items-center hover:bg-[#4B4F55] px-0
                ${isActive ? "font-bold text-white" : "font-thin"}`
                  }
                >
                  <FontAwesomeIcon
                    className=" text-xl w-[34px]"
                    icon={faPersonChalkboard}
                  />
                  Teacher Portal
                </NavLink>
              </li> */}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
