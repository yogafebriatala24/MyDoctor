import React from "react";
import { TouchableOpacity } from "react-native";
import { Arrow } from "../../../../assets";

export default function IconOnly({ onPress, icon }) {
  const Icon = () => {
    if (icon === "back-dark") {
      return <Arrow />;
    }
    if (icon === "back-light") {
      return <Arrow />;
    }
    return <Arrow />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
}
