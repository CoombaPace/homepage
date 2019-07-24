import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
// import Gallery from './components/Gallery'
import Wrapper from './components/Wrapper'
import ProjectCardHolder from './components/ProjectCardHolder'
import Modal from './components/Modal/Modal'

import image1 from './images/iStock.png'
import image2 from './images/memory_clicker.png'
import image3 from './images/awnews.png'
import image4 from './images/battlearena.png'
import image5 from './images/voltron_screen.png'
import image6 from './images/bamazon.png'
import image7 from './images/liri.png'


let tileData = [
  {
      id: 1,
      img: image1,
      title: 'iStock',
      creator: 'John Ortega, Erik Johnson, Sam Lutz, Mattia Pace',
      repo: 'https://github.com/CoombaPace/reactstock',
      demo: 'https://reactstock.herokuapp.com/',
      description: ''
    },
    {
      id: 2,
      img: image2,
      title: 'Memory Clicker',
      creator: 'Mattia Paceauthor',
      repo: 'www.github.com/coombapace/',
      demo: 'https://coombapace.github.io/react-memory-game/',
      description: ''
    },
    {
      id: 3,
      img: image3,
      title: 'AWNews Scraper',
      creator: 'Mattia Pace',
      repo: 'https://coombapace.github.io/awnews',
      demo: 'https://awnews.herokuapp.com',
      description: ''
  },
  {
      id: 4,
      img: image4,
      title: 'Battle Clicky Game',
      creator: 'Mattia Pace',
      repo: 'www.github.com/coombapace/',
      demo: '',
      description: ''
  },
  {
      id: 5,
      img: image5,
      title: 'Trivia Game',
      creator: 'Mattia Pace',
      repo: 'www.github.com/coombapace/',
      demo: '',
      description: ''
  },
  {
      id: 6,
      img: image6,
      title: 'Bamazon',
      creator: 'Mattia Pace',
      repo: 'www.github.com/coombapace/',
      demo: '',
      description: ''
  },
  {
      id: 7,
      img: image7,
      title: 'Liri',
      creator: 'Mattia Pace',
      repo: 'www.github.com/coombapace/',
      demo: '',
      description: ''
  },
];

class App extends Component {

  state = {
    showModal: false,
    tileData: tileData
  }

  handleShowMessageClick = (idx) => this.setState({ showModal: true, clickedIndex: idx })
  handleCloseModal = () => this.setState({ showModal: false })

  render() {

    return (
      <div className="App">
        <Wrapper>
          <Header/> 

            <div className='cards'>

                {tileData.map((data, idx) => (
                  <ProjectCardHolder
                    data={data}
                    key={data.id}
                    handleShowMessageClick={() => this.handleShowMessageClick(idx)}
                  />
                ))}

                {this.state.showModal ? (
                  <Modal onClose={this.handleCloseModal}>
                    <span>ID: {this.state.tileData[this.state.clickedIndex].id}  |  </span>
                    <br />
                    <span>Name: {this.state.tileData[this.state.clickedIndex].name}   |   </span>
                    <br />
                    <span>Repo: {this.state.tileData[this.state.clickedIndex].repo}   |   </span>
                    <br />
                    <span>Demo: {this.state.tileData[this.state.clickedIndex].demo}   |   </span>
                    <br />
                    <img src={this.state.tileData[this.state.clickedIndex].img} alt='project sample' />

                  </Modal>
                ) : null}
              </div>
              <Footer/>
        </Wrapper>
      </div>
    );
  }
}  

  

export default App;
