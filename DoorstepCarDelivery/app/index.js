import { Text, View, StyleSheet } from "react-native";
import CarSelection from "@/navigation/screens/CarSelectionScreen";
import {light, dark} from "../assets/colors/colors"


export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.background,
    justifyContent: "center",
    alignItems: "center",
  }
})
