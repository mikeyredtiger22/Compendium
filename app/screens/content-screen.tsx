import React, { FunctionComponent as Component } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Screen, Text } from "../components"
import Carousel from "react-native-snap-carousel"

const ROOT: ViewStyle = {
  // flex: 1
  // backgroundColor: color.palette.black,
}

export const ContentScreen: Component = observer(function ContentScreen() {

  const _renderItem = (...props) => {
    return (
      <Text>haha</Text>
      // <ContentCard {...props} />
    );
  }

  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="Content Screen" />
      <Carousel
        // ref={(c) => { this._carousel = c; }}
        data={[1, 2, 3, 4, 5, 6, 7]}
        renderItem={_renderItem}
        sliderWidth={200}
        itemWidth={150}
      />
    </Screen>
  )
})
