import './App.css';
import Footer from './components/footer/Footer'

import { Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import LandingPage from './components/landingPage/LandingPage';
import Register from './components/register/Register'
import Login from './components/login/Login'

function App() {
  return (
    <div className="App">
      <Header/> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
