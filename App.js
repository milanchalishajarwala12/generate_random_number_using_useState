import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {/* <Button
          style={styles.increaseButton}
          title="Increase"
          onPress={() => {
            setCounter(counter + 1);
          }}
        />

        <Button
          style={styles.decreaseButton}
          title="Decrease"
          onPress={() => {
            setCounter(counter - 1);
          }}
        /> */}
        <Button
          style={styles.decreaseButton}
          title="Generate a Random number"
          onPress={() => {
            setCounter(Math.round(Math.random() * 10000));
          }}
        />

        <Text style={styles.label1}> Random Number</Text>
        <Text style={styles.label2}>{counter}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  increaseButton: {
    height: 50,
    backgroundColor: 'green',
    marginVertical: 20,
  },
  decreaseButton: {
    height: 50,
    backgroundColor: 'red',
    marginVertical: 20,
  },
  label1: { height: 50, fontSize: 30, marginVertical: 20 },
  label2: { height: 50, fontSize: 20, marginVertical: 20 },
});
