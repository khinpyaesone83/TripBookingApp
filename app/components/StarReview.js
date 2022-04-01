import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, StyleSheet, Text } from "react-native";
import { sizes } from "../config/Colors";
import { colors } from "./../config/Colors";

const StarReview = ({ rate }) => {
  var starComponents = [];
  var fullStar = Math.floor(rate);
  var noStar = Math.floor(5 - rate);
  var halfStar = 5 - fullStar - noStar;

  //   fullStar
  for (var i = 0; i < fullStar; i++) {
    starComponents.push(
      <FontAwesome key={`full-${i}`} name="star" size={20} color="orange" />
    );
  }
  // Half Star
  for (var i = 0; i < halfStar; i++) {
    starComponents.push(
      <FontAwesome
        name="star-half-empty"
        size={20}
        color="orange"
        key={`half-${i}`}
      />
    );
  }
  // No Star
  for (var i = 0; i < noStar; i++) {
    starComponents.push(
      <FontAwesome name="star-o" size={20} color="orange" key={`no-${i}`} />
    );
  }
  return (
    <View style={styles.container}>
      {starComponents}
      <Text style={styles.text}>{rate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: sizes.base,
    fontSize: sizes.body3,
    color: colors.gray,
  },
});

export default StarReview;
