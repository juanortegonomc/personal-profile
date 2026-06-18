import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

export function App() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
