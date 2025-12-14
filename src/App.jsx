import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import About from './components/About'
import Process from './components/Process'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <About />
      <Process />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
