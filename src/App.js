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
          <div className="col col-md-12 header">
            <Header/>
          </div>
        </div>
          <Home/>
          <Projects/>
        <div className="footer">
          <SocialIcons/>
        </div> 
      </div>
    </Router>
  );
}

export default App;
