import React, { FunctionComponent as Component } from "react";
import { SafeAreaView, TextStyle, View, ViewStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import { Button, Screen, Text } from "../../components";
import { color, spacing, typography } from "../../theme";

const FULL: ViewStyle = { flex: 1 };
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
};
const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
};
const BOLD: TextStyle = { fontWeight: "bold" };
const TITLE_WRAPPER: TextStyle = {
  ...TEXT,
  textAlign: "center",
};
const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
};
const ALMOST: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 26,
  fontStyle: "italic",
};
const CONTENT: TextStyle = {
  ...TEXT,
  color: color.palette.darkBlue,
  fontSize: 15,
  lineHeight: 22,
  marginBottom: spacing[5],
};
const CONTINUE: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: color.palette.yellow,
};
const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  color: color.palette.darkBlue,
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
};
const FOOTER: ViewStyle = { backgroundColor: color.palette.darkBlue };
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
};

export const WelcomeScreen: Component = observer(function WelcomeScreen() {
  const navigation = useNavigation();
  const nextScreen = () => navigation.navigate("demo");

  return (
    <View style={FULL}>
      {/* <Wallpaper /> */}
      <Screen
        style={CONTAINER}
        preset="scroll"
        backgroundColor={color.transparent}
      >
        <Text style={TITLE_WRAPPER}>
          <Text style={TITLE} text="Your new app, " />
          <Text style={ALMOST} text="almost" />
          <Text style={TITLE} text="! 5" />
        </Text>
        <Text style={TITLE} tx="welcomeScreen.readyForLaunch" />
        <Text style={CONTENT}>
          This probably isn't what your app is going to look like. Unless your
          designer handed you this screen and, in that case, congrats! You're
          ready to ship.
        </Text>
        <Text style={CONTENT}>
          For everyone else, this is where you'll see a live preview of your
          fully functioning app using Ignite.
        </Text>
      </Screen>
      <SafeAreaView style={FOOTER}>
        <View style={FOOTER_CONTENT}>
          <Button
            style={CONTINUE}
            textStyle={CONTINUE_TEXT}
            tx="welcomeScreen.continue"
            onPress={nextScreen}
          />
        </View>
      </SafeAreaView>
    </View>
  );
});
