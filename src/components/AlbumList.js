import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {

  // Lifecycle

  // When the component will loaded
  componentWillMount(){
    
    // console.log('haha in');

    // axios.get('https://rallycoding.herokuapp.com/api/music_albums').then( response => console.log(response));


  }
  
  // 1 compulsory method
  // Render
  render() {

    return (
        <View>
            <Text>AlbumLi</Text>
        </View>

      );

  }
  
}

export default AlbumList;