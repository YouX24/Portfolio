import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header/>
      <Intro/>
      <Skills/>
      <Projects/>
      <About/>
      <Footer/>
    </>
  )
}

export default App;