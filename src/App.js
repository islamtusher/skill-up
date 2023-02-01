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
import ModelTest from "./Components/Dashboard/Performance/ModelTest";
import { ToastContainer } from "react-toastify";
import Classes from "./Components/Dashboard/StudyMaterial/Class/Classes";
import ClassEdit from "./Components/Dashboard/StudyMaterial/Class/ClassEdit";
import MsWord from "./Components/ICT_Skills/MS_Office/MsWord";
import MsExcle from "./Components/ICT_Skills/MS_Office/MsExcle";
import MsPowerpoint from "./Components/ICT_Skills/MS_Office/MsPowerpoint";
import Grammar from "./Components/Language_Skills/English/Grammer";
import SpokenEnglish from "./Components/Language_Skills/English/SpokenEnglish";
import Norani from "./Components/Language_Skills/Arabic/Norani";
import WebDesign from "./Components/ICT_Skills/WebDesign/WebDesign";
import GraphicsDesign from "./Components/ICT_Skills/GraphicsDesign/GraphicsDesign";
import Staffs from "./Components/Dashboard/TeacherPortal/Staffs/Staffs";
import AssignTeacher from "./Components/Dashboard/TeacherPortal/AssignTeacher/AssignTeacher";
import StaffsEdit from "./Components/Dashboard/TeacherPortal/Staffs/StaffsEdit";
import Subjects from "./Components/Dashboard/StudyMaterial/Subject/Subjects";
import AllChapters from "./Components/Dashboard/StudyMaterial/AllChapter/AllChapters";
import RequireAuth from "./Aditional/RequirAuth";
import QuestionUpload from "./Components/Dashboard/TeacherPortal/QuestionUpload";
import ChapterEdit from "./Components/Dashboard/StudyMaterial/AllChapter/ChapterEdit";
import SubjectEdit from "./Components/Dashboard/StudyMaterial/Subject/SubjectEdit";
import AllQuestions from "./Components/Dashboard/StudyMaterial/Questions/AllQuestions";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/mcq"
          element={
            <RequireAuth>
              <Mcq></Mcq>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/exam-type-:examType/:subjectId"
          element={<Chapters></Chapters>}
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route path="mcqChart" element={<McqChart />}></Route>
          <Route path="modelTest" element={<ModelTest />}></Route>
          <Route path="myprofile" element={<MyProfile />}></Route>
          <Route path="classes" element={<Classes />}></Route>
          <Route path="class-edit/:id" element={<ClassEdit />}></Route>
          <Route path="subjects" element={<Subjects />}></Route>
          <Route path="subject-edit/:id" element={<SubjectEdit/>}></Route>
          <Route path="chapters" element={<AllChapters />}></Route>
          <Route path="chapter-edit/:id" element={<ChapterEdit />}></Route>
          <Route path="questions" element={<AllQuestions />}></Route>
          <Route path="addQuestion" element={<QuestionUpload />}></Route>
          <Route path="staffs" element={<Staffs />}></Route>
          <Route path="staffsEdit/:id" element={<StaffsEdit />}></Route>
          <Route path="assignTeacher" element={<AssignTeacher />}></Route>
          {/* <Route path="addQuestion" element={<TeacherPortal></TeacherPortal>}> */}
          {/* </Route> */}
        </Route>

        <Route path="/msword" element={<MsWord />}></Route>
        <Route path="/msexcle" element={<MsExcle />}></Route>
        <Route path="/mspowerpoint" element={<MsPowerpoint />}></Route>
        <Route path="/webdesign" element={<WebDesign />}></Route>
        <Route path="/graphicsdesign" element={<GraphicsDesign />}></Route>

        <Route path="/english/grammar" element={<Grammar />}></Route>
        <Route
          path="/english/spoken-english"
          element={<SpokenEnglish />}
        ></Route>

        <Route path="/quran/norani" element={<Norani />}></Route>

        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
