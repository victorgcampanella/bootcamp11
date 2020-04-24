import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor= "#7159c1"/>
    <View style={styles.view}>
      <Text style={styles.text}>Hello Rocketseat</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7159c1"
  },

  text: {
    fontSize: 32,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20
  }
})
