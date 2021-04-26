import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImagePicker from './components/ImagePicker';

export default function App() {
  return (
    <View>
      <ImagePicker />
    </View>
  );
}
