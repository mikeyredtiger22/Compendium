import React, { FunctionComponent as Component } from 'react';
import { observer } from 'mobx-react-lite';
import { View, ViewStyle } from 'react-native';
import { Text } from '../components/text/text';
import { color } from '../theme/color';
import { spacing } from '../theme/spacing';
import { useStores } from '../models';
import { Article } from '../models/article/article';
import { Screen } from '../components/screen/screen';
import { Carousel } from '../components/carousel/carousel';
import { SavedForms } from '../components/saved-forms/saved-forms';

export const ContentScreen: Component = observer(function ContentScreen() {
  const { articles }: { articles: Array<Article> } = useStores();

  return (
    <Screen preset='scroll'>
      <Text preset='screenTitle' text='Content Screen' />
      <View style={CAROUSEL_CONTAINER}>
        <Carousel data={articles} />
      </View>
      <SavedForms />
    </Screen>
  );
});

const CAROUSEL_CONTAINER: ViewStyle = {
  marginTop: spacing[4],
  paddingBottom: spacing[2],
  borderBottomWidth: 1,
  borderBottomColor: color.palette.lighterGrey,
};
