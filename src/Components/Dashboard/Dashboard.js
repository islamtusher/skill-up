import {
  faBook,
  faChartColumn,
  faPersonChalkboard,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
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
                            <div className=" w-[34px]"/>
                            Chapters
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
                    Admin Settings
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
            <li>
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
            </li>
          </ul>
          {/* <div
            className="w-60 h-full pt-[70px] bg-[#34373B] bg-white shadow-md absolute"
            id="sidenavSecExample"
          >
            <div className="pt-4 pb-2 px-6">
              <a href="#!">
                <div className="flex items-center">
                  <div className="shrink-0">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                      className="rounded-full w-10"
                      alt="Avatar"
                    />
                  </div>
                  <div className="grow ml-3">
                    <p className="text-sm font-semibold text-blue-600">
                      Jason McCoel
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <ul className="relative px-1">
              <li className="relative">
                <a
                  className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    className="w-3 h-3 mr-3"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                    ></path>
                  </svg>
                  <span>Non-collapsible link</span>
                </a>
              </li>
              <li className="relative" id="sidenavSecEx2">
                <Link
                  to=""
                  className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSidenavSecEx2"
                  aria-expanded="false"
                  aria-controls="collapseSidenavSecEx2"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    className="w-3 h-3 mr-3"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                  >
                    <path
                      fill="currentColor"
                      d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
                    ></path>
                  </svg>
                  <span>Collapsible item 1</span>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    className="w-3 h-3 ml-auto"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                    ></path>
                  </svg>
                </Link>
                <ul
                  className="relative accordion-collapse collapse"
                  id="collapseSidenavSecEx2"
                  aria-labelledby="sidenavSecEx2"
                  data-bs-parent="#sidenavSecExample"
                >
                  <li className="relative">
                    <Link
                      to="#"
                      className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                    >
                      Link 1
                    </Link>
                  </li>
                  <li className="relative">
                    <Link
                      to="#"
                      className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="primary"
                    >
                      Link 2
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="relative" id="sidenavSecEx3">
                <Link
                  to=""
                  className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSidenavSecEx3"
                  aria-expanded="false"
                  aria-controls="collapseSidenavSecEx3"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    className="w-3 h-3 mr-3"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
                    ></path>
                  </svg>
                  <span>Collapsible item 2</span>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    className="w-3 h-3 ml-auto"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                    ></path>
                  </svg>
                </Link>
                <ul
                  className="relative accordion-collapse collapse"
                  id="collapseSidenavSecEx3"
                  aria-labelledby="sidenavSecEx3"
                  data-bs-parent="#sidenavSecExample"
                >
                  <li className="relative">
                    <a
                      href="#!"
                      className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="primary"
                    >
                      Link 3
                    </a>
                  </li>
                  <li className="relative">
                    <a
                      href="#!"
                      className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="primary"
                    >
                      Link 4
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="text-center bottom-0 absolute w-full">
              <p className="py-2 text-sm text-gray-700">tailwind-elements.com</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
