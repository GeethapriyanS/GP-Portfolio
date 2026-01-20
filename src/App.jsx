import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <footer style={{ textAlign: 'center', padding: '50px', color: '#b3adadff', fontSize: '1.1rem' }}>
        © 2026 GEETHAPRIYAN S. ALL RIGHTS RESERVED.
      </footer>
    </main>
  );
}

export default App;