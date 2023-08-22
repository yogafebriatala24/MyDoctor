import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GetStarted, Splash } from "./src/pages";
import Router from "./src/router";

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
