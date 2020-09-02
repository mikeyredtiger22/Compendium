import React, { FunctionComponent as Component, useRef, useState } from 'react';
import { Dimensions, ViewStyle } from 'react-native';
import { ContentCard } from '../content-card/content-card';
import * as SnapCarousel from 'react-native-snap-carousel';
import { useObserver } from 'mobx-react-lite';
import { Article } from '../../models/article/article';
import { color } from '../../theme/color';
import { AdditionalParallaxProps } from 'react-native-snap-carousel';

export interface CarouselProps {
  data: ReadonlyArray<Article>;
  renderItem?: (
    item: { item: any; index: number },
    parallaxProps?: AdditionalParallaxProps,
  ) => React.ReactNode;
}

const screenWidth = Math.round(Dimensions.get('window').width);

export const Carousel: Component<CarouselProps> = props => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselRef = useRef(null);

  const _defaultRenderItem = (props: { item: Article; index: number }) => {
    return <ContentCard {...props} />;
  };

  return useObserver(() => (
    <>
      <SnapCarousel.default
        ref={carouselRef}
        layout={'default'}
        data={props.data}
        renderItem={props.renderItem || _defaultRenderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 150}
        onBeforeSnapToItem={index => setCarouselIndex(index)}
      />
      <SnapCarousel.Pagination
        dotsLength={props.data.length}
        activeDotIndex={carouselIndex}
        dotStyle={DRAWER_PAGINATION_DOT}
        containerStyle={DRAWER_PAGINATION_CONTAINER}
        inactiveDotOpacity={0.2}
        inactiveDotScale={0.7}
        tappableDots={true}
        // @ts-ignore
        carouselRef={carouselRef}
      />
    </>
  ));
};

const DRAWER_PAGINATION_DOT: ViewStyle = {
  width: 10,
  height: 10,
  borderRadius: 5,
  marginHorizontal: 8,
  backgroundColor: color.palette.darkBlue,
};
const DRAWER_PAGINATION_CONTAINER: ViewStyle = {
  paddingTop: 0,
  paddingBottom: 10,
};
