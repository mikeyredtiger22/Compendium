import React, { FunctionComponent as Component } from "react";
import { observer } from "mobx-react-lite";
import { Linking, TextStyle, ViewStyle } from "react-native";
import { Button, Screen } from "../components";
import { WebView } from "react-native-webview";

const LINK = "https://google.com";

export const WebsiteScreen: Component = observer(function WebsiteScreen() {
  const openLinkInBrowser = () => {
    if (Linking.canOpenURL(LINK)) {
      Linking.openURL(LINK);
    }
  };

  return (
    <Screen style={FLEX} preset="scroll">
      <Button
        style={BUTTON_STYLE}
        text={"Open link in browser app"}
        textStyle={BUTTON_TEXT_STYLE}
        onPress={openLinkInBrowser}
      />
      <WebView source={{ uri: LINK }} style={FLEX} />
    </Screen>
  );
});

const FLEX: ViewStyle = { flex: 1 };
const BUTTON_STYLE: ViewStyle = { margin: 8 };
const BUTTON_TEXT_STYLE: TextStyle = { color: "white" };
