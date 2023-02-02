import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogout } from "../../../redux/apiCalls/apiCall";
import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();

  //TODO: Handle User Log Out
  const handleLogOut = () => userLogout(dispatch, navigate)
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-white shadow-lg">
      <div className="navbar lg:max-w-[1130px] xl:max-w-[1320px] py-0 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
              {/* E Acadimic */}
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">About Us</Link>
              </li>
              <li>
                <Link to="">Courses</Link>
              </li>
              <li>
                <Link to="/mcq">Quiz</Link>
              </li>
              <li>
                <Link to="">Courses</Link>
              </li>
              <li>
                <Link to="">Teachers</Link>
              </li>
              <li>
                <Link to="">Contact</Link>
              </li>
            </ul>
          </div>
          <Link to="" className="w-[100px] text-lg lg:text-[15px] ">
            {/* <img src="https://shikho.com/shikho-logo.svg" alt="" /> */}E
            Academic
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal lg:text-[11px] xl:text-[12px] 2xl:text-[13px] font-[jost] p-0">
            <li className=" ">
              <Link
                className="font-bold tracking-[1px] px-2 hover:bg-transparent hover:text-success uppercase"
                to=""
              >
                {/* হোম */}
                Home
              </Link>
            </li>
            {/* {user?.phone_no && ( */}
            <>
              <li>
                <Link
                  className="font-bold tracking-[1px] hover:bg-transparent hover:text-success px-2 uppercase"
                  to="/mcq"
                >
                  {/* একাডেমিক */}
                  Academic
                </Link>
              </li>
              <li className="">
                <label
                  tabIndex={0}
                  className="font-bold tracking-[1px] hover:bg-transparent hover:text-success px-2 uppercase"
                >
                  {/* আইসিটি স্কিলস */}
                  Soft Skills
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li className="">
                    <label
                      tabIndex={0}
                      className="font-bold tracking-[1px] hover:bg-transparent hover:text-success px-2 "
                    >
                      {/* আইসিটি স্কিলস */}
                      ICT Skills
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-[15px] "
                    >
                      <li className=" dropdown-right text-black">
                        <label tabIndex={0} className="">
                          MS Office
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 "
                        >
                          <li>
                            <Link className="" to="/msword">
                              MS Word
                            </Link>
                          </li>
                          <li>
                            <Link className="" to="/msexcle">
                              MS Excel
                            </Link>
                          </li>
                          <li>
                            <Link className="" to="/mspowerpoint">
                              MS Power-Point
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link className="text-black " to="webdesign">
                          Web Design
                        </Link>
                        <Link className="text-black " to="graphicsdesign">
                          Graphics Design
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className=" ">
                    <label
                      tabIndex={0}
                      className="font-bold tracking-[1px] hover:bg-transparent hover:text-success px-2 "
                    >
                      {/* ল্যাংগুয়েজ স্কিলস */}
                      Language Skills
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-black text-[15px] "
                    >
                      <li>
                        <label tabIndex={0} className="">
                          English
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 "
                        >
                          <li>
                            <Link className="" to="/english/grammar">
                              Grammar
                            </Link>
                          </li>
                          <li>
                            <Link className="" to="/english/spoken-english">
                              Spoken English
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <label tabIndex={0} className="">
                          Arabic
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 "
                        >
                          <li>
                            <Link className="" to="/quran/norani">
                              Noorani
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <label
                  tabIndex={0}
                  className="font-bold tracking-[1px] hover:bg-transparent hover:text-success px-2 uppercase"
                >
                  {/* প্রফেশনাল ট্রেনিং */}
                  Professional Training
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-black text-[15px] "
                >
                  <li>
                    <Link className="" to="">
                      Accounting and Finance
                    </Link>
                  </li>
                  <li>
                    <Link className="" to="">
                      Supply Chain management
                    </Link>
                  </li>
                  <li>
                    <Link className="" to="">
                      Project Management
                    </Link>
                  </li>
                  <li>
                    <Link className="" to="">
                      Emotional Intelligence
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <label
                  tabIndex={0}
                  className="font-bold tracking-[1px] hover:bg-transparent hover:text-success px-2 uppercase"
                >
                  {/* প্রফেশনাল ট্রেনিং */}
                  Admission Test
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-black text-[15px] "
                >
                  <li>
                    <Link className="" to="">
                      University Admission Test
                    </Link>
                  </li>
                  <li>
                    <Link className="" to="">
                      College Admission Test
                    </Link>
                  </li>
                  <li>
                    <Link className="" to="">
                      School Admission Test
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="http://school.ajratech.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold tracking-[1px] hover:bg-transparent hover:text-success px-2 uppercase"
                >
                  {/* এডমিশন টেস্ট */}
                  School Management
                </a>
              </li>
              <li>
                <Link
                  to=""
                  className="font-bold tracking-[1px] hover:bg-transparent hover:text-success px-2 uppercase"
                >
                  {/* আমাদের সম্পর্কে */}
                  About Us
                </Link>
              </li>
            </>
            {/* )} */}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="">
            {user?.name ? (
              <>
                <div className="flex justify-center">
                  <div>
                    <div className="dropdown relative">
                      <Link
                        to=""
                        className="
                        dropdown-toggle
                        px-2
                        py-2.5
                        bg-main
                        text-[12px]
                        xl:text-[13px]
                        text-white
                        font-medium
                        leading-tight
                        uppercase
                        rounded
                        hover:bg-blue-600
                        focus:shadow-lg focus:outline-none focus:ring-0                       
                        transition
                        duration-150
                        ease-in-out
                        flex
                        items-center
                        whitespace-nowrap
                      "
                        type="button"
                        id="dropdownMenuButton2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <FontAwesomeIcon className="w-[30px]" icon={faUser} />
                        {user?.name}
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="caret-down"
                          className="w-2 ml-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path
                            fill="currentColor"
                            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                          ></path>
                        </svg>
                      </Link>
                      <ul
                        className="
                        dropdown-menu
                        w-[160px]
                        absolute
                        hidden
                        bg-white
                        text-base
                        z-50
                        py-2
                        text-left
                        rounded-lg
                        shadow-lg
                        hidden
                        m-0
                        bg-clip-padding
                        border-none
                      "
                        aria-labelledby="dropdownMenuButton2"
                      >
                        <li
                          onClick={() => navigate("/dashboard/myprofile")}
                          className="
                            dropdown-item
                            text-sm
                            py-2
                            px-4
                            w-full
                            bg-transparent
                            text-gray-700
                            hover:bg-gray-100
                            hover:cursor-pointer                            
                          "
                        >
                          {/* ড্যাশবোর্ড */}
                          Dashboard
                        </li>
                        <li
                          onClick={handleLogOut}
                          className="
                            dropdown-item
                            text-sm
                            py-2
                            px-4
                            w-full
                            bg-transparent
                            text-gray-700
                            hover:bg-gray-100
                            hover:cursor-pointer                            
                          "
                        >
                          {/* লগ আউট */}
                          Logout
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex gap-x-4 items-center font-[jost] font-bold text-white lg:text-[13px] xl:text-[16px] 2xl:text-[17px]">
                <Link className="" to="/login">
                  <button className="bg-main py-2 px-2 xl:px-6 lg:px-4 rounded ">
                      {/* লগ ইন */}
                      Log In
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="bg-main py-2 px-2 xl:px-6 lg:px-4 rounded  ">
                      {/* সাইন আপ */}
                      Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
