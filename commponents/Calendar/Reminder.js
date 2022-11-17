import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Touchable,
  Image,
  ScrollView,
} from "react-native";
import { useState } from "react";

import { Auth, Database } from "../../config.js";
import { set, get, ref, update, onValue } from "firebase/database";

const TopNav = ({ navigation }) => {
  return (
    <View style={styles.topNav}>
      <TouchableOpacity
        style={styles.topNavBtn}
        onPress={() => navigation.navigate("Calendar")}
      >
        <Image
          style={styles.topNavImg}
          source={require("../../assets/back.png")}
        />
      </TouchableOpacity>
      <Text style={{ fontSize: 22 }}>NHẮC NHỞ</Text>
      <TouchableOpacity style={styles.topNavBtn}>
        <Image
          style={styles.topNavImg}
          source={require("../../assets/add.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const AddActivity = (
  activityName,
  from,
  to,
  about,
  alert,
  isAlert,
  hour,
  minute,
  isRepeat
) => {
  Auth.onAuthStateChanged(async (user) => {
    if (user) {
      await set(ref(Database, `calendar/${user.uid}/${activityName}/`), {
        from: from,
        to: to,
        about: about,
        alert: alert,
        isAlert: isAlert,
        hour: hour,
        minute: minute,
        isRepeat: isRepeat,
      });
    } else {
      console.log("User not logged in or has just logged out.");
    }
  });
};

export default function Reminder({ navigation }) {
  const [color, setColor] = useState("#ffffff");
  return (
    <View style={styles.container}>
      <TopNav navigation={navigation} />

      <View style={styles.bodyContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.nameInputContainer}>
            <TextInput
              style={styles.nameInput}
              placeholder="( Tên việc cần làm )"
            />
            <TouchableOpacity style={styles.nameInputLogoContainer}>
              <Image
                style={styles.nameInputLogo}
                source={require("../../assets/emoji.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.setAlertContainer}>
            <Text>Nhắc tôi trong ngày</Text>
            <TouchableOpacity
              onPress={() => setColor("green")}
              style={{
                width: "10%",
                height: "60%",

                borderRadius: 20,
                borderColor: "#ffffff",
                borderWidth: 2,

                backgroundColor: color,
              }}
            />
          </View>
          <View style={styles.setClockContainer}>
            <Text>Đồng hồ</Text>
          </View>
          <View style={styles.setDateContainer}>
            <TextInput
              style={styles.setDate}
              keyboardType={"default"}
              placeholder="Thứ"
            />
            <TextInput
              style={styles.setDate}
              keyboardType={"number-pad"}
              placeholder="Ngày"
            />
            <TextInput
              style={styles.setDate}
              keyboardType={"number-pad"}
              placeholder="Tháng"
            />
          </View>
          <View style={styles.setDateContainer}>
            <View style={{ width: "10%" }} />
            <TextInput
              style={styles.setDate}
              keyboardType={"number-pad"}
              placeholder="Giờ"
            />
            <TextInput
              style={styles.setDate}
              keyboardType={"number-pad"}
              placeholder="Phút"
            />
            <View style={{ width: "10%" }} />
          </View>
          <TouchableOpacity style={styles.setLoopContainer}>
            <Text style={{ fontWeight: "bold" }}>Lặp lại</Text>
            <Text>Không bao giờ</Text>
          </TouchableOpacity>
          <TextInput style={styles.Alert} />

          <TouchableOpacity>
            <Text>HOÀN THÀNH</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
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

  bodyContainer: {
    width: "90%",
    height: "80%",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    position: "fixed",
    bottom: 0,
  },

  nameInputContainer: {
    width: "100%",
    height: 70,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    // backgroundColor: "pink",
  },

  nameInput: {
    width: "80%",
    height: "75%",

    fontSize: 18,
    borderRadius: 15,
    paddingLeft: 10,
    paddingRight: 10,

    backgroundColor: "#B1D7B4",
  },

  nameInputLogoContainer: {
    width: "15%",
    height: "75%",

    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#B1D7B4",
  },

  nameInputLogo: {
    width: "60%",
    height: "60%",

    resizeMode: "contain",
  },

  setAlertContainer: {
    width: "100%",
    height: 60,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginTop: 10,
    borderRadius: 20,

    paddingLeft: 10,
    paddingRight: 10,

    backgroundColor: "#B1D7B4",
  },

  setClockContainer: {
    width: "100%",
    height: 60,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginTop: 10,
    borderRadius: 20,

    paddingLeft: 10,
    paddingRight: 10,

    backgroundColor: "#B1D7B4",
  },

  setDateContainer: {
    width: "100%",
    height: 60,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginTop: 10,
    borderRadius: 20,

    paddingLeft: 10,
    paddingRight: 10,
  },

  setDate: {
    width: "30%",
    height: "70%",

    borderRadius: 20,

    textAlign: "center",

    backgroundColor: "#B1D7B4",
  },

  setLoopContainer: {
    width: "100%",
    height: 60,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginTop: 10,
    borderRadius: 20,

    paddingLeft: 10,
    paddingRight: 10,

    backgroundColor: "#B1D7B4",
  },

  Alert: {
    width: "100%",
    height: 400,

    marginTop: 10,
    borderRadius: 20,

    paddingLeft: 10,
    paddingRight: 10,

    backgroundColor: "#B1D7B4",
  },
});
