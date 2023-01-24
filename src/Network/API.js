import axios from "axios";
 export default axios.create({
  //  baseURL: "http://127.0.0.1:8000/api",
    baseURL: "https://eacademyapi.ajratech.com/api",
   headers: {
     Accept: "application/json",
     "Content-Type": "application/json",
     Authorization: "Bearer " + localStorage.getItem("accessToken") ?? "",
   },
 });
 
//  const API = axios.create({
//   baseURL: "http://127.0.0.1:8000/api",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//     Authorization: "Bearer " + localStorage.getItem("accessToken") ?? ""
//   },
// });
// export default API;
