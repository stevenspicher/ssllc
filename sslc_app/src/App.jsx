
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mission from '././Mission.jsx';
import Portfolio from './Portfolio';
import Contact from './Contact.jsx';
import Home from './Home.jsx';
import './App.css';

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
