import React from "react";
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
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Programming</Text>
      <Button
        title="Facebook nguyen huy hieu"
        onPress={() => {
          Linking.openURL("https://www.facebook.com/huyhieunguyen19/");
        }}
      />
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
