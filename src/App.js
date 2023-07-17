import logo from './logo.svg';
import './App.css';
import React from 'react'; 
import './index.css';
import Home from './routes/Home'
import About from './routes/About'
import Certifications from './routes/Certifications'
import Contact from './routes/Contact'
import Projects from './routes/Projects'
import { Route,Routes } from 'react-router-dom';



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/certifications" element={<Certifications/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </>
  );
}

export default App;
