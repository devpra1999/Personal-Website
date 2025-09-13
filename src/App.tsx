import React from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Research from './pages/Research'
import Teaching from './pages/Teaching'
import Blog from './pages/Blog'
import CV from './pages/CV'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="research">
          <Research />
        </section>
        <section id="teaching">
          <Teaching />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id="cv">
          <CV />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App