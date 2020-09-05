import React, { FunctionComponent as Component, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { ImageStyle, TextStyle, View, ViewStyle } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { ScreenNavigationParameters } from '../navigation/tabs-navigator';
import { MockImage } from '../components/mock-image';
import * as Icons from '@expo/vector-icons';
import { toggleFavouriteArticle } from '../fragments/articles/articles-database';
import { setupArticleFavouriting } from '../fragments/articles/content-card/content-card';
import { Screen } from '../components/screen/screen';
import { Text } from '../components/text/text';
import { Article } from '../fragments/articles/articleData';

type Props = StackScreenProps<ScreenNavigationParameters, 'ArticleDetail'>;

export const ArticleDetailScreen: Component = observer(
  function ArticleDetailScreen(props: Props) {
    const {
      item,
      index,
    }: { item: Article; index?: number } = props.route.params;

    const [favourited, setFavourited] = useState<boolean | null>(null);
    setupArticleFavouriting(item.title, favourited, setFavourited);

    return (
      <Screen preset='scroll'>
        <MockImage width={560} height={400} style={IMAGE} index={index} />
        <View style={TOP_ROW_CONTAINER}>
          <Text preset='screenTitle' style={TITLE} text={item.title} />
          {/* Show icon only if favourited field exists */}
          {typeof favourited === 'boolean' && (
            <Icons.AntDesign
              style={FAVOURITE_ICON}
              name={favourited ? 'heart' : 'hearto'}
              size={35}
              color={'red'}
              onPress={() => toggleFavouriteArticle(item.title)}
            />
          )}
        </View>
        <Text preset='bold' style={CONTENT} text={item.content} />
      </Screen>
    );
  },
);

const IMAGE: ImageStyle = {
  alignSelf: 'center',
  width: '100%',
  height: 200,
  borderBottomLeftRadius: 60,
  borderBottomRightRadius: 60,
};
const CONTENT: TextStyle = {
  paddingHorizontal: 20,
};
const TOP_ROW_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
};
const FAVOURITE_ICON: ViewStyle = {
  padding: 20,
};
const TITLE: TextStyle = {
  flex: 1,
};
