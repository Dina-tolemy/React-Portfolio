import React from 'react';
import './App.css';
import Footer from "./Components/Footer/footer"
import Navbar from './Components/Navbar/navbar'
import MainPage from "./Components/Main/main"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
