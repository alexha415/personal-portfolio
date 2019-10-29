import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Header from './components/layout/Header/Header';
import Projects from './components/pages/Projects';
import Resume from'./components/pages/Resume';
import SocialIcons from './components/layout/SocialIcons/SocialIcons';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="row">
          <div className="flex-row header">
            <span className='header-label'>Home</span>
            <SocialIcons/>
            <Header/>
          </div>
        </div>
          <Home />
          <Projects/>
          <Resume/>
      </div>
      <div className="footer">
        <div className="nav-down"></div>
      </div>
    </Router>
  );
}

export default App;
