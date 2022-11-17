import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const NavBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <TouchableOpacity
          style={styles.navBtn}
          onPress={() => navigation.navigate("HealthDataScr")}
        >
          <Image
            style={styles.navImg}
            source={require("../../assets/healthData.png")}
          />
          {/* <Text style={styles.navText}>Theo dõi sức khỏe</Text> */}
        </TouchableOpacity>
        <View
          style={{
            width: "30%",
            height: "110%",
            marginBottom: "10%",

            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,

            backgroundColor: "#ffffff",
          }}
        >
          <TouchableOpacity
            style={{
              width: "90%",
              height: "90%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
              backgroundColor: "#B1D7B4",
            }}
            onPress={() => navigation.navigate("HomeScr")}
          >
            <Image
              style={styles.navImg}
              source={require("../../assets/home.png")}
            />
            {/* <Text style={styles.navText}>Trang chủ</Text> */}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.navBtn}
          onPress={() => navigation.navigate("SettingsScr")}
        >
          <Image
            style={styles.navImg}
            source={require("../../assets/settings.png")}
          />
          {/* <Text style={styles.navText}>Cài đặt</Text> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function Settings({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <View style={styles.UserpropertiesContainer}>
          <View style={styles.box}>
            <Image
              style={{
                width: "25%",
                height: "100%",
                resizeMode: "contain",
                marginLeft: "5%",
              }}
              source={require("../../assets/user.png")}
            />
            <View style={styles.properties}>
              <Text style={{ fontSize: 22 }}>Tên người dùng</Text>
              <Text style={{ marginTop: "5%" }}>Tuổi - nơi ở</Text>
            </View>
          </View>
        </View>
        <View style={styles.healthReportContainer}>
          <Text style={{ fontSize: 24 }}>Báo cáo sức khỏe</Text>
          <Text>Health comment</Text>
        </View>
        <View style={styles.updateVersionContainer}>
          <Text>Cập nhật phiên bản</Text>
          <Text>2.0</Text>
        </View>
      </View>
      <NavBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffffff",
    alignItems: "center",
  },

  bodyContainer: {
    width: "100%",
    height: "100%",
  },

  navContainer: {
    position: "fixed",
    width: "90%",
    height: 90,
    bottom: "2.5%",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    borderRadius: 20,

    backgroundColor: "#00000030",
  },

  navBtn: {
    width: "30%",
    height: "100%",

    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  navText: {
    fontSize: 16,
    textAlign: "center",
  },

  navImg: {
    width: "40%",
    height: "50%",
    resizeMode: "cover",
  },

  UserpropertiesContainer: {
    width: "100%",
    height: "20%",

    justifyContent: "center",
    alignItems: "center",

    // backgroundColor: "pink",
  },

  box: {
    width: "90%",
    height: "70%",

    borderBottomLeftRadius: 80,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,

    flexDirection: "row",
    justifyContent: "space-between",

    backgroundColor: "#B1D7B4",
  },

  properties: {
    width: "65%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  healthReportContainer: {
    width: "90%",
    height: "15%",

    marginLeft: "5%",

    justifyContent: "space-around",
    alignItems: "center",

    borderRadius: 20,

    backgroundColor: "#B1D7B4",
  },

  updateVersionContainer: {
    width: "90%",
    height: "5%",

    marginLeft: "5%",
    marginTop: "10%",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    borderBottomWidth: 2,
  },
});
