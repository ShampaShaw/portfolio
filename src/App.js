import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Projects from './components/project/Projects';
import Footer from './components/footer/footer';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home"><Home /></div>
      <div id="projects"><Projects /></div>
      <div id="about"><About /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}


export default App;
