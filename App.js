import { StatusBar } from "expo-status-bar";
import React from "react";
import Onboarding from "./app/screens/Onboarding";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors, sizes } from "./app/config/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Tabs from "./app/navigation/Tabs";
import { Ionicons } from "@expo/vector-icons";
import DestinationDetail from "./app/screens/DestinationDetail";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Onboarding"
      component={Onboarding}
      options={{
        headerShown: false,
        // title: null,
        // headerStyle: {
        //   backgroundColor: colors.white,
        // },
        // headerRight: () => (
        //   <TouchableOpacity
        //     style={{
        //       marginRight: sizes.padding,
        //     }}
        //     onPress={() => console.log("presed")}
        //   >
        //     <MaterialCommunityIcons name="menu" size={25} />
        //   </TouchableOpacity>
        // ),
      }}
    />
    <Stack.Screen
      name="DestinationDetail"
      component={DestinationDetail}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Home"
      component={Tabs}
      options={({ navigation }) => ({
        title: null,
        headerStyle: {
          backgroundColor: colors.white,
        },
        headerLeft: () => (
          <TouchableOpacity
            // style={{ marginLeft: sizes.padding }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={25} color="black" />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => console.log("menu")}>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={25}
              color="black"
            />
          </TouchableOpacity>
        ),
      })}
      // options={{
      //   title: null,
      //   headerStyle: {
      //     backgroundColor: colors.white,
      //   },
      //   headerLeft: ({ navigation, navigate }) => (
      //     <TouchableOpacity
      //       // style={{ marginLeft: sizes.padding }}
      //       onPress={() => navigation.navigate("Onboarding")}
      //     >
      //       <Ionicons name="chevron-back" size={25} color="black" />
      //     </TouchableOpacity>
      //   ),
      //   headerRight: () => (
      //     <TouchableOpacity onPress={() => console.log("menu")}>
      //       <MaterialCommunityIcons
      //         name="dots-vertical"
      //         size={25}
      //         color="black"
      //       />
      //     </TouchableOpacity>
      //   ),
      // }}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <StackNavigator />
    </NavigationContainer>
  );
}
