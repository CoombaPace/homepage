import React, { Component } from 'react';

// Components:
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Wrapper from './components/Wrapper'
import Slider from './components/Slider'

// Images:
import image1 from './images/iStock.png'
import image2 from './images/memory_clicker.png'
import image3 from './images/awnews.png'
import image4 from './images/battlearena.png'
import image5 from './images/voltron_screen.png'
import image6 from './images/bamazon.png'
import image7 from './images/liri.png'

// Project Data:
const slideData = [
  {
    id: 1,
    index: 0,
    headline: 'Memory Clicker Game',
    src: image2,
    creator: 'Mattia Pace',
    repo: 'https://github.com/CoombaPace/react-memory-game',
    demo: 'https://coombapace.github.io/react-memory-game/',
    description: 'A click based memory game made with ReactJS and themed off of the Mass Effect game franchise. Player can only click an image once, repeat clicks will end and restart the game. Keep trying to set a new personal best top score!',
    tools: 'ReactJS, bootstrapped with create-react-app, Material UI components. UI design meant to mimick the screen of the Mass Effect game.'
  },
  {
    id: 2,
    index: 1,
    headline: 'Stockabily',
    button: 'Github',
    src: image1,
    creator: 'John Ortega, Erik Johnson, Sam Lutz, Mattia Pace',
    repo: 'https://github.com/CoombaPace/reactstock',
    demo: 'https://reactstock.herokuapp.com/',
    description: 'Intended to be a lightweight and to-the-point way of staying on top of the stock market. Users can setup a username and profile to save stocks and funds. Click the stock cards to find more detailed info. Click the Refresh button to fetch most current information.',
    whatIdid: 'I coded the Cards and Modal, I especially enjoyed writing the map function that sorts Card/Modal data, as well as using ReactDOM.createPortal.',
    tools: 'ReactJS using create-react-app. I worked as part of a team, where  and worked extensively with GitHub.'
  },
  {
    index: 2,
    headline: 'AW News Scraper',
    src: image3,
    id: 3,
    creator: 'Mattia Pace',
    repo: 'https://www.github.com/coombapace/awnews',
    demo: 'https://awnews.herokuapp.com',
    description: 'A news scraper that returns top headlines from the AntiWar.com XML feed.',
    tools: 'Built with Node.js, MongoDB, Mongoose, Cheerio, Axios, Express, and Express Handlebars.'
  },
  {
    id: 4,
    index: 3,
    headline: 'Battle Clicky Game',
    button: 'Get Focused',
    src: image4,
    creator: 'Mattia Pace',
    repo: 'www.github.com/coombapace/',
    demo: '',
    description: 'A clicky game where the challenge is to choose your opponent based on your selected hero. Themed off of Netflix\'s Dragon Prince Animated Series.',
    tools: 'Written in JavaScript with HTML, CSS, and jQuery.'
  },
  {  
    id: 5,
    index: 4,
    headline: 'Trivia Game',
    button: 'Get Focused',
    src: image5,
    repo: 'www.github.com/coombapace/',
    demo: '',
    description: 'Voltron themed trivia game. Race against the clock to plumb the depths of your Voltron knowledge and choose correctly.',
    tools: 'HTML, CSS, jQuery, MomentJS'
  },
  {
    id: 6,
    index: 5,
    src: image6,
    headline: 'Bamazon',
    creator: 'Mattia Pace',
    repo: 'www.github.com/coombapace/',
    demo: '',
    description: 'A store made with Node.js and MySQL. Has 3 different interfaces and levels of permission: customer, manager, and supervisor.',
    tools: ' Node.js & SQL '
  },
  {
    id: 7,
    index: 6,
    src: image7,
    headline: 'Liri',
    creator: 'Mattia Pace',
    repo: 'www.github.com/coombapace/',
    demo: '',
    description: 'A small app that runs on simple text commands. Similar to SIRI, but without the voice activation. It can search for movie or song info, find a performer\'s upcoming events, and misc. commands that can be specified in a .txt file.',
    tools: 'Built on Node.js. Frameworks, tools, & APIs used include Node-Spotify-API, Axios, OMDB API, Bands In Town API, MomentJS, and DotEnv.'
  }
]

class App extends Component {

  state = {
    showModal: false,
  }

  handleShowMessageClick = (idx) => this.setState({ showModal: true, clickedIndex: idx })
  handleCloseModal = () => this.setState({ showModal: false })

  render() {

    return (
      <div className="App">
        <Wrapper>
          <div className='container'>
            <div className='parallax-group'>
              <div className='panels' id='header'>
                <Header/>
              </div>
              <div className='panels' id="app">
                <Slider heading="Example Slider" slides={slideData} />
              </div>
              <div className='panels' id='footer'>
                <Footer/>
              </div>
            </div>  
          </div>
        </Wrapper>
      </div>
    );
  }
}  

  

export default App;
