import React, { FunctionComponent as Component } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, Text } from "../components"
// import { useNavigation } from "@react-navigation/native"
import { color } from "../theme"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

export const FormScreen: Component = observer(function FormScreen() {

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" tx="formScreen.header" />
    </Screen>
  )
})
