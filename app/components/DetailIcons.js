import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { sizes } from "../config/Colors";
import { colors } from "./../config/Colors";

const DetailIcons = ({ icon, label }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} size={40} color="#46aeff" />
      <Text style={styles.Iconlabel}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  Iconlabel: {
    marginTop: sizes.base,
    color: colors.gray,
    fontSize: sizes.h3,
  },
});

export default DetailIcons;
