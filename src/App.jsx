import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import LandingPage from './components/landingPage/LandingPage';
import Register from './components/register/Register'
import Login from './components/login/Login'
<<<<<<< HEAD
=======
import Financiero from './components/financiero/Financiero'
>>>>>>> a6afa5ec18213e58e9a6e81ac5998c3f973c72bd
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
<<<<<<< HEAD
=======
      <Financiero />
>>>>>>> a6afa5ec18213e58e9a6e81ac5998c3f973c72bd
      <Footer />
    </div>
  );
}

export default App;