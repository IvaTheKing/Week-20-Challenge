import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import homePage from "./pages/home";
import Projects from "./pages/Project.js";
import Contacts from "./pages/contact";


function App() {
  return (
    <Router>
      <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={ < homePage/> }/>
        <Route path="/projects" element={ < Projects/> }/>
        <Route path="/ContactInfo" element={ < Contacts/> }/>
      </Routes>
      </div>
    </Router>
   
  );
};

export default App;
