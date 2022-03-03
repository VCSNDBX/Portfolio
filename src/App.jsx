import React from 'react'
<<<<<<< HEAD

const app = () => {
  return (
    <div>Hello World!</div>
=======
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const app = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </>
>>>>>>> components
  )
}

export default app