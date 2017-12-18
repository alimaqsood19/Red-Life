import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: './images/event.jpg',
    title: 'Event Idea',
  },
  {
    img: './images/beer.png',
    title: 'Friday Social Idea',
  },
  {
    img: './images/random.jpg',
    title: 'Random',
  },
  {
    img: './images/news.png',
    title: 'Staff Announcement',
  },
];

class Images extends Component{
  constructor(){
    super();

    this.state = {
      picture: ''
    }
  }
  // handleClick = (e) => {
  //   this.setState({
  //     picture = e.target.key
  //   })
  //   console.log(this.state)
  // }

  handleClick(tile) {
    //console.log('Hit', tile);
    this.setState({picture: tile.img})
    //console.log(this.state.picture)
  }

  render(){
    return(
      <div style={styles.root}>
      <GridList
        cellHeight={180}
        style={styles.gridList}
      >
        {tilesData.map((tile) => (
          <GridTile
            key={tile.img}
            title={tile.title}
            onClick={this.handleClick.bind(this, tile)}
          >
            <img src={tile.img} />
          </GridTile>
        ))}
      </GridList>
    </div>
    )
  }
}

export default Images;
