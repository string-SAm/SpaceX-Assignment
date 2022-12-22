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
  underConstruction: "red",
};

const Card = (props) => {
  const { navigation, route } = props;
  console.log("cardDet ", props);
  const item = route.params.item;
  const { images, name, region, id, details, status, locality, launches } =
    item;
  const { large } = images;
  console.log("url", name, large[0]);

  return (
    <ScrollView>
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
            <Text style={styles.poster_text}>{details}</Text>
            <Text style={{ color: STATUS_VS_COLOR[status] }}>
              Status:{status}
            </Text>
            <Text style={{ color: "blue" }}>Location:{locality}</Text>

            <Text style={styles.poster_text}>Top 3 Launches are:</Text>
            {launches.slice(0, 3).map((launch) => (
              <Text>{launch}</Text>
            ))}
          </View>
          <Button
            title="Learn More on Wikipedia"
            onPress={() =>
              Linking.openURL("https://en.wikipedia.org/wiki/Launch_pad")
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    fontSize: 30,
    marginBottom: 20,
  },

  poster: {
    width: 350,
    borderWidth: 1,
    alignItem: "center",
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
