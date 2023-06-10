// tim hieu ve FlatList va SectionList

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
} from "react-native";

const App = () => {
  const [Items, setItems] = useState([
    { name: "Item 1" },
    { name: "Item 2" },
    { name: "Item 3" },
    { name: "Item 4" },
    { name: "Item 5" },
    { name: "Item 6" },
    { name: "Item 7" },
    { name: "Item 8" },
    { name: "Item 9" },
    { name: "Item 27" },
    { name: "Item 78" },
  ]);
  const [Sections, setSections] = useState([
    {
      title: "Title 1",
      data: ["Item 1-1", "Item 1-2"],
    },
  ]);
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    const adding_index = Sections.length + 1;
    setSections([
      ...Sections,
      {
        title: "Title " + adding_index,
        data: ["Item " + adding_index + "-1", "Item " + adding_index + "-2"],
      },
    ]);
    setRefreshing(false);
  };

  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={Sections}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text_item}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <View style={styles.header}>
          <Text style={styles.text_header}>{section.title}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl refreshing={Refreshing} onRefresh={onRefresh} />
      }
    ></SectionList>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#4ae1fa",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
  },
  item: {
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text_header: {
    color: "#000000",
    fontSize: 45,
    fontStyle: "italic",
    margin: 10,
  },
  text_item: {
    color: "#000000",
    fontSize: 35,
    margin: 5,
  },
});

export default App;
