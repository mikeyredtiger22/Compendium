import React, { FunctionComponent as Component } from 'react';
import { observer } from 'mobx-react-lite';
import { TextStyle, View, ViewStyle } from 'react-native';
import { Screen } from '../components/screen/screen';
import { Button } from '../components/button/button';
import { SavedForms } from '../fragments/forms/saved-forms/saved-forms';
import { Text } from '../components/text/text';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export const FormDemoScreen: Component = observer(function MapScreen() {
  const navigation = useNavigation();
  return (
    <Screen style={ROOT} preset='scroll'>
      <Text preset='screenSubtitle' tx='formDemoScreen.title' />
      <Button
        style={BUTTON}
        onPress={() => {
          navigation.navigate('Form');
        }}
      >
        <View style={BUTTON_CONTAINER}>
          <Text preset='button' text='Create New Form' style={BUTTON_TEXT} />
          <AntDesign name='pluscircle' size={25} color='white' />
        </View>
      </Button>
      <SavedForms />
    </Screen>
  );
});

const ROOT: ViewStyle = {};
const BUTTON: ViewStyle = {
  margin: 10,
};
const BUTTON_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 10,
};
const BUTTON_TEXT: TextStyle = {
  flex: 1,
};
