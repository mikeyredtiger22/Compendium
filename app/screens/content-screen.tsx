import React, { FunctionComponent as Component } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Carousel, Screen, Text } from "../components"
import { color, spacing } from "../theme"
import { RootStore, useStores } from "../models"

export const ContentScreen: Component = observer(function ContentScreen() {
  const { articles }: RootStore = useStores();

  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="screenTitle" text="Content Screen"/>
      <View style={CAROUSEL_CONTAINER}>
        <Carousel data={articles} />
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
