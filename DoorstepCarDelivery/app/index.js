import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from "react-native";
import { light, dark } from "../assets/colors/colors";
import { useState, useEffect } from 'react';
import Navigation from "../components/navigation";


export default function Index() {
  return (
    // Use for example <CarSelectionScreen /> and comment <Navigation/> to see only that screen
        <Navigation />
        // <HomeScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.background,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "space-between",
    margin: 8
  }
})
