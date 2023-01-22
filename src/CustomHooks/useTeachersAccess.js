import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useTeacherAccess = () => {
  const user = useSelector((state) => state.user.userInfo);
  const [teacher, setTeacher] = useState(false);
  //   const [adminLoading, setAdminLoading] = useState(true);
  const url = "";

  useEffect(() => {
    const response = axios.get(`${url}/user/${user.phone}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    setTeacher(response?.data?.isAdmin);
  }, [user?.phone]);

  return [teacher];
};

export default useTeacherAccess;
