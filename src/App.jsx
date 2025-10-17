import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Volunteering from './components/Volunteering'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    if (isDarkMode) {
      document.documentElement.classList.remove('light-mode')
      // Usar el mismo logo para ambos modos
      updateFavicon('/logo_portfolio_remove_bg.png')
    } else {
      document.documentElement.classList.add('light-mode')
      // Usar el mismo logo para ambos modos
      updateFavicon('/logo_portfolio_remove_bg.png')
    }
  }, [isDarkMode])

  const updateFavicon = (iconPath) => {
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link')
    link.type = 'image/png'
    link.rel = 'icon'
    link.href = iconPath
    document.getElementsByTagName('head')[0].appendChild(link)
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-dark-bg' : 'bg-white'}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <Education isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Volunteering isDarkMode={isDarkMode} />
        <Contact />
      </motion.main>
      
      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}

export default App
