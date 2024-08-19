import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
        <Navbar/>
            <Routes>
             <></>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
