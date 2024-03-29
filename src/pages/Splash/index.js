import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { ILLogo } from "../../../assets";
import { colors } from "../../utils";

export default function Splash({ navigation }) {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace("GetStarted");
    }, 3000);
  }, []);
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.text.primary,
    marginTop: 20,
  },
});
