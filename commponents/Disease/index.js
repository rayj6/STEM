import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const TopNav = ({ navigation }) => {
  return (
    <View style={styles.topNav}>
      <TouchableOpacity
        style={styles.topNavBtn}
        onPress={() => navigation.navigate("HomeScr")}
      >
        <Image
          style={styles.topNavImg}
          source={require("../../assets/back.png")}
        />
      </TouchableOpacity>
      <Text style={{ fontSize: 22 }}>BỆNH</Text>
      <TouchableOpacity
        style={styles.topNavBtn}
        onPress={() => navigation.navigate("Reminder")}
      >
        <Image
          style={styles.topNavImg}
          source={require("../../assets/add.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const SeacrhBar = () => {
  return (
    <View style={styles.SearchBarContainer}>
      <TextInput style={styles.SeacrhBar} placeholder="Tìm bệnh của bạn..." />
    </View>
  );
};

export default function Calendar({ navigation }) {
  return (
    <View style={styles.container}>
      <TopNav navigation={navigation} />
      <SeacrhBar />
      <View style={styles.DiseaseContainer}></View>
      <TouchableOpacity style={styles.btn}>
        <Text>Chưa biết bệnh</Text>
      </TouchableOpacity>
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

  topNav: {
    width: "100%",
    height: "10%",

    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingLeft: "5%",
    paddingRight: "5%",

    backgroundColor: "#B1D7B4",
  },

  topNavBtn: {
    width: 40,
    height: "50%",

    justifyContent: "center",
    alignItems: "center",

    // backgroundColor: "pink",
  },

  topNavImg: {
    width: "70%",
    height: "70%",
    resizeMode: "contain",
  },

  SearchBarContainer: {
    width: "100%",
    height: "8%",

    marginTop: "5%",

    justifyContent: "center",
    alignItems: "center",

    // backgroundColor: "#ccc",
  },

  SeacrhBar: {
    width: "90%",
    height: "80%",

    paddingLeft: 10,

    borderRadius: 15,

    backgroundColor: "#B1D7B4",
  },

  DiseaseContainer: {
    width: "90%",
    height: "70%",

    marginTop: "2%",
    borderRadius: 15,

    backgroundColor: "#B1D7B4",
  },

  btn: {
    width: "50%",
    height: "5%",

    marginTop: "5%",
    borderRadius: 15,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#B1D7B4",
  },
});
