import React from 'react';
import styles from './App.module.css';
import Header from './components/header/header';
import Home from './components/Home/home';
import Project from './components/Project/project';
import About from './components/About/about';
import Skills from './components/Skills/skills';
import Thank from './components/last/thank';
import Footer from './components/footer/footer';
import Project1 from './components/project1/project1';
import Project2 from './components/project2/project2';


function App() {
  return (
   
    <div className="App">
    <Header/>
    <div className={styles.section}>
       <Home/>
        <About/>
         <Skills/>
          <Project/>
          <Project1/>
          <Project2/>
        <Thank/>
      <Footer/>
      </div>
      </div>
       );
}

export default App;
