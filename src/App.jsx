import { useState, useEffect } from 'react'

import Layout from './components/Layout'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import Loader from './components/Loader'
import Particles from './components/Particles'
import ScrollReveal from './components/ScrollReveal'
import './index.css'

// ... (keep component imports same)

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.body.classList.toggle('light-mode', savedTheme === 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.classList.toggle('light-mode', newTheme === 'light');
    localStorage.setItem('theme', newTheme);
  };

  const particleColors = theme === 'dark'
    ? ['#ffffff', '#08fdd8', '#ff2a6d']
    : ['#0d0d0d', '#00a38d', '#d11e55'];

  return (
    <>
      <div className="particles-container">
        <Particles
          particleColors={particleColors}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <Loader loaded={!loading} />
      <div className={`app-content ${loading ? 'hidden' : 'visible'}`} style={{ opacity: loading ? 0 : 1, transition: 'opacity 1s ease-in-out' }}>
        <Cursor />

        <Layout theme={theme} toggleTheme={toggleTheme}>
          <section id="home">
            <Hero />
          </section>

          <ScrollReveal>
            <section id="about">
              <About />
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="skills">
              <Skills />
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="projects">
              <Projects />
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="certificates">
              <Certificates />
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="contact">
              <Contact />
            </section>
          </ScrollReveal>
        </Layout>
      </div>
    </>
  )
}

export default App

