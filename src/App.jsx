import * as React from "react";
import './App.css';
import Footer from './components/footer/Footer'
import { Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import Login from './components/login/Login'
import Financiero from "./components/financiero/Financiero";
import Educacion from "./components/educacion/Educacion";
import Registrate from "./components/registrate/Registrate";


function App() {
  return (
    <div className="App">
      <Header/> 
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer/>

    </div>
  );
 }
export default App;
