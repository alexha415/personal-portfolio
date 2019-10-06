import React, {Fragment} from 'react'

const Home = () => {
  const alex = require('../../alex.jpg');
  return (
    <div className='row mr-0'>
      <div className="col text-center">
        <h4 className="text-light" style={{fontSize: '2em'}}>Alex Ha</h4>
        <br/>
        <img src={alex} alt="Alex Ha" className="border rounded-circle mb-5"/>
        <br/>
        <p className="text-center container w-50 text-light" style={{fontSize: '1.25em'}}>         
              I am a frontend Node.js engineer looking for an entry-level position. I graduated from San Francisco State University in May of 2019. I am currently learning REST API's with python as well as Express. Some of my skills involve, HTML, JavaScript, CSS, and React. I am looking for a great environment to polish my skills and grow my programming knowledge even more. 
      </p>
      </div>
    </div>
  )
}

export default Home
