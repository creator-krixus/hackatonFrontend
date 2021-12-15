import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import LandingPage from './components/landingPage/LandingPage';
import Register from './components/register/Register'
import Login from './components/login/Login'
import Financiero from "./components/financiero/Financiero";
import Educacion from "./components/educacion/Educacion";
import Registrate from "./components/registrate/Registrate";



function App() {
  return (
    <div className="App">
      <Header/>
      <Registrate />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
     </div>
  );
}

export default App;