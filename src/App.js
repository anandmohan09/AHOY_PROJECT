// import logo from './logo.svg';
import './App.css'
import Login from './pages/Login';
import Passcode from './pages/Passcode';
import Dashboard from './pages/Dashboard'; 
import { Routes, Route } from "react-router-dom";
import Location from './pages/Location';

function App() {
  return (
    <div className="App">
      <div className='project'>
      {/* <Login/> */}
      {/* <Passcode/> */}
      {/* <Dashboard /> */}
      {/* <Location/> */}
      <Routes>
        
          <Route path='/' element={<Login />} />
          {/* <Route path="/Login" element={<Login />} /> */}
          <Route path="/passcode" element={<Passcode />} />
          <Route path="/Location" element={<Location />} />
         <Route path="/Dashboard" element={<Dashboard />} />
        
       </Routes>   
      </div>
    </div>
  );
}

export default App;
