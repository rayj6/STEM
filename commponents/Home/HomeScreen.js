import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
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
          onPress={() => navigation.replace("SettingsScr")}
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

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <View style={styles.headingBox}></View>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.bodyBox}>
          <View style={styles.Line}>
            <TouchableOpacity
              style={styles.logoContainer}
              onPress={() => navigation.navigate("Calendar")}
            >
              <Image
                style={styles.Logo}
                source={require("../../assets/calendar.png")}
              />
              <Text style={{ marginTop: 10 }}>Lịch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoContainer}>
              <Image
                style={styles.Logo}
                source={require("../../assets/analysis.png")}
              />
              <Text style={{ marginTop: 10 }}>Phân tích</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoContainer}>
              <Image
                style={styles.Logo}
                source={require("../../assets/disease.png")}
              />
              <Text style={{ marginTop: 10 }}>Bệnh</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Line}>
            <TouchableOpacity style={styles.logoContainer}>
              <Image
                style={styles.Logo}
                source={require("../../assets/nutrition.png")}
              />
              <Text style={{ marginTop: 10 }}>Dinh dưỡng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoContainer}>
              <Image
                style={styles.Logo}
                source={require("../../assets/consultation.png")}
              />
              <Text style={{ marginTop: 10 }}>Tư vấn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoContainer}>
              <Image
                style={styles.Logo}
                source={require("../../assets/help.png")}
              />
              <Text style={{ marginTop: 10 }}>Trợ giúp</Text>
            </TouchableOpacity>
          </View>
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

  headingContainer: {
    width: "100%",
    height: "40%",

    backgroundColor: "#ffffff",
  },

  headingBox: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 50,

    backgroundColor: "#B1D7B4",
  },

  bodyContainer: {
    width: "100%",
    height: "60%",

    backgroundColor: "#B1D7B4",
  },

  bodyBox: {
    width: "100%",
    height: "100%",
    borderTopRightRadius: 50,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#ffffff",
  },

  Line: {
    width: "95%",
    height: "20%",

    marginBottom: "10%",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    // backgroundColor: "green",
  },

  logoContainer: {
    width: "30%",
    height: "100%",

    justifyContent: "center",
    alignItems: "center",

    // backgroundColor: "pink",
  },

  Logo: {
    width: "55%",
    height: "60%",
    resizeMode: "cover",
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
});
