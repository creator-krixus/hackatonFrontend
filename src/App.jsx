import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import LandingPage from './components/landingPage/LandingPage';
import Register from './components/register/Register'
import Login from './components/login/Login'
import Financiero from "./components/financiero/Financiero";
import Emocional from './components/emocional/Emocional'
import Laboral from './components/laboral/Laboral'
import Registrate from './components/registrate/Registrate'
import Agendar from './components/agendar/Agendar'


function App() {
  return (
    <div className="App">
      <Header/>
           
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="financiero" element={<Financiero />} />
        <Route path="emocional" element={<Emocional />} />
        <Route path="laboral" element={<Laboral />} />
        <Route path="agendar" element={<Agendar />} />
        <Route path="registrate" element={<Registrate />} />
      </Routes>
     </div>
  );
}

export default App;