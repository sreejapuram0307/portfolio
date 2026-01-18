import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import DemandMap from './pages/projects/DemandMap'
import CivSure from './pages/projects/CivSure'
import TrafficSimulator from './pages/projects/TrafficSimulator'
import Skills from './pages/Skills'
import Achievements from './pages/Achievements'
import Contact from './pages/Contact'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/demandmap" element={<DemandMap />} />
        <Route path="/projects/civsure" element={<CivSure />} />
        <Route path="/projects/traffic" element={<TrafficSimulator />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App
