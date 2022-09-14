import { Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css'
import Home from './Components/Home/Home';
import Chapters from './Components/Quiz/Chapters/Chapters';
import Mcq from './Components/Quiz/MCQ/Mcq';
import Navbar from './Components/Shared/Navbar/Navbar';
import AllClassQuiz from './Components/AllCalssQuiz/AllClassQuiz';
import Class6th from './Components/AllCalssQuiz/Class6th/Class6th';
import Class7th from './Components/AllCalssQuiz/Class7th/Class7th';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/mcq' element={<Mcq></Mcq>}></Route>
        <Route path='/class-:id/:subject' element={<Chapters></Chapters>}></Route>
        {/* <Route path='allclassquiz' element={<AllClassQuiz></AllClassQuiz>}>
          <Route index element={<Class6th></Class6th>}></Route>
          <Route path='class6th' element={<Class6th></Class6th>}></Route>
          <Route path='class7th' element={<Class7th></Class7th>}></Route>
        </Route> */}

        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
