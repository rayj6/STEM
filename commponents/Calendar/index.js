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
      <Text style={{ fontSize: 22 }}>LỊCH</Text>
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

const CalendarContainer = () => {
  return (
    <View style={styles.calendarContainer}>
      <View style={styles.symbol}>
        <Image
          style={styles.symbolImage}
          source={require("../../assets/calendar/January.png")}
        />
      </View>
      <View style={styles.currentMonth}>
        <Text style={{ fontSize: 22, marginTop: "2%" }}>January - 2022</Text>
      </View>
      <View style={styles.calendarBox}>
        <View style={styles.days}>
          <Text style={styles.LineText}>S</Text>
          <Text style={styles.LineText}>M</Text>
          <Text style={styles.LineText}>T</Text>
          <Text style={styles.LineText}>W</Text>
          <Text style={styles.LineText}>T</Text>
          <Text style={styles.LineText}>F</Text>
          <Text style={styles.LineText}>S</Text>
        </View>
        <View style={styles.dates}>
          <View style={styles.Line}>
            <Text style={styles.LineText}>30</Text>
            <Text style={styles.LineText}>31</Text>
            <Text style={styles.LineText}>1</Text>
            <Text style={styles.LineText}>2</Text>
            <Text style={styles.LineText}>3</Text>
            <Text style={styles.LineText}>4</Text>
            <Text style={styles.LineText}>5</Text>
          </View>
          <View style={styles.Line}>
            <Text style={styles.LineText}>6</Text>
            <Text style={styles.LineText}>7</Text>
            <Text style={styles.LineText}>8</Text>
            <Text style={styles.LineText}>9</Text>
            <Text style={styles.LineText}>10</Text>
            <Text style={styles.LineText}>11</Text>
            <Text style={styles.LineText}>12</Text>
          </View>
          <View style={styles.Line}>
            <Text style={styles.LineText}>13</Text>
            <Text style={styles.LineText}>14</Text>
            <Text style={styles.LineText}>15</Text>
            <Text style={styles.LineText}>16</Text>
            <Text style={styles.LineText}>17</Text>
            <Text style={styles.LineText}>18</Text>
            <Text style={styles.LineText}>19</Text>
          </View>
          <View style={styles.Line}>
            <Text style={styles.LineText}>20</Text>
            <Text style={styles.LineText}>21</Text>
            <Text style={styles.LineText}>22</Text>
            <Text style={styles.LineText}>23</Text>
            <Text style={styles.LineText}>24</Text>
            <Text style={styles.LineText}>25</Text>
            <Text style={styles.LineText}>26</Text>
          </View>
          <View style={styles.Line}>
            <Text style={styles.LineText}>27</Text>
            <Text style={styles.LineText}>28</Text>
            <Text style={styles.LineText}>29</Text>
            <Text style={styles.LineText}>30</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default function Calendar({ navigation }) {
  return (
    <View style={styles.container}>
      <TopNav navigation={navigation} />
      <CalendarContainer />
      <View style={styles.activityContainer}></View>
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

  calendarContainer: {
    width: "90%",
    height: "40%",

    marginTop: "5%",

    // backgroundColor: "grey",
  },

  symbol: {
    width: "100%",
    height: "25%",

    // backgroundColor: "pink",
  },

  symbolImage: {
    width: "100%",
    height: "100%",

    resizeMode: "cover",
  },

  currentMonth: {
    width: "100%",
    height: "10%",

    justifyContent: "center",
    alignItems: "center",

    // backgroundColor: "pink",
  },

  calendarBox: {
    width: "100%",
    height: "65%",

    alignItems: "center",
    marginTop: "5%",
    // backgroundColor: "pink",
  },

  days: {
    width: "100%",
    height: "10%",

    alignItems: "center",
    justifyContent: "space-between",

    flexDirection: "row",
  },

  dates: {
    width: "100%",
    height: "90%",

    marginTop: "5%",

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Line: {
    width: "100%",
    height: "10%",

    alignItems: "center",
    // justifyContent: "space-between",

    flexDirection: "row",
  },

  LineText: {
    width: "14.5%",
    height: "100%",

    textAlign: "center",
  },

  activityContainer: {
    width: "90%",
    height: "40%",

    position: "fixed",
    bottom: 0,

    // backgroundColor: "grey",
  },
});
