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
      <Text style={{ fontSize: 22 }}>PHÂN TÍCH</Text>
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

const Chart = () => {
  return (
    <View style={styles.ChartContainer}>
      <Text style={styles.ChartTitle}>Bạn có thể bị ...</Text>
      <View style={styles.ChartBox}></View>
    </View>
  );
};

const Body = () => {
  return (
    <View style={styles.bodyContainer}>
      <View style={styles.propertiesBox}></View>
      <TouchableOpacity style={styles.addBtn}>
        <Text style={styles.addBtnText}>THÊM VÀO BỆNH CỦA TÔI</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function Calendar({ navigation }) {
  return (
    <View style={styles.container}>
      <TopNav navigation={navigation} />
      <Chart />
      <Body />
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

  ChartContainer: {
    width: "90%",
    height: "30%",

    marginTop: "5%",

    // backgroundColor: "grey",
  },

  ChartTitle: {
    width: "100%",
    height: "10%",

    textAlign: "center",
    marginTop: "10%",

    fontSize: 24,

    // backgroundColor: "blue",
  },

  ChartBox: {
    width: "100%",
    height: "80%",

    // backgroundColor: "grey",
  },

  bodyContainer: {
    width: "100%",
    height: "50%",

    marginTop: "5%",
    position: "fixed",
    bottom: 0,

    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,

    backgroundColor: "#B1D7B4",
  },

  propertiesBox: {
    width: "100%",
    height: "80%",

    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,

    paddingLeft: "5%",
    paddingRight: "5%",

    // backgroundColor: "blue",
  },

  addBtn: {
    width: "50%",
    height: "5%",

    position: "fixed",
    bottom: "2.5%",
    marginLeft: "25%",
    marginRight: "25%",

    borderRadius: 15,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#ffffff",
  },

  addBtnText: {
    fontSize: 14,
  },
});
