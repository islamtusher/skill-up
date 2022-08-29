import { Route, Routes } from 'react-router-dom';
import './App.css';
import HeroArea from './Components/HeroArea/HeroArea';
import Navbar from './Components/Shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HeroArea></HeroArea>}></Route>
      </Routes>
    </div>
  );
}

export default App;
