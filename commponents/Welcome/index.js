import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.LogoContainer}>
        <View style={styles.LogoBox}>
          <Image
            style={styles.logo}
            source={require("../../assets/logo.png")}
          />
        </View>
      </View>
      <View style={styles.BodyContainer}>
        <View style={styles.BodyBox}>
          <Text style={styles.title}>WELCOME TO HEALTHCARE</Text>
          <Text style={styles.content}>
            Sức khỏe là chìa khóa cho cuộc sống của bạn
          </Text>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.startText}>BẮT ĐẦU</Text>
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

  LogoContainer: {
    width: "100%",
    height: "50%",

    backgroundColor: "#ffffff",
  },

  LogoBox: {
    width: "100%",
    height: "100%",

    borderBottomRightRadius: 80,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#B1D7B4",
  },

  logo: {
    width: "80%",
    height: "90%",
    resizeMode: "contain",
  },

  BodyContainer: {
    width: "100%",
    height: "50%",

    backgroundColor: "#B1D7B4",
  },

  BodyBox: {
    width: "100%",
    height: "100%",

    borderTopLeftRadius: 80,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#ffffff",
  },

  title: {
    fontSize: 28,
    marginBottom: 15,
    marginTop: "20%",
    color: "#B1D7B4",
  },

  content: {
    fontSize: 16,
    textAlign: "center",
    color: "#92B4EC",
  },

  startButton: {
    width: "30%",
    height: "10%",

    justifyContent: "center",
    alignItems: "center",

    marginTop: "10%",

    borderRadius: 15,

    backgroundColor: "#B1D7B4",
  },

  startText: {
    fontSize: 16,
    textAlign: "center",
  },
});
