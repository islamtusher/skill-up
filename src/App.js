import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Mcq from './Components/MCQ/Mcq';
import Navbar from './Components/Shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/mcq' element={<Mcq></Mcq>}></Route>
      </Routes>
    </div>
  );
}

export default App;
