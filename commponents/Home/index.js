import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import HomeScr from "./HomeScreen.js";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <HomeScr />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },

  bodyContainer: {
    width: "100%",
    height: "100%",
    // backgroundColor: "pink",
  },

  navContainer: {
    position: "fixed",
    width: "95%",
    height: 100,
    bottom: 10,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: "#FFFFFF66",
  },

  navBtn: {
    width: "30%",
    height: "100%",

    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#FFFFFF66",
  },
});
