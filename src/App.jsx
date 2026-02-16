import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
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
import './index.css'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0, background: '#0d0d0d' }}>
        <Particles
          particleColors={['#ffffff', '#08fdd8', '#ff2a6d']}
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
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </div>
    </>
  )
}

export default App
