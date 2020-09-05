import React, { FunctionComponent as Component } from 'react';
import { observer } from 'mobx-react-lite';
import { Linking, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Screen } from '../components/screen/screen';
import { Button } from '../components/button/button';
import { WebView } from 'react-native-webview';
import { color } from '../theme/color';

const LINK = 'https://google.com';

export const WebsiteScreen: Component = observer(function WebsiteScreen() {
  const openLinkInBrowser = () => {
    if (Linking.canOpenURL(LINK)) {
      Linking.openURL(LINK);
    }
  };

  return (
    <Screen style={SCREEN} preset='fixed'>
      <Button
        style={BUTTON_STYLE}
        text={'Open link in browser app'}
        textStyle={BUTTON_TEXT_STYLE}
        onPress={openLinkInBrowser}
      />
      <WebView source={{ uri: LINK }} style={WEBVIEW} />
    </Screen>
  );
});

const SCREEN: ViewStyle = { flex: 1 };
const WEBVIEW: ViewStyle = {
  flex: 1,
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: color.palette.lightGrey,
  borderRadius: 8,
  margin: 8,
};
const BUTTON_STYLE: ViewStyle = { margin: 8 };
const BUTTON_TEXT_STYLE: TextStyle = { color: 'white' };
