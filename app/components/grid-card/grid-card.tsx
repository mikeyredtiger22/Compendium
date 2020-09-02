import * as React from 'react';
import {
  ImageBackground,
  ImageStyle,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { color } from '../../theme/color';
import { typography } from '../../theme/typography';
import { Button } from '../button/button';
import { Text } from '../text/text';
import { getMockImageUrl } from '../mock-image';

export interface GridCardProps {
  title: string;
  index?: number;
}

export function GridCard(props: GridCardProps) {
  const { title } = props;
  const uri = getMockImageUrl({
    width: 370,
    height: 370,
    index: props.index,
  });
  // const navigation = useNavigation()
  // const openGridItem = () => navigation.navigate("GridScreen", { title })
  return (
    <Button preset={'blank'} style={styles.ROOT} /* onPress={openGridItem} */>
      <ImageBackground
        source={{ uri }}
        style={styles.IMAGE_CONTAINER}
        imageStyle={styles.IMAGE}
        resizeMode={'cover'}
      >
        <View style={styles.TEXT_CONTAINER}>
          <Text
            preset={'cardHeader'}
            style={styles.TEXT}
            numberOfLines={2}
            capitalise
          >
            {title}
          </Text>
        </View>
      </ImageBackground>
    </Button>
  );
}

const styles = {
  ROOT: {
    aspectRatio: 1,
    backgroundColor: '#f3f3f3',
    borderColor: '#cccccc',
    borderRadius: 8,
    borderWidth: 0.5,
    elevation: 15,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 8,
    overflow: 'hidden',
  } as ViewStyle,
  IMAGE_CONTAINER: {
    width: '100%',
    height: '100%',
  } as ImageStyle,
  IMAGE: {
    // funky hack to remove whitespace and text from loremflickr placeholder images
    width: '125%',
    height: '125%',
    margin: '-12.5%',
  } as ImageStyle,
  TEXT_CONTAINER: {
    justifyContent: 'flex-end',
    flex: 1,
    overflow: 'hidden',
    paddingHorizontal: 12,
    paddingVertical: 6,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 6,
  } as ViewStyle,
  TEXT: {
    fontSize: 18,
    fontFamily: typography.museoXThick,
    fontWeight: 'bold',
    color: color.palette.white,
    textShadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 4,
  } as TextStyle,
};
