import React, { FunctionComponent as Component } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, Text } from "../components"
// import { useNavigation } from "@react-navigation/native"


export const FormScreen: Component = observer(function FormScreen() {

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="screenTitle" text="Form"/>
    </Screen>
  )
})

const ROOT: ViewStyle = {
}