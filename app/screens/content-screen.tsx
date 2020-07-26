import React, { FunctionComponent as Component, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, View, ViewStyle } from "react-native"
import { ContentCard, Screen, Text } from "../components"
import Carousel, { Pagination } from "react-native-snap-carousel"
import { color, spacing } from "../theme"
import { RootStore, useStores } from "../models"
import { Article } from "../models/article/article"

const screenWidth = Math.round(Dimensions.get('window').width);

export const ContentScreen: Component = observer(function ContentScreen() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselRef = useRef(null);
  const { articles }: RootStore = useStores();

  const _renderItem = (props: { item: Article, index: number }) => {
    return (
      <ContentCard {...props} />
    );
  }

  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="screenTitle" text="Content Screen"/>
      <View style={CAROUSEL_CONTAINER}>
        <Carousel
          ref={carouselRef}
          layout={'default'}
          data={articles}
          renderItem={_renderItem}
          sliderWidth={screenWidth}
          itemWidth={screenWidth - 150}
          onBeforeSnapToItem={index => setCarouselIndex(index)}
        />
        <Pagination
          dotsLength={articles.length}
          activeDotIndex={carouselIndex}
          dotStyle={DRAWER_PAGINATION_DOT}
          containerStyle={DRAWER_PAGINATION_CONTAINER}
          inactiveDotOpacity={0.2}
          inactiveDotScale={0.7}
          tappableDots={true}
          // @ts-ignore
          carouselRef={carouselRef}
        />
      </View>
    </Screen>
  )
})

const ROOT: ViewStyle = {
  flex: 1,
}
const CAROUSEL_CONTAINER: ViewStyle = {
  marginTop: spacing[4],
  paddingBottom: spacing[2],
  borderBottomWidth: 1,
  borderBottomColor: color.palette.lighterGrey,
}
const DRAWER_PAGINATION_DOT: ViewStyle = {
  width: 10,
  height: 10,
  borderRadius: 5,
  marginHorizontal: 8,
  backgroundColor: color.palette.darkBlue,
}
const DRAWER_PAGINATION_CONTAINER: ViewStyle = {
  paddingTop: 0,
  paddingBottom: 10,
}