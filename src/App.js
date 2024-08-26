import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './Components/Landing_Page/Landing_Page';
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
        
        <BrowserRouter>  
         <Navbar/>
            <Routes>
             <Route exact path="/" element={<LandingPage/>}/>
             <Route path="/Sign_Up" element ={<SignUp/>}/>
             <Route path='/Login' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
