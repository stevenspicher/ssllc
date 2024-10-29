
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mission from "./pages/Mission.jsx";
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import './Styling//css/App.css';
import "./Styling/css/transitions.css"
import "./Styling/css/pages.css";
import "./Styling/css/boxes.css";
import "./Styling/css/menu.css";
import "./Styling/css/logo.css"
import "./Styling/themes/themes.js"
import { ThemeProvider} from "@mui/material";
import theme from "./Styling/themes/themes.js"

function App() {

  return (
          <ThemeProvider theme={theme}>
      <Router>
      <Routes>
          <Route path="/mission" element={<Mission/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/" element={<Home/>}/>
      </Routes>
      </Router>
          </ThemeProvider>
  )
}

export default App
