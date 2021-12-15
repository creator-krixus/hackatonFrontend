import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import LandingPage from './components/landingPage/LandingPage';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Financiero from './components/financiero/Financiero';
import Emocional from './components/emocional/Emocional';
import Encuesta from './components/encuesta/Encuesta';
import Footer from './components/footer/Footer';

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
        <Route path="encuesta" element={<Encuesta />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;