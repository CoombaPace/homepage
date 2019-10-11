import React, { Component } from 'react';

// Components:
import './App.css';
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import Wrapper from './components/Wrapper'
import Slider from './components/Slider'
import Contact from './components/Contact'

// Images:
import image1 from './images/iStock.png'
import image2 from './images/memory_clicker.png'
import image3 from './images/awnews.png'
import image4 from './images/battlearena.png'
import image5 from './images/voltron_screen.png'
import image6 from './images/bamazon.png'
import image7 from './images/liri.png'
import image8 from './images/gbg.png'

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
    tools: 'ReactJS, Material UI components. UI design meant to mimick the screen of the Mass Effect game.'
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
    tools: 'Keep track of your stocks! I coded Stock Card and Modal components, using .map() to display them with their respective data, and .createPortal() to render modals to the DOM.'
  },
  {
    id: 3,
    index: 2,
    headline: 'AW News Scraper',
    src: image3,
    creator: 'Mattia Pace',
    repo: 'https://www.github.com/coombapace/awnews',
    demo: 'https://awnews.herokuapp.com',
    tools: 'Scrapes AntiWar.com XML feed. Built with Node.js, MongoDB, Mongoose, Cheerio, Axios, Express, and Express Handlebars.'
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
    tools: 'Written in JavaScript with HTML, CSS, and jQuery.'
  },
  {
    id: 5,
    index: 4,
    headline: 'Good-Bye Galaxy Ep.4',
    button: 'Github',
    src: image8,
    creator: 'Mattia Pace, Ian Cho, Chad Parks',
    repo: 'https://www.youtube.com/watch?v=Erp9IbaZNjY',
    demo: 'https://www.youtube.com/watch?v=Erp9IbaZNjY',
    tools: 'I illustrated, colored, animated and edited this webseries as a part of a 3-man team, including creating concept art and voicework.'
  },
  {  
    id: 6,
    index: 5,
    headline: 'Trivia Game',
    button: 'Get Focused',
    src: image5,
    repo: 'www.github.com/coombapace/',
    demo: '',
    tools: 'Voltron themed, timed trivia game. Made with HTML, CSS, jQuery, MomentJS'
  },
  {
    id: 7,
    index: 6,
    src: image6,
    headline: 'Bamazon',
    creator: 'Mattia Pace',
    repo: 'www.github.com/coombapace/',
    demo: '',
    tools: 'A store made with Node.js and MySQL. Has 3 different interfaces: Customer, Manager, Supervisor'
  },
  {
    id: 8,
    index: 7,
    src: image7,
    headline: 'Liri',
    creator: 'Mattia Pace',
    repo: 'www.github.com/coombapace/',
    demo: '',
    tools: 'Similar to SIRI, but with text and not voice activation. Built on Node.js. Frameworks, tools, & APIs used include Node-Spotify-API, Axios, OMDB API, Bands In Town API, MomentJS, and DotEnv.'
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
                <Header/>
                <About/>
                <Slider heading="Project Slider" slides={slideData} />
                <Contact/>
              <Footer/>
        </Wrapper>
      </div>
    );
  }
}  

  

export default App;
