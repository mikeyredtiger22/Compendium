import React, { FunctionComponent as Component } from "react";
import { observer } from "mobx-react-lite";
import { ViewStyle } from "react-native";
import { Screen, Text } from "../components";
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

const ROOT: ViewStyle = {};

export const SettingsScreen: Component = observer(function SettingsScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="screenTitle" text="Settings" />
    </Screen>
  );
});
