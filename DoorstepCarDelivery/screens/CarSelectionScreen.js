import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { dark, light } from "../assets/colors/colors";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

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
    fueltype: "Electric",
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
  {
    id: 6,
    name: "Porsche Taycan",
    fueltype: "Electric",
    image: require("../assets/images/porsche-model-6.png"),
    rating: 5,
    price: "$100",
  },
  {
    id: 7,
    name: "Porsche Taycan",
    fueltype: "Electric",
    image: require("../assets/images/porsche-model-7.png"),
    rating: 5,
    price: "$100",
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
}

const CarSelectionScreen = () =>{
  const [userInput, setUserInput] = useState("");

  const filterdata = DATA.filter(car => 
    car.fueltype.toLowerCase().includes(userInput.toLowerCase())
  );
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
          <TextInput
            style={styles.textInputContaioner}
            placeholder="Search the Porsche"
            value={userInput}
            onChangeText={setUserInput}
          />
        <View>
          <FlatList
            data={filterdata}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <CarItem car={item} />}
            contentContainerStyle={styles.flatListContainer} // Add some padding to the FlatList
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.background,
  },
  textInputContaioner: {
    borderColor: "orange",
    borderWidth: 2,
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 6,
    marginHorizontal: 16,
    marginTop:5,
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
