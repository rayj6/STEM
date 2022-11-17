import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

import { Auth } from "../../config.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Authentication = (email, password, navigation) => {
  createUserWithEmailAndPassword(Auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      navigation.navigate("Login");

      // ...
    })
    .catch((error) => {
      console.log(error);
      // ..
    });
};

export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Xin chào</Text>
        <Text style={styles.content}>
          Đăng kí để bắt đầu hành trình của bạn
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tài khoản"
          value={email}
          onChangeText={(e) => setEmail(e)}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Mật Khẩu"
          value={password}
          onChangeText={(e) => setPassword(e)}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => Authentication(email, password, navigation)}
        >
          <Text style={styles.loginText}>ĐĂNG KÍ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.toRegisterContainer}>
        <View style={styles.topLine}></View>
        <View style={styles.toRegister}>
          <Text>Bạn đã có tài khoản ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.register}>Đăng nhập</Text>
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
    backgroundColor: "#ffffff",
  },

  titleContainer: {
    width: "95%",
    height: "30%",

    justifyContent: "center",

    marginLeft: "5%",

    // backgroundColor: "red",
  },

  title: {
    fontSize: 50,
    fontWeight: "bold",
  },

  content: {
    fontSize: 20,
    fontWeight: "300",
  },

  inputContainer: {
    width: "100%",
    height: "40%",

    justifyContent: "center",
    alignItems: "center",

    // backgroundColor: "blue",
  },

  input: {
    width: "75%",
    height: "10%",

    fontSize: 14,
    borderBottomColor: "#000000",
    borderBottomWidth: 3,

    marginBottom: "10%",
  },

  loginButton: {
    width: "45%",
    height: "13%",

    justifyContent: "center",
    alignItems: "center",

    marginTop: "5%",

    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,

    backgroundColor: "#B1D7B4",
  },

  loginText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },

  toRegisterContainer: {
    width: "100%",
    height: "20%",

    marginLeft: "5%",

    // backgroundColor: "pink",
  },

  topLine: {
    width: "50%",
    height: 1,
    borderWidth: 1,
  },

  toRegister: {
    width: "60%",
    height: "20%",

    flexDirection: "row",

    alignItems: "center",
    justifyContent: "space-between",
  },

  register: {
    color: "#B1D7B4",
  },
});
