import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TitleBar from './components/TitleBar';
import NavBar from './components/NavBar';

export default function App() {
  return (

    //  App layout should be:
    //  Main container
    //    TitleBar
    //    List of items
    //    Navbar with Home, New, and Search

    // Home returns to the main page
    // New opens a modal 
    //    Option to write an entry
    //    Option to take a photo
    //      Opens the photo component
    // Search opens a search page
    

    <View style={styles.container}>
      <TitleBar />

      {/* LIST OF ITEMS HERE */}

      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
