import './App.css';
import Financiero from './components/financiero/Financiero';
import Header from './components/header/Header';
import LandingPage from './components/landingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Financiero />
    </div>
  );
}

export default App;
