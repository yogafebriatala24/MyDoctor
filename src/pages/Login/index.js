import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ILLogo } from "../../../assets";
import { Button, Gap, Input, Link } from "../../components";
import { colors } from "../../utils";

export default function Login() {
  return (
    <View style={styles.pages}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Adress" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Forget My Password" />
      <Gap height={40} />
      <Button title="Sign In" />
      <Gap height={30} />
      <Link title="Create New Account" size={16} align={"center"} />
    </View>
  );
}

const styles = StyleSheet.create({
  pages: {
    padding: 40,
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});
