import './App.css';
import Financiero from './components/financiero/Financiero';
import Header from './components/header/Header';
import LandingPage from './components/landingPage/LandingPage';
import Educacion from './components/educacion/Educacion';
import Registrate from './components/registrate/Registrate';

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Financiero />
      <Educacion />
      <Registrate />
    </div>
  );
}

export default App;
