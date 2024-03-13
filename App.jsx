import { StyleSheet, View, Text } from "react-native";
import react from "react";
import Headers from "./baseComponents/headers";
import Gnb from "./compositeComponent/gnb2";
import CircularPicture from "./baseComponents/circularPicture";
import ProfileStats from "./compositeComponent/profileStats";
import Profile from "./page/profile";

export default function App() {
  return (
    <View style={styles.container}>
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
