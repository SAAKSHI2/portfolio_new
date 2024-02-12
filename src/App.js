import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Projects from "./components/projects/Projects";
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
     <section id='Homepage'>
      <Navbar/>
      <Home/>
      </section>
     <section id='About'><About/></section>
     <section id='Skills'><Skills/></section>
     <Projects/>
    <Experience id='Experience'/>
     <section id='Contact'>
      <Contact/>
     </section>
    </div>
  );
}

export default App;
