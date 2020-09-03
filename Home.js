import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.increaseButton}>
        <Text>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.decreaseButton}>
        <Text>Decrease</Text>
      </TouchableOpacity>
      <Text style={styles.label1}> Current Count</Text>
      <Text style={styles.label2}>0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center' },
  increaseButton: {
    height: 50,
    backgroundColor: 'green',
  },
  decreaseButton: { height: 50, backgroundColor: 'red' },
  label1: {},
  label2: {},
});
