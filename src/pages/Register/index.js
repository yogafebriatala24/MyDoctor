import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Gap, Header, Input } from "../../components";
import { colors } from "../../utils";

export default function Register() {
  return (
    <View style={styles.page}>
      <Header />
      <View style={styles.container}>
        <Input label="Nama Lengkap" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Email" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Button title="Lanjut" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  container: {
    padding: 40,
    paddingTop: 0,
  },
});
