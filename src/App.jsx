import * as React from "react";
import './App.css';
import LandingPage from './components/landingPage/LandingPage';
import { Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import Login from './components/login/Login'
import Financiero from "./components/financiero/Financiero";
import Educacion from "./components/educacion/Educacion";
import Registrate from "./components/registrate/Registrate";


function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Registrate />
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
 }
export default App;
