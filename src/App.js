import React from 'react';
import './App.css';
import Footer from "./Components/Footer/footer"
import Navbar from './Components/Navbar/navbar'
import ContactInfo from './Components/Pages/Contacts/ContactInfo';
import AboutMe from './Components/Pages/AboutMe/AboutMe';
import Projects from './Components/Pages/projects/Projects';
import MainPage from './Components/Pages/Main/main';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={MainPage} />
        <Route exact path="/AboutMe" component={AboutMe} />
        <Route exact path="/Projects" component={Projects} />
        <Route path="/ContactInfo" component={ContactInfo} />
      </div>
    </Router>
      <Footer/>
    </div>
  );
}
export default App;
