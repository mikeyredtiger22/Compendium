/**
 * The root navigator is used to switch between major navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow (which is contained in your TabsNavigator) which the user
 * will use once logged in.
 */
import React from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { TabsNavigator } from "./tabs-navigator";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawerContentComponent } from "../components/CustomDrawerContentComponent/CustomDrawerContentComponent";
console.disableYellowBox = true;
const Drawer = createDrawerNavigator();

const RootDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerPosition={"right"}
      drawerContent={CustomDrawerContentComponent}
    >
      <Drawer.Screen name="Home" component={TabsNavigator} />
      <Drawer.Screen name="Settings" component={TabsNavigator} />
    </Drawer.Navigator>
  );
};

export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <RootDrawerNavigator />
    </NavigationContainer>
  );
});

RootNavigator.displayName = "RootNavigator";
