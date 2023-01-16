import React, { useEffect } from "react"
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Login } from "./pages/login/Login";
import { useDispatch } from "react-redux";
import { getMe } from "./redux/features/authSlice";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])


  return (
    <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
