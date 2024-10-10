
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mission from "./pages/Mission.jsx";
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import './css/App.css';
import "./css/transitions.css"
import "./css/pages.css";
import "./css/boxes.css";
import "./css/menu.css";
import "./css/logo.css"

function App() {

  return (
      <Router>
      <Routes>
          <Route path="/mission" element={<Mission/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/" element={<Home/>}/>
      </Routes>
      </Router>
  )
}

export default App
