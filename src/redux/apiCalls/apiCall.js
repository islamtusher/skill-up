import axios from "axios";
import {
  loginStart,
  loginSuccess,
  loginError,
  logOut,
} from "../slice/userSlice";

// User Login Action
export const loginUser = async (user, dispatch, formReset, navigate) => {
  dispatch(loginStart());
  try {
    const { data } = await axios.post("http://127.0.0.1:8000/api/login", user);
    if (data?.access_token) {
      dispatch(
        loginSuccess({
          phone: "01643613878",
          password: "12345",
          token: data?.access_token,
        })
      );
      navigate("/");
      localStorage.setItem("accessToken", data?.access_token);
      formReset();
    }
  } catch (error) {
    dispatch(loginError());
    console.log(error);
  }
};

// User Logout Action
export const userLogout = (dispatch, navigate) => {
  dispatch(logOut());
  localStorage.removeItem("accessToken");
  navigate("/");
};
