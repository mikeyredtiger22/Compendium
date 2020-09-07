import React, { FunctionComponent as Component, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Image, ImageStyle, TextStyle, View, ViewStyle } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { ScreenNavigationParameters } from '../../navigation/tabs-navigator';
import * as Icons from '@expo/vector-icons';
import { toggleFavouriteArticle } from './articles-database';
import { setupArticleFavouriting } from './content-card/content-card';
import { Screen } from '../../components/screen/screen';
import { Text } from '../../components/text/text';
import { Article } from './articleData';
import { color } from '../../theme/color';

type Props = StackScreenProps<ScreenNavigationParameters, 'ArticleDetail'>;

export const ArticleDetailScreen: Component = observer(
  function ArticleDetailScreen(props: Props) {
    const { item }: { item: Article } = props.route.params;

    const [favourited, setFavourited] = useState<boolean | null>(null);
    setupArticleFavouriting(item.title, favourited, setFavourited);

    return (
      <Screen preset='scroll'>
        {/* <MockImage width={560} height={400} style={IMAGE} index={index} /> */}
        <Image
          width={588}
          height={200}
          source={{ uri: item.imageUrl }}
          style={IMAGE}
        />
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
};
const CONTENT: TextStyle = {
  paddingHorizontal: 20,
};
const TOP_ROW_CONTAINER: ViewStyle = {
  marginTop: -50,
  paddingTop: 10,
  borderTopLeftRadius: 50,
  borderTopRightRadius: 50,
  backgroundColor: color.palette.white,
  flexDirection: 'row',
  alignItems: 'center',
};
const FAVOURITE_ICON: ViewStyle = {
  padding: 20,
};
const TITLE: TextStyle = {
  flex: 1,
};
