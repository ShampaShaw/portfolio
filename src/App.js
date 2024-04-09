import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Projects from './components/project/Projects';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Projects/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
