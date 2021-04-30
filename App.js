import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
      <View>
        <Text>Shopping Reminder App</Text>
      </View>
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
