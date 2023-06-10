import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Linking,
  SafeAreaView,
  ScrollView,
} from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0);
  const onClickHandler = () => {
    setCounter(counter + 1);
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{counter * 5}</Text>
      <Button title="Add" onPress={onClickHandler} />
      <Text> You click {counter} times</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#0ddfdf",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 20,
    fontStyle: "italic",
    margin: 10,
  },
});
