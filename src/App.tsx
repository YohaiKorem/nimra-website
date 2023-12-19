import { useState } from 'react'
import './assets/scss/main.scss'
import Header from './cmps/header'
import MainContent from './pages/main-content'
import About from './pages/about'
import Psychotherapy from './pages/psychotherapy'
import Articles from './pages/articles'
import Counseling from './pages/counseling'
import Stories from './pages/stories'
import ContactPage from './pages/contact'
import Footer from './cmps/footer'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'

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
        <Route path="/" element={<MainContent />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
