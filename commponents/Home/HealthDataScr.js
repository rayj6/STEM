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
export default function HealthData({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <View style={styles.AccountContainer}>
          <TouchableOpacity style={styles.AccountBtn}>
            <Image
              style={styles.AccountLogo}
              source={require("../../assets/user.png")}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Dữ liệu sức khỏe</Text>
        <View style={styles.searchBarContainer}>
          <TextInput style={styles.searchBar} placeholder="Tìm kiếm ..." />
        </View>
        <View style={styles.FunctionType1}>
          <View style={styles.Line}>
            <TouchableOpacity style={styles.FunctionBtnType1}>
              <Text>Hoạt động</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.FunctionBtnType1}>
              <Text>Chăm sóc</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Line}>
            <TouchableOpacity style={styles.FunctionBtnType1}>
              <Text>Dinh dưỡng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.FunctionBtnType1}>
              <Text>Giấc ngủ</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.FunctionType2}>
          <TouchableOpacity style={styles.FunctionBtnType2}>
            <Text>Báo cáo sức khỏe</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.FunctionBtnType2}>
            <Text>Bệnh của bạn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.FunctionBtnType2}>
            <Text>Đo lường cơ thể</Text>
          </TouchableOpacity>
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

  AccountContainer: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "flex-end",
    // backgroundColor: "pink",
  },

  AccountBtn: {
    width: 40,
    height: 40,

    marginRight: "5%",

    // backgroundColor: "blue",
  },

  AccountLogo: {
    width: "100%",
    height: "100%",

    resizeMode: "contain",
  },

  title: {
    fontSize: 30,
    fontWeight: "600",
    marginLeft: "5%",
  },

  searchBarContainer: {
    width: "100%",
    height: "10%",

    marginTop: "5%",

    justifyContent: "center",
    alignItems: "center",

    // backgroundColor: "blue",
  },

  searchBar: {
    width: "80%",
    height: "60%",

    borderRadius: 20,
    fontSize: 16,
    padding: 10,

    backgroundColor: "#B1D7B4",
  },

  FunctionType1: {
    width: "90%",
    height: "35%",

    marginLeft: "5%",
    marginTop: "5%",

    justifyContent: "space-between",

    // backgroundColor: "pink",
  },

  Line: {
    width: "100%",
    height: "48%",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    // backgroundColor: "blue",
  },

  FunctionBtnType1: {
    width: "48%",
    height: "100%",

    justifyContent: "center",
    alignItems: "center",

    borderRadius: 20,

    backgroundColor: "#B1D7B4",
  },

  FunctionType2: {
    width: "90%",
    height: "18%",

    marginLeft: "5%",
    marginTop: "5%",

    justifyContent: "space-between",
    alignItems: "center",

    // backgroundColor: "grey",
  },

  FunctionBtnType2: {
    width: "100%",
    height: "30%",

    justifyContent: "center",
    borderRadius: 20,
    paddingLeft: 10,

    backgroundColor: "#B1D7B4",
  },
});
