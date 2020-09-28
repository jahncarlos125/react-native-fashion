import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Onboarding from "./src/Auth/Onboarding";

const AuthStack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
    </AuthStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
