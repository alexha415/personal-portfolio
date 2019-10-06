import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Header from './components/layout/Header/Header';
import Projects from './components/pages/Projects';
import SocialIcons from './components/layout/SocialIcons/SocialIcons';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header style={{marginBottom: '50px'}}/>
          <Switch>
            <Route exact path ='/' component={Home}/>
            <Route exact path ='/contact' component={Home}/>
            <Route exact path ='/projects' component={Projects}/>
            <Route exact path ='/resume' component={Home}/>
          </Switch>
        <div  className="row justify-content-center pb-3 pt-3">
          <SocialIcons/>
        </div> 
      </div>
    </Router>
  );
}

export default App;
