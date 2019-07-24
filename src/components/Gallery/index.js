// import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import './gallery.css';
// import image1 from '../../images/antiwar_logo.jpg'
// import image2 from '../../images/memory_clicker.png'
// import image3 from '../../images/iStock.png'
// import image4 from '../../images/battlearena.jpg'
// import image5 from '../../images/voltron_screen.png'
// import image6 from '../../images/liri.jpg'
// import image7 from '../../images/bamazon.jpg'

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     overflowY: 'hidden',
//     backgroundColor: '#2B2B2B',
//     // backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     width: 900,
//     height: 550,
//     overflowY: 'hidden',
//     overflow: 'hidden'
//   },
//   GridListTile: {
//     marginTop: 8,
//     overflowY: 'hidden',
//   },
//   img: {
//     marginLeft: 10,

//   }
// }));

// const tileData = [
//     {
//         id: 1,
//         img: image1,
//         title: 'AWNews Scraper',
//         author: 'author',
//         cols: 1,
//       },
//       {
//         id: 2,
//         img: image2,
//         title: 'Memory Clicker',
//         author: '',
//         cols: 2,
//       },
//       {
//         id: 3,
//         img: image3,
//         title: 'Stockabily',
//         author: '',
//         cols: 2,
//     },
//     {
//         id: 4,
//         img: image4,
//         title: 'Battle Clicky Game',
//         author: '',
//         cols: 1,
//     },
//     {
//         id: 5,
//         img: image5,
//         title: 'Trivia Game',
//         author: '',
//         cols: 1,
//     },
//     {
//         id: 6,
//         img: image6,
//         title: 'Bamazon',
//         author: '',
//         cols: 1,
//     },
//     {
//         id: 7,
//         img: image7,
//         title: 'Liri',
//         author: '',
//         cols: 1,
//     },
// ];


// class ImageGridList extends Component {


//   render() {

//   var linkStyle;
//    if (this.props.hover) {
//      linkStyle = {
//         borderStyle: 'solid',
//         borderWidth: '2px 10px 4px 20px',
//         cursor: 'pointer'
//       }
//      console.log("this is linkStyle: ", linkStyle)
//    } else {
//      linkStyle = {color: '#000'}
//      console.log("this is linkStyle: ", linkStyle)

//    }
   

//     return (
//       <div class="card-group">
//         <div class="card">
//           <img class="card-img-top" src="..." alt="Card image cap"/>
//           <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//             <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//           </div>
//         </div>
//         <div class="card">
//           <img class="card-img-top" src="..." alt="Card2 image cap"/>
//           <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
//             <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//           </div>
//         </div>
//         <div class="card">
//           <img class="card-img-top" src="..." alt="Card3 image cap"/>
//           <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
//             <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }


// export default ImageGridList;
//{
  /* 
      <div className='root'>
        <GridList 
        cellHeight={200} 
        className='gridList' 
        cols={3} 
        hover={this.hover} 
        onMouseEnter={this.props.toggleHover} 
        onMouseLeave={this.props.toggleHover}
        >
          {tileData.map(tile => (
            <GridListTile 
            key={tile.id}
            className='GridListTile' 
            onMouseEnter={this.props.toggleHover} 
            onMouseLeave={this.props.toggleHover} 
            cols={tile.cols || 1}
            >
              <img 
              src={tile.img} 
              alt={tile.title}
              style={linkStyle}
 
              onMouseEnter={() => this.props.toggleHover} 
              onMouseLeave={() =>  this.props.toggleHover}
              />
            </GridListTile>
          ))}
        </GridList>
      </div> */
          // }