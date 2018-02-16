import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
/*set init state for a component internal records
used to record react native user interaction
*/
  state = { albums: [] };

  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    //fetch our data and tell state to update a component state
      .then(response => this.setState({ albums: response.data}) );
  }
  //helping method to generate album details
  renderAlbums(){
    return this.state.albums.map( album =>
      /* To show all albums' details from the child component AlbumDetail
        and list the album as a prop called album in a variable called album or "anything we want"
      */
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render(){
    //use the state to fetch the data
    console.log(this.state);
    //make the page scrolling
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

// Making the component available to the App
export default AlbumList;
