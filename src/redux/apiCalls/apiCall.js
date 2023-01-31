import axios from "axios";
import { toast } from "react-toastify";
import authHeader, { baseURL } from "../../Network/AuthApi.js";
import { scoreLoading, scoreLoadSuccess } from "../slice/examScoreSlice";
import {
  loginStart,
  loginSuccess,
  loginError,
  logOut,
} from "../slice/userSlice";

// get the current user Information after login
export const getUserInfo = async( accessToken, dispatch, formReset, navigate, from) => {
  try {
    const response = await axios.get(baseURL+'user', {
      headers: authHeader(),
    });

    dispatch(loginSuccess(response.data.data));
    // localStorage.setItem("accessToken", accessToken);
    navigate(from, { replace: true });
    toast.success("Login Successful");
    formReset();
  } catch (error) {
    toast.error('Something Wrong on User Loading')
    console.log(error);
  }
};

// User Login Action
export const loginUser = async ( user, dispatch, formReset, navigate, from) => {
  dispatch(loginStart());
  try {
    //? Those are alternative APIs
    // const { data } = await authHeader().post(`/login`, user);

    const { data } = await axios.post(baseURL + "login", user, {
      headers: authHeader(),
    });
    if (data?.access_token) {
      localStorage.setItem("accessToken", data?.access_token);
      getUserInfo( data?.access_token, dispatch, formReset, navigate,from);
    }
  } catch (error) {
    dispatch(loginError());
    toast.error(error.response.data?.message);
    console.log(error.response.data?.message);
  }
};

// User Logout Action
export const userLogout = async(dispatch, navigate) => {
  try {
    const response = await axios.post(baseURL + 'logout',{}, {
      headers: authHeader(),
    });
    if (response.status === 204) {
      localStorage.removeItem("accessToken");
      dispatch(logOut());
      navigate("/");
      toast.success("Logout Successful");
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
    dispatch(loginError());
  }
  
};


// Student Exam's Score Load
export const getStudentExamScore = async (examId, selectedAns, dispatch) => {
  dispatch(scoreLoading());
  try {
    const { data } = await axios.post(baseURL+`mcq_exam_check/${examId}`, {
      question_answer: selectedAns,
    }, { headers: authHeader() });
    dispatch(scoreLoadSuccess(data));
  } catch (error) {
    console.log(error);
  }
}; 
 

