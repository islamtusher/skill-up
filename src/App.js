import { Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css'
import Home from './Components/Home/Home';
import Chapters from './Components/Quiz/Chapters/Chapters';
import Mcq from './Components/Quiz/MCQ/Mcq';
import Navbar from './Components/Shared/Navbar/Navbar';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import McqChart from './Components/Dashboard/McqChart/McqChart';
import MyProfile from './Components/Dashboard/MyProfile/MyProfile';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/mcq' element={<Mcq></Mcq>}></Route>
        <Route path='/class-:id/:subject' element={<Chapters></Chapters>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<McqChart></McqChart>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
        </Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>

    </div>
  );
}

export default App;
