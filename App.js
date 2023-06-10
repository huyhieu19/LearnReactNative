import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view123}>
        <View style={styles.view1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.view2}>
          <Text>
            <Text style={styles.text}>2</Text>
          </Text>
        </View>
        <View style={styles.view3}>
          <Text>
            <Text style={styles.text}>3</Text>
          </Text>
        </View>
      </View>
      <View style={styles.view45}>
        <View style={styles.view4}>
          <Text>
            <Text style={styles.text}>4</Text>
          </Text>
        </View>
        <View style={styles.view5}>
          <Text>
            <Text style={styles.text}>5</Text>
          </Text>
        </View>
      </View>
      <View style={styles.view67}>
        <View style={styles.view6}>
          <Text>
            <Text style={styles.text}>6</Text>
          </Text>
        </View>
        <View style={styles.view7}>
          <Text>
            <Text style={styles.text}>7</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    color: "#000000",
    fontSize: 35,
    fontStyle: "italic",
    margin: 10,
  },
  view123: {
    flex: 0.3,
    flexDirection: "row",
  },
  view1: {
    flex: 0.134,
    backgroundColor: "#03fcf8",
    justifyContent: "center",
    alignItems: "center",
  },
  view2: {
    flex: 0.234,
    backgroundColor: "#f803fc",
    justifyContent: "center",
    alignItems: "center",
  },
  view3: {
    flex: 0.63,
    backgroundColor: "#f0fc03",
    justifyContent: "center",
    alignItems: "center",
  },
  view45: {
    flex: 0.3,
  },
  view4: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  view5: {
    flex: 1,
    backgroundColor: "#03fc07",
    justifyContent: "center",
    alignItems: "center",
  },
  view67: {
    flex: 0.4,
    flexDirection: "row",
  },
  view6: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  view7: {
    flex: 1,
    backgroundColor: "#035efc",
    justifyContent: "center",
    alignItems: "center",
  },
});
