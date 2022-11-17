import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//
import Welcome from "./commponents/Welcome/index.js";
//
import Login from "./commponents/Login/index.js";
import Register from "./commponents/Register/index.js";
import GetPersonalInfo from "./commponents/Register/GetPersonalInfo.js";
//
import Home from "./commponents/Home/index.js";
import HomeScr from "./commponents/Home/HomeScreen";
import HealthDataScr from "./commponents/Home/HealthDataScr";
import SettingsScr from "./commponents/Home/SettingsScr";
//
import Calendar from "./commponents/Calendar/index.js";
import Reminder from "./commponents/Calendar/Reminder.js";
//
import Analysis from "./commponents/Analysis/index.js";
//
import Disease from "./commponents/Disease/index.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Welcome"
    //     screenOptions={{ headerShown: false }}
    //   >
    //     <Stack.Screen name="Welcome" component={Welcome} />
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Register" component={Register} />
    //     <Stack.Screen name="GetPersonalInfo" component={GetPersonalInfo} />
    //     <Stack.Screen name="HomeScr" component={HomeScr} />
    //     <Stack.Screen name="HealthDataScr" component={HealthDataScr} />
    //     <Stack.Screen name="SettingsScr" component={SettingsScr} />
    //     <Stack.Screen name="Calendar" component={Calendar} />
    //     <Stack.Screen name="Reminder" component={Reminder} />
    //     <Stack.Screen name="Analysis" component={Analysis} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View style={styles.container}>
      <Reminder />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },
});
