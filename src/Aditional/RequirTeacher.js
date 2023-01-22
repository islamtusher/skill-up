import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import useTeacherAccess from "../CustomHooks/useTeachersAccess";
import { userLogout } from "../redux/apiCalls/apiCall";

const RequireTeacher = ({ children }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();

  const [teacher] = useTeacherAccess();

  if (!teacher && user) {
    return <Navigate to="/" />;
  }
  if (!teacher) {
    userLogout(dispatch, navigate);
    return <Navigate to="/" />;
  }

  return children;
};

export default RequireTeacher;
