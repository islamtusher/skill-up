import {
  faChartColumn,
  faPersonChalkboard,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="">
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
                  `flex items-center hover:bg-[#4B4F55] px-0
                  ${isActive ? "font-bold" : "font-thin"}`
                }
              >
                <FontAwesomeIcon className=" text-xl w-[34px]" icon={faUser} />
                Profile
              </NavLink>
            </li>
            <li>
              <div
                class="accordion hover:bg-[#4B4F55] px-0"
                id="accordionExample"
              >
                <div class="accordion-item ">
                  <h2
                    class="accordion-header collapsed relative flex items-center gap-x-3 transition font-thin "
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
                    class="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                    aria-controls="collapseOne"
                  >
                    <div class="accordion-body">
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
            <li>
              <NavLink
                to="/dashboard/teacherPortal"
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
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
