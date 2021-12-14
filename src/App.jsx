import * as React from "react";
import './App.css';
import LandingPage from './components/landingPage/LandingPage';
import { Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import Login from './components/login/Login'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
 }
export default App;
