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
  const [name, setName] = useState("HuyHieu");
  const [session, setSession] = useState({ number: 1, title: "states" });
  const [current, setCurrent] = useState(true);

  const onclickHandler = () => {
    setName("update name");
    setSession({ number: 6, title: "Style" });
    setCurrent(false);
  };
  return (
    <View style={styles.body}>
      <Text>
        this is section numbert {session.number} + {session.title}
      </Text>
      <Text style={styles.text}>
        {current ? "current session" : "next session"}
      </Text>
      <Text style={styles.text}>{name}</Text>
      <Button title="Update state" onPress={onclickHandler} />
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
