import { Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css'
import Home from './Components/Home/Home';
import Chapters from './Components/Quiz/Chapters/Chapters';
import Mcq from './Components/Quiz/MCQ/Mcq';
import Navbar from './Components/Shared/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/mcq' element={<Mcq></Mcq>}></Route>
        <Route path='/chapters' element={<Chapters></Chapters>}></Route>
      </Routes>
    </div>
  );
}

export default App;
