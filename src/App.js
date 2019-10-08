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
        <div className="row">
          <div className="col col-md-12">
            <Header style={{marginBottom: '50px'}}/>
          </div>
        </div>
          <Switch>
            <Route exact path ='/' component={Home}/>
            <Route exact path ='/contact' component={Home}/>
            <Route exact path ='/projects' component={Projects}/>
            <Route exact path ='/resume' component={Home}/>
          </Switch>
        <div  className="row justify-content-center footer">
          <SocialIcons/>
        </div> 
      </div>
    </Router>
  );
}

export default App;
