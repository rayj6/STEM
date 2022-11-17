import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function GetPersonalInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.title}>
          <Text style={styles.titleText}>THÔNG TIN CÁ NHÂN</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Họ và tên" />
          <TextInput
            style={styles.input}
            keyboardType={"number-pad"}
            placeholder="Ngày / tháng / năm sinh"
          />
          <TextInput style={styles.input} placeholder="Số điện thoại" />
          <TextInput style={styles.input} placeholder="Địa chỉ" />
        </View>
        <View style={styles.continueContainer}>
          <TouchableOpacity style={styles.continueButton}>
            <Text>TIẾP TỤC</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#ffffff",
  },

  box: {
    width: "95%",
    height: "95%",

    borderRadius: 20,

    backgroundColor: "#00000030",
  },

  title: {
    width: "100%",
    height: "20%",

    justifyContent: "center",
    alignItems: "center",
  },

  titleText: {
    fontSize: 30,
    fontWeight: "600",
  },

  inputContainer: {
    width: "100%",
    height: "70%",

    justifyContent: "space-around",
    alignItems: "center",

    // backgroundColor: "blue",
  },

  input: {
    width: "80%",
    height: "10%",

    borderBottomWidth: 2,
  },

  continueContainer: {
    width: "100%",
    height: "10%",

    justifyContent: "center",
    alignItems: "center",
  },

  continueButton: {
    width: "30%",
    height: "40%",

    justifyContent: "center",
    alignItems: "center",

    borderRadius: 15,

    backgroundColor: "#ffffff",
  },
});
