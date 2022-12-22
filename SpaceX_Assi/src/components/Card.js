import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Linking,
  ScrollView,
} from "react-native";
import React from "react";

const STATUS_VS_COLOR = {
  active: "green",
  retired: "black",
  "under construction": "red",
};

const Card = (props) => {
  const { item, navigation } = props;
  const { images, name, region, id, details, status } = item;
  const { large } = images;
  console.log("url", props, name, large[0]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{name}</Text>
      <View style={styles.poster}>
        <Image
          style={styles.imgStyle}
          source={{
            uri: large[0],
          }}
        />

        <View style={styles.poster_info}>
          <Text style={styles.poster_title}>{name}</Text>
          <Text style={styles.poster_text}>{details}</Text>
          <Text style={{ color: STATUS_VS_COLOR[status] }}>{status}</Text>
        </View>
        <Button
          title="Know More"
          onPress={() => {
            navigation.navigate("CardDetails", { item: item });
          }}
        />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue",
  },

  header: {
    fontSize: 30,
    marginBottom: 20,
  },

  poster: {
    width: 250,
    borderWidth: 1,
    alignItem: "center",
    backgroundColor: "white",
  },

  poster_info: {
    alignItems: "center",
    marginVertical: 10,
  },

  poster_title: {
    fontSize: 20,
    marginBottom: 10,
  },

  poster_text: {
    color: "#999",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  imgStyle: {
    width: " 100%",
    height: undefined,
    aspectRatio: 1,
  },
  buttonStyle: {
    borderWidth: 0,
    borderRadius: 20,
  },
});
