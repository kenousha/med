import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing_Page from './Components/Landing_Page/Landing_Page';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
        
        <BrowserRouter>  
         <Navbar/>
            <Routes>
             <Route exact path="/" element={<Landing_Page/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
