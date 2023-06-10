import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from "react-native";

export default function App() {
  const [Items, setItems] = useState([
    { key: 1, item: "item1" },
    { key: 2, item: "item2" },
    { key: 3, item: "item3" },
    { key: 4, item: "item4" },
    { key: 5, item: "item5" },
    { key: 6, item: "item6" },
    { key: 7, item: "item7" },
    { key: 8, item: "item8" },
    { key: 9, item: "item9" },
    { key: 10, item: "item10" },
    { key: 11, item: "item11" },
  ]);
  const [Refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, { key: 69, item: "Item 69" }]);
    setRefreshing(false);
  };
  return (
    <View
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={["#ff00ff"]}
        />
      }
    >
      <ScrollView>
        {Items.map((Object) => {
          return (
            <View style={styles.item} key={Object.key}>
              <Text style={styles.text}>{Object.item}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    backgroundColor: "#03fc7b",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 45,
  },
});
