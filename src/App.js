import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./Components/Home/Home";
import Chapters from "./Components/Quiz/Chapters/Chapters";
import Mcq from "./Components/Quiz/MCQ/Mcq";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import McqChart from "./Components/Dashboard/Performance/McqChart";
import MyProfile from "./Components/Dashboard/MyProfile/MyProfile";
import TeacherPortal from "./Components/Dashboard/TeacherPortal/TeacherPortal";
import ModelTest from "./Components/Dashboard/Performance/ModelTest";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/mcq" element={<Mcq></Mcq>}></Route>
        <Route
          path="/class-:id/:subject"
          element={<Chapters></Chapters>}
        ></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route path="mcqChart" element={<McqChart></McqChart>}></Route>
          <Route path="modelTest" element={<ModelTest></ModelTest>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route
            path="teacherPortal"
            element={<TeacherPortal></TeacherPortal>}
          ></Route>
        </Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
