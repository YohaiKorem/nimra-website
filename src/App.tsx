import { useState } from 'react'
import './assets/scss/main.scss'
import Header from './cmps/Header'
import About from './pages/About'
import Psychotherapy from './pages/Psychotherapy'
import Articles from './pages/Articles'
import Counseling from './pages/Counseling'
import Stories from './pages/Stories'
import ContactPage from './pages/Contact'
import Footer from './cmps/Footer'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="About" element={<About />} />
        <Route path="Psychotherapy" element={<Psychotherapy />} />
        <Route path="Counseling" element={<Counseling />} />
        <Route path="Articles" element={<Articles />} />
        <Route path="Stories" element={<Stories />} />
        <Route path="Contact" element={<ContactPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
