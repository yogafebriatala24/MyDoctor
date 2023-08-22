import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function Input({ label }) {
  return (
    <View>
      <Text style={styles.label}> {label} </Text>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#E9E9E9",
    borderRadius: 10,
    height: 45,
    padding: 12,
  },
  label: {
    fontSize: 16,
    color: "#7D8797",
    marginBottom: 6,
    fontWeight: "400",
  },
});
