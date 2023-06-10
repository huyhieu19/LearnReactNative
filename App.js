import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}></View>
      <View style={styles.middle}></View>
      <View style={styles.bottom}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  top: {
    flex: 0.3,
    backgroundColor: "black",
  },
  middle: {
    flex: 0.3,
    backgroundColor: "pink",
  },
  bottom: {
    flex: 0.3,
    backgroundColor: "#444",
  },
});
