import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getApi } from "./src/services";
import Home from "./src/components/Home";
import CardDetails from "./src/components/CardDetails";
import { Fragment } from "react";

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <Fragment style={styles.container}></Fragment>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="CardDetails" component={CardDetails} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
