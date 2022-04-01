import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "./../config/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: false,
  style: {
    height: 90,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
  },
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? colors.primary : colors.gray;

          switch (route.name) {
            case "Home":
              return (
                <MaterialCommunityIcons
                  name="home"
                  size={30}
                  color={tintColor}
                />
              );
            case "Search":
              return <AntDesign name="search1" size={30} color={tintColor} />;

            case "Bookmark":
              return (
                <MaterialCommunityIcons
                  name="bookmark"
                  size={30}
                  color={tintColor}
                />
              );
            case "Account":
              return (
                <MaterialCommunityIcons
                  name="account"
                  size={30}
                  color={tintColor}
                />
              );
          }
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Account"
        component={Home}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
