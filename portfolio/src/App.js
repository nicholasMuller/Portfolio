import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills"
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
    </div>
  );
}

export default App;
