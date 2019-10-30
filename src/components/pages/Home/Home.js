import React, {useRef} from 'react'
import About from '../../About/About';
import Projects from '../../Projects/Projects';
import Resume from'../../Resume/Resume';

import Header from '../../layout/Header/Header';
import Footer from '../../layout/footer/Footer';

import styles from './Home.module.css';

const Home = () => {
  const home = useRef(null);
  return (
    <div ref={home} className={styles.home}>
      <Header/>
      <About/>
      <Projects/>
      <Resume/>
      <Footer home={home}/>
    </div>
  )
}

export default Home
