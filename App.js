import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import Header from './src/Components/header';
import Visor from './src/Components/visor';
import Numbers from './src/Components/numbers';

export default function App() {
  const [currentNumber, setCurrentNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");

  
  
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Visor currentNumber = {currentNumber} lastNumber = {lastNumber}/>
      <Numbers currentNumber = {currentNumber} lastNumber = {lastNumber}
      setCurrentNumber = {setCurrentNumber} setLastNumber = {setLastNumber}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
