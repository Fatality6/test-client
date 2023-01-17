import React from "react"
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Login } from "./pages/login/Login";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  
  return (<>
    <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="login" element={<Login />}></Route>
    </Routes>
    <ToastContainer position="bottom-center" hideProgressBar />
    </>
  );
}

export default App;
