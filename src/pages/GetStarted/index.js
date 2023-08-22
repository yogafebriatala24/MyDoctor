import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ILGetStarted, ILLogo } from "../../../assets/ilustration";
import { Button, Gap } from "../../components";
import { useFonts } from "expo-font";

export default function GetStarted() {
  const [fontsLoaded] = useFonts({
    semibold: require("../../../assets/fonts/Nunito-SemiBold.ttf"),
  });
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button title="Get Started" />
        <Gap height={20} />
        <Button type="secondary" title="Sign In" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: "space-between",
    backgroundColor: "white",
    flex: 1,
  },
  title: {
    fontSize: 28,
    color: "white",
    marginTop: 91,
    fontFamily: "semibold",
  },
});
