// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry, View,SafeAreaView } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
// JSX, way to make a javascript
const App = () => (
    
    <SafeAreaView>
        <Header headerText={'Albums'} />        
        <AlbumList />
    </SafeAreaView>

);


// Render it to the device
AppRegistry.registerComponent('albums', () => App);
