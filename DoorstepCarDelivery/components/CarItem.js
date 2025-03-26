import { View, Text } from 'react-native'


const CarItem = ({ car }) => {
  return (
    <View style={styles.carBox}>
      <Image style={styles.image} source={car.image} />
      <Text style={styles.carName}>{car.name}</Text>
      <Text style={styles.fueltype}>{car.fueltype}</Text>
      <Text style={styles.rating}>Rating: {car.rating} ⭐</Text>
      <Text style={styles.price}>Price: {car.price}</Text>
      <Button title="Book Now" onPress={() => alert(`Booking ${car.name}`)} />
    </View>
  );
};
export default carItem