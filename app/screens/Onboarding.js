import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { colors, sizes } from "../config/Colors";
import { LinearGradient } from "expo-linear-gradient";

const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={require("../../assets/onboarding.png")}
          resizeMode="contain"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      <View style={styles.image}>
        <View style={styles.text}>
          <Text style={styles.heading}>Digital Ticket</Text>
          <Text style={styles.content}>
            Easy solution to buy tickets for your travel business
            trips,transporation,lodging and culinary.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <LinearGradient
            style={{
              height: "100%",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
            colors={["#46aeff", "#5884ff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.buttonText}>Start !</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    alignItems: "center",
    marginHorizontal: sizes.padding,
  },
  heading: {
    fontSize: sizes.h2,
  },
  content: {
    color: colors.gray,
    marginTop: sizes.padding,
    textAlign: "center",
  },
  button: {
    marginTop: sizes.padding * 2,
    width: "70%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: colors.white,
    fontSize: sizes.h3,
  },
});

export default Onboarding;
