import React, { FunctionComponent as Component } from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, TextStyle, View, ViewStyle } from "react-native"
import { ContentCard, Screen, Text } from "../components"
import Carousel from "react-native-snap-carousel"
import { color, spacing } from "../theme"

const screenWidth = Math.round(Dimensions.get('window').width);

export const ContentScreen: Component = observer(function ContentScreen() {

  const _renderItem = (...props) => {
    return (
      <ContentCard {...props} />
    );
  }

  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="screenTitle" text="Content Screen" style={HEADER} />
      <View style={CAROUSEL_CONTAINER}>
        <Carousel
          layout={'default'}
          data={[1, 2, 3, 4, 5, 6, 7]}
          renderItem={_renderItem}
          sliderWidth={screenWidth}
          itemWidth={screenWidth - 150}
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

const HEADER: TextStyle = {
  paddingLeft: spacing[3]
}
