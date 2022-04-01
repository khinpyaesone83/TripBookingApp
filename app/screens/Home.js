import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { colors, sizes } from "./../config/Colors";
import OptionItem from "../components/OptionItem";

const Home = ({ navigation }) => {
  const [destinations, setDestinations] = useState([
    {
      id: 0,
      name: "Ski Villa",
      img: require("../../assets/trip3.jpg"),
    },
    {
      id: 1,
      name: "Climbing Hills",
      img: require("../../assets/trip2.jpg"),
    },
    {
      id: 2,
      name: "Frozen Hills",
      img: require("../../assets/trip1.jpg"),
    },
    {
      id: 3,
      name: "Beach",
      img: require("../../assets/trip4.jpg"),
    },
  ]);

  //Render
  function renderDestination(item, index) {
    var destinationStyle = {};
    if (index == 0) {
      destinationStyle = { marginLeft: sizes.padding };
    }
    return (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          marginHorizontal: sizes.base,
          ...destinationStyle,
        }}
        onPress={() => navigation.navigate("DestinationDetail", item)}
      >
        <Image
          source={item.img}
          resizeMode="cover"
          style={{
            width: sizes.width * 0.28,
            height: "82%",
            borderRadius: 15,
          }}
        />
        <Text style={{ marginTop: sizes.base / 2, fontSize: sizes.h4 }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      {/* Banner */}
      <View style={styles.banner}>
        <Image
          source={require("../../assets/homebanner.jpg")}
          resizeMode="cover"
          style={styles.image}
        />
        <Text style={styles.bannerText}>Are you ready for adventure</Text>
      </View>
      {/* Option */}
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View
          style={{
            flexDirection: "row",
            marginTop: sizes.padding,
            paddingHorizontal: sizes.base,
          }}
        >
          <OptionItem
            icon="airplane"
            bgColor={["#46aeff", "#5884ff"]}
            label="Flight"
            onPress={() => console.log("Flight")}
          />
          <OptionItem
            icon="train"
            bgColor={["#fddf90", "#fcda13"]}
            label="Train"
            onPress={() => console.log("Train")}
          />
          <OptionItem
            icon="bus"
            bgColor={["#e973ad", "#da5df2"]}
            label="Bus"
            onPress={() => console.log("Bus")}
          />
          <OptionItem
            icon="taxi"
            bgColor={["#fcaba8", "#fe6bba"]}
            label="Taxi"
            onPress={() => console.log("Taxi")}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: sizes.radius,
            paddingHorizontal: sizes.base,
          }}
        >
          <OptionItem
            icon="bed"
            bgColor={["#ffc456", "#ff9c5f"]}
            label="Bed"
            onPress={() => console.log("Bed")}
          />
          <OptionItem
            icon="food-fork-drink"
            bgColor={["#7cf1fb", "#4ebefd"]}
            label="Eat"
            onPress={() => console.log("Eat")}
          />
          <OptionItem
            icon="compass"
            bgColor={["#7be993", "#46caaf"]}
            label="Adventure"
            onPress={() => console.log("Adventure")}
          />
          <OptionItem
            icon="calendar"
            bgColor={["#fca397", "#fc7b6c"]}
            label="Event"
            onPress={() => console.log("Event")}
          />
        </View>
      </View>
      {/* Destination */}
      <View style={{ flex: 1 }}>
        <Text style={styles.heading}>Destinations</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={destinations}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => renderDestination(item, index)}
        />
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
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  banner: {
    flex: 1,
    marginTop: sizes.base,
    paddingHorizontal: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  heading: {
    marginTop: 15,
    marginHorizontal: sizes.padding,
    fontSize: sizes.h2,
  },
  bannerText: {
    position: "absolute",
    fontSize: sizes.h1,
    top: 50,
    left: 30,
    color: colors.white,
  },
});

export default Home;
