import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TitleBar = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Reminder App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    padding: 30,
    backgroundColor: 'lightblue',
    color: 'white',
    borderBottomColor: 'gray',
    borderBottomWidth: 1
  },
  title: {
    color: 'white',
    fontSize: 24
  }
})
export default TitleBar;