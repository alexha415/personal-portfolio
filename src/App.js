import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import SocialIcons from './components/layout/SocialIcons/SocialIcons';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path ='/' component={Home}/>
          <Route exact path ='/contact' component={Home}/>
          <Route exact path ='/projects' component={Projects}/>
          <Route exact path ='/resume' component={Home}/>
        </Switch>
        <div id='footer' className="row justify-content-center">
          <SocialIcons/>
        </div>
      </div>
    </Router>
  );
}

export default App;
