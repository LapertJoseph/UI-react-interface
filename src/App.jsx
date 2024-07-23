import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PaymentPage from "./Components/PaymentPage";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import MissionsPage from "./Components/MissionsPage";
import Help from "./Components/Help";
import "./App.scss";
import Login from "./Components/Login";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>SpeedJob</h1>
        </header>
        <div className="main">
          <div className="sidebar">
            <h2>Menu</h2>
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/profil">Profil</Link>
              </li>
              <li>
                <Link to="/missions">Missions</Link>
              </li>
              <li>
                <Link to="/payment">Paiements</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/help">Aide</Link>
              </li>
            </ul>
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profil" element={<ProtectedRoute isAuthenticated={isAuthenticated} component={<Profile username="toto" email="toto@email.com" bio="Je suis toto" />} />} />
              <Route path="/missions" element={<ProtectedRoute isAuthenticated={isAuthenticated} component={<MissionsPage />} />} />
              <Route path="/payment" element={<ProtectedRoute isAuthenticated={isAuthenticated} component={<PaymentPage />} />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </div>
        </div>
        <footer className="footer">
          <p>&copy; 2024 SpeedJob</p>
        </footer>
      </div>
    </Router>
  );
};

const ProtectedRoute = ({ isAuthenticated, component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticated ? navigate('/profil') : navigate('/login');
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? component : null;
};

export default App;
