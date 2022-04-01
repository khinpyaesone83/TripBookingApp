import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { sizes, colors } from "../config/Colors";

const OptionItem = ({ icon, bgColor, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.view}>
        <LinearGradient
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15,
          }}
          colors={bgColor}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <MaterialCommunityIcons name={icon} size={25} color="white" />
        </LinearGradient>
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    width: 50,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    marginTop: sizes.base,
    color: colors.gray,
  },
});
export default OptionItem;
