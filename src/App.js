import React, {Fragment, useEffect, useRef} from 'react';
import './App.css';
import Home from './components/pages/Home';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/footer/Footer';
import Projects from './components/pages/Projects';
import Resume from'./components/pages/Resume';
import SocialIcons from './components/layout/SocialIcons/SocialIcons';

function App() {
  const app = useRef(null);

  return (
      <div ref={app} className="App">
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
      <Footer app={app}/>
      </div>
  );
}

export default App;
