import axios from "axios";

//? An alternative implementation (Not Used)
function AuthApi (accessToken) {
    axios.create({
      baseURL: "http://127.0.0.1:8000/api",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        Authorization: "Bearer " + accessToken ?? "",
      },
      withCredentials: true,
    });
}

// export const baseURL = "https://eacademyapi.ajratech.com/api/";
export const baseURL = "http://127.0.0.1:8000/api/";

export default function authHeader() {
  const user = localStorage.getItem('accessToken');
  if (user) {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + user ?? "",
    };
  } else {
    return {};
  }
}

// export default AuthApi