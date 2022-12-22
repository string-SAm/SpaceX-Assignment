import { StyleSheet, Text, View, ScrollView } from "react-native";
import Card from "./Card";
import { getApi } from "../services";

import React, { useState, useEffect } from "react";

const Home = (props) => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    const temp = async () => {
      const api = "https://api.spacexdata.com/v4/launchpads";
      const response = await getApi(api);
      setValue(response);
    };
    temp();
  }, []);
  console.log("value", value);
  const { navigation } = props;
  console.log("props: ", props, navigation);
  return (
    <ScrollView style={styles.cardContainer}>
      <Text style={styles.headContainer}>SpaceX Launchpad</Text>
      {value.map((item, id) => (
        <Card item={item} id={id} navigation={navigation} />
      ))}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  headContainer: {
    fontFamily: "East Sea Dokdo",
    fontSize: 38,
    color: "#000000",
    textAlign: "center",
    backgroundColor: "skyblue",
  },
});
