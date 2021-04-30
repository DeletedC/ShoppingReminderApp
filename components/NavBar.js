import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const NavBar = props => {
  return (
    <View style={styles.navBar}>
      <Button title="New" />
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
      flex: 1,
      justifyContent: 'flex-end',
  }
});

export default NavBar;