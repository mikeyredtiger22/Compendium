import React, { FunctionComponent as Component } from 'react';
import { observer } from 'mobx-react-lite';
import { View, ViewStyle } from 'react-native';
import { Text } from '../components/text/text';
import { Screen } from '../components/screen/screen';
import { Carousel } from '../fragments/articles/carousel/carousel';
import { Button } from '../components/button/button';
import { useNavigation } from '@react-navigation/native';
import { articleData } from '../fragments/articles/articleData';

export const IntroContentScreen: Component = observer(function ContentScreen() {
  const navigation = useNavigation();

  return (
    <Screen preset='fixed'>
      <Text preset='screenTitle' tx={'introContentScreen.title'} />
      <View style={CAROUSEL_CONTAINER}>
        <Carousel data={articleData} />
      </View>
      <Button preset={'blank'} onPress={() => navigation.navigate('Faqs')}>
        <Text tx={'introContentScreen.faqs'} preset={'underlineCta'} />
      </Button>
      <View style={APPS_BUTTON}>
        <Button
          tx={'introContentScreen.openApps'}
          onPress={() => navigation.navigate('Grid')}
        />
      </View>
    </Screen>
  );
});

const CAROUSEL_CONTAINER: ViewStyle = {
  marginTop: 16,
  paddingBottom: 32,
};
const APPS_BUTTON: ViewStyle = {
  justifyContent: 'flex-end',
  alignContent: 'stretch',
  margin: 15,
  flex: 1,
};
