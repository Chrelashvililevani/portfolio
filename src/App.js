// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Navigation from './components/navigation';
import './components/style.css';

const App = () => {
  return (
    <Router>
      <div className='body'>
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
