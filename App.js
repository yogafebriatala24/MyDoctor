import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GetStarted, Splash } from "./src/pages";

export default function App() {
  return (
    <NavigationContainer>
      <GetStarted />
    </NavigationContainer>
  );
}
