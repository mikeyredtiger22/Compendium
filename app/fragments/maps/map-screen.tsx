import React, { FunctionComponent as Component } from 'react';
import { observer } from 'mobx-react-lite';
import { ViewStyle } from 'react-native';
import { Text } from '../../components/text/text';
import { Screen } from '../../components/screen/screen';
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

const ROOT: ViewStyle = {};

export const MapScreen: Component = observer(function MapScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset='scroll'>
      <Text preset='screenTitle' text='Map' />
    </Screen>
  );
});
