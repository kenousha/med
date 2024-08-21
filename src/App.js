import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing_Page from './Components/Landing_Page/Landing_Page';
import Navbar from './Components/Navbar/Navbar';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
        
        <BrowserRouter>  
         <Navbar/>
            <Routes>
             <Route exact path="/" element={<Landing_Page/>}/>
             <Route path="/Sign_Up" element ={<Sign_Up/>}/>
             <Route path='/Login' element={<Login></Login>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
