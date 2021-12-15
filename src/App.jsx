import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import LandingPage from './components/landingPage/LandingPage';
import Register from './components/register/Register'
import Login from './components/login/Login'
import Financiero from "./components/financiero/Financiero";
import Registrate from "./components/registrate/Registrate";
import Emocional from './components/emocional/Emocional'


function App() {
  return (
    <div className="App">
      <Header/>
      <Registrate />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="financiero" element={<Financiero />} />
        <Route path="emocional" element={<Emocional />} />
      </Routes>
     </div>
  );
}

export default App;