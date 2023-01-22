import axios from "axios";
import { toast } from "react-toastify";
import API from "../../Network/API.js";
import authHeader, { baseURL } from "../../Network/AuthApi.js";
import AuthApi from "../../Network/AuthApi.js";
import { scoreLoading, scoreLoadSuccess } from "../slice/examScoreSlice";
import {
  loginStart,
  loginSuccess,
  loginError,
  logOut,
} from "../slice/userSlice";


// get the current user Information after login
export const getUserInfo = async ( accessToken, dispatch, formReset, navigate) => {
  try {
    const response = await API.get(`/user`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    
    dispatch(loginSuccess(response.data.data));
    localStorage.setItem("accessToken", accessToken);
    navigate("/");
    // window.location.href = "/";
    formReset();
  } catch (error) {
    console.log(error);
  }
};

// User Login Action
export const loginUser = async (user, dispatch, formReset, navigate) => {
  dispatch(loginStart());
  try {

    //? Those are alternative APIs 
    // const { data } = await authHeader().post(`/login`, user);
    // const { data } = await axios.post(`http://127.0.0.1:8000/api/login`,  user);

    const { data } = await axios.post(baseURL + 'login', user, {
      headers: authHeader(),
    });
    if (data?.access_token) {
      getUserInfo(data?.access_token, dispatch, formReset, navigate);
      console.log(data?.access_token);
    }
  } catch (error) {
    dispatch(loginError());
    console.log(error.message);
  }
};

// User Logout Action
export const userLogout = async(dispatch, navigate) => {
  try {
    // const response = await API.post("/logout");
    const response = await axios.post(baseURL + 'logout',{}, {
      headers: authHeader(),
    });
    if (response.status === 204) {
      localStorage.removeItem("accessToken");
      dispatch(logOut());
      navigate("/");
      toast.success("Logout Successful");
      // window.location.href = '/';
    }
  } catch (error) {
    dispatch(loginError());
  }
  
};


// User Logout Action
// export const userLogout = async (dispatch, navigate) => {
//   console.log(localStorage.getItem("accessToken"));
//   try {
//     const response = await axios.post(
//       "http://127.0.0.1:8000/api/logout",
//       {},
//       {
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + localStorage.getItem("accessToken"),
//         },
//       }
//     );
//     if (response.status === 204) {
//       localStorage.removeItem("accessToken");
//       dispatch(logOut());
//       navigate("/");
//       toast.success("Logout Successful");
//     }
//   } catch (error) {
//     console.log(error)
//     dispatch(loginError());
//   }
  
// };

// Student Exam's Score Load
export const getStudentExamScore = async (examId, selectedAns, dispatch) => {
  dispatch(scoreLoading());
  try {
    const { data } = await API.post(`/mcq_exam_check/${examId}`, {
      question_answer: selectedAns,
    });
    dispatch(scoreLoadSuccess(data));
  } catch (error) {
    console.log(error);
  }
}; 
 

