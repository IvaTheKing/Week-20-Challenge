import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./gus_react_portfolio/src/components/Navbar";
import homePage from "./gus_react_portfolio/src/pages/home";
import Projects from "./gus_react_portfolio/src/pages/Project";
import Contacts from "./gus_react_portfolio/src/pages/contact";


function App() {
  return (
    <Router>
      <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <homePage/> }/>
        <Route path="/projects" element={ < Projects/> }/>
        <Route path="/ContactInfo" element={ < Contacts/> }/>
      </Routes>
      </div>
    </Router>
   
  );
};

export default App;
