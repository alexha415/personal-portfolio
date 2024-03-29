const projects = {
  edhblocks : {
    title:'EDHBlocks',
    description:'A website for Magic: The Gathering enthusiasts. With a heavy focus on the popular format "Elder Dragon Highlander", this website helps users build and prototype decks that are specific to this format. I worked on this project using a MERN stack. Features include authentication with tokens, hashing, search api, deck storage, and complete CRUD for user decks. The technologies I used in this website included React, Express, MongoDB, Node.js, React Redux, Redux thunk, and React Router(WIP)',
    images : 
      [
        require('../../images/projects/edhblocks/your_decks.png'),
        require('../../images/projects/edhblocks/view_deck.png'),
        require('../../images/projects/edhblocks/add_cards.png')
      ],
    github: 'https://github.com/almondjoys/edhblocks'
  },
  gatortrader : {
    title:'GatorTrader',
    description:'My first real web development project. This website was a school project in a team of 7 people. I was the on the frontend team, learning React, JavaScript, CSS, HTML, and how to work in a large team. This project was a full stack web app that helped students at SFSU sell items based on categories to other students. Some features included messaging, login/logout, filtering, and search. The technologies used in this application included React, MySQL, Express, Node.js, and React-Router',
    images : 
      [
        require('../../images/projects/GatorTrader/gatortrader1.png'),
        require('../../images/projects/GatorTrader/gatortrader2.png'),
        require('../../images/projects/GatorTrader/gatortrader3.png'),
        require('../../images/projects/GatorTrader/gatortrader4.png'),
        require('../../images/projects/GatorTrader/gatortrader5.png')
      ],
    github: 'https://github.com/CSC-648-SFSU/csc648-fa18-Team01'
  },
  portfolio: {
    title: 'Portfolio',
    description: 'This website you are currently viewing. It is a frontend website built using React. I use this to display projects that I have completed or am currently working on.',
    github: 'https://github.com/almondjoys/personal-portfolio'
  },
  divvy: {
    title: 'Divvy',
    description: 'Android app with a large focus on Object Oriented Design, in both UI and API. Users are able to coordinate to split costs of living expenses and services which allow sharing subscriptions. Technologies and languages used included Android, Java, Express, and MySQL',
    github: 'https://github.com/sfsu-csc-668-spring-2019/term-project-divvy-team03'
  }
}

export default projects;