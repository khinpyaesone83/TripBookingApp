import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import StarReview from "../components/StarReview";
import { colors, sizes } from "./../config/Colors";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DetailIcons from "../components/DetailIcons";
import { LinearGradient } from "expo-linear-gradient";

const DestinationDetail = ({ route, navigation }) => {
  console.log(route.params);
  const destination = route.params;
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{ flex: 1.5 }}>
        <Image
          source={destination.img}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.card}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.shadow}>
              <Image
                source={destination.img}
                resizeMode="cover"
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 15,
                }}
              />
            </View>
            <View style={styles.cardText}>
              <Text style={{ fontSize: sizes.h3 }}>{destination.name}</Text>
              <Text style={{ color: colors.gray, fontSize: sizes.body3 }}>
                France
              </Text>
              <StarReview rate={4} />
            </View>
          </View>
          {/* <View style={{ marginTop: sizes.radius }}>
            <Text style={{ color: colors.gray, fontSize: sizes.body3 }}>
              Ski Villa offers simple rooms with mountain views in front of the
              ski lift to the Ski Resort
            </Text>
          </View> */}
        </View>
        {/* Header Buttons */}
        <View style={styles.HeaderButton}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Ionicons name="chevron-back" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <TouchableOpacity onPress={() => console.log("Menu")}>
              <MaterialCommunityIcons
                name="dots-vertical"
                size={30}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Body */}
      <View style={{ flex: 1.5 }}>
        {/* Icons */}
        <View style={styles.IconContainer}>
          <DetailIcons icon="home" label="Villa" />
          <DetailIcons icon="parking" label="Parking" />
          <DetailIcons icon="weather-windy" label="4 ℃" />
        </View>

        {/* About */}
        <View style={styles.aboutContainer}>
          <Text style={{ fontSize: sizes.h2 }}>About</Text>
          <Text style={styles.aboutText}>
            Located in the Alps with an altitude of 1,702 meters.This ski area
            is the largest ski area in the world and is known as the best place
            to ski.Many other facilities, such as a fitness center,sauna,steam
            room to star-rated restaurants.
          </Text>
        </View>
      </View>
      {/* Footer */}
      <View
        style={{
          flex: 0.5,
          paddingHorizontal: sizes.padding,
          marginTop: 65,
        }}
      >
        <LinearGradient
          style={{ height: 60, width: "100%", borderRadius: 15 }}
          colors={["#edf0fc", "#d6dfff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <View style={styles.footerContainer}>
            <View style={styles.bottonContainer}>
              <Text style={{ fontSize: sizes.h1 }}>$1000</Text>
            </View>
            <TouchableOpacity
              style={styles.botton}
              onPress={() => console.log("booking press")}
            >
              <LinearGradient
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
                colors={["#46aeff", "#5884ff"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={{ color: "#fff", fontSize: sizes.h2 }}>
                  BOOKING
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  card: {
    position: "absolute",
    bottom: "-10%",
    left: "5%",
    right: "5%",
    borderRadius: 15,
    padding: sizes.padding,
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    marginHorizontal: sizes.radius,
    justifyContent: "space-around",
  },
  HeaderButton: {
    position: "absolute",
    top: 40,
    left: 20,
    right: 20,
    flexDirection: "row",
  },
  IconContainer: {
    flexDirection: "row",
    marginTop: 45,
    paddingHorizontal: sizes.padding * 2,
    justifyContent: "space-between",
  },
  aboutContainer: {
    marginTop: sizes.padding,
    paddingHorizontal: sizes.padding,
  },
  aboutText: {
    marginTop: sizes.radius,
    color: colors.gray,
    fontSize: sizes.body3,
  },
  footerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  bottonContainer: {
    flex: 1,
    marginHorizontal: sizes.padding,
    justifyContent: "center",
  },
  botton: {
    width: 130,
    height: "80%",
    marginHorizontal: sizes.radius,
  },
});

export default DestinationDetail;
