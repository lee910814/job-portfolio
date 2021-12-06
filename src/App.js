import React from 'react';
import './App.module.css';
import Header from './components/header/header';
import Home from './components/Home/home';
import Project from './components/Project/project';
import About from './components/About/right';
import Skills from './components/Skills/skills';
import Thank from './components/last/thank';
import Footer from './components/footer/footer';
import {BrowserRouter , Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
      <div className={Sstyles.section}>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
        <Routes>
          <Route path="/about" element={<About/>}/>
        </Routes>
        <Routes>
          <Route path="/skills" element={  <Skills/>}/>
        </Routes>
        <Routes>
          <Route path="/porject" element={ <Project/>}/>
        </Routes>
        <Thank/>
      <Footer/>
      </div>
       
    
    </div>
    </BrowserRouter>
  );
}

export default App;
