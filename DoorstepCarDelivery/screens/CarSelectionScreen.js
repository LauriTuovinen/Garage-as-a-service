import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { dark, light } from "../assets/colors/colors";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const DATA = [
  {
    id: 1,
    name: "Porsche Taycan",
    fueltype: "Gasoline",
    image: require("../assets/images/porsche-model-1.png"),
    rating: 5,
    price: "$100",
  },
  {
    id: 2,
    name: "911 GT3 RS",
    fueltype: "Gasoline",
    image: require("../assets/images/porsche-model-2.png"),
    rating: 4.5,
    price: "$120",
  },
  {
    id: 3,
    name: "911 Carrera 4 GTS",
    fueltype: "Gasoline",
    image: require("../assets/images/porsche-model-3.png"),
    rating: 4.5,
    price: "$120",
  },
  {
    id: 4,
    name: "911 GT3 with Touring Package",
    fueltype: "Gasoline",
    image: require("../assets/images/porsche-model-4.png"),
    rating: 4.5,
    price: "$120",
  },
  {
    id: 5,
    name: "911 Darker",
    fueltype: "Gasoline",
    image: require("../assets/images/porsche-model-5.png"),
    rating: 4.5,
    price: "$120",
  },
];
const CarItem = ({ car }) => {
  return (
    <View style={styles.carBox}>
      <Image
        style={styles.image}
        source={car.image}
        resizeMode="cover" // This keeps the aspect ratio and fills the box
      />
      <Text style={styles.carName}>{car.name}</Text>
      <Text style={styles.fueltype}>FuelType: {car.fueltype}</Text>
      <Text style={styles.rating}>Rating: {car.rating} ⭐⭐⭐⭐⭐</Text>
      <Text style={styles.price}>Price: {car.price}</Text>

      {/* Custom styled button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert(`Booking ${car.name}`)}
      >
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { light, dark } from "../assets/colors/colors"

function CarSelectionScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={light.accent} />
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CarItem car={item} />}
          contentContainerStyle={styles.flatListContainer} // Add some padding to the FlatList
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.background,
  },
  flatListContainer: {
    padding: 10,
  },
  carBox: {
    backgroundColor: "orange",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  image: {
    height: 150,
    width: "100%",
  },
  carName: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 10,
  },
  fueltype: {
    fontSize: 14,
    color: "#555",
  },
  rating: {
    fontSize: 14,
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: dark.background,
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    marginTop: 10, // Add some space above the button
  },
  buttonText: {
    color: "#FFFFFF", // White text color
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CarSelectionScreen;
