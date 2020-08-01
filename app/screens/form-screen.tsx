import React, { FunctionComponent as Component, useState } from "react"
import { observer } from "mobx-react-lite"
import { Platform, StyleSheet, TextInput, TextStyle, View, ViewStyle } from "react-native"
import { Button, Text } from "../components"
import DateTimePickerModal from "react-native-modal-datetime-picker"
import DropDownPicker from "react-native-dropdown-picker"
import { Feather } from "@expo/vector-icons"
import { color, typography } from "../theme"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

export const FormScreen: Component = observer(function FormScreen() {
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [date, setDate] = useState(null)
  const [time, setTime] = useState(null)
  const [checked, setChecked] = useState(false)

  const handleConfirm = (date: Date) => {
    setDate(date.toDateString())
    setShowDatePicker(false)
  }

  return (
    <KeyboardAwareScrollView style={SCROLL_VIEW}>
      <Text preset="screenTitle" text="Form"/>
      <View style={FORM_CONTAINER}>
        <Text text="Name"/>
        <TextInput style={TEXT_INPUT} placeholder={"John Smith"} returnKeyType={"next"}/>
        <Text text="Email"/>
        <TextInput style={TEXT_INPUT} placeholder={"john.s@gmail.com"} returnKeyType={"next"}
          keyboardType={"email-address"}/>
        <Text text="Phone number"/>
        <TextInput style={TEXT_INPUT} placeholder={"0123456789"} returnKeyType={"next"} keyboardType={"number-pad"}/>
        <Text text="Password"/>
        <TextInput style={TEXT_INPUT} placeholder={"Password"} returnKeyType={"next"} secureTextEntry/>
        <Text text="Password"/>
        <TextInput style={TEXT_INPUT} placeholder={"Password"} returnKeyType={"next"} secureTextEntry/>
        <Text text="Password"/>
        <TextInput style={TEXT_INPUT} placeholder={"Password"} returnKeyType={"next"} secureTextEntry/>
        <Text text="Description"/>
        <TextInput
          style={[TEXT_INPUT, TEXT_INPUT_LARGE]}
          placeholder={"Add a description here..."} numberOfLines={3} multiline/>
        <Text text="Date"/>
        {/* todo mpf fix multiple dialog opens on android */}
        <Button preset={"blank"} onPress={() => setShowDatePicker(true)}>
          <TextInput pointerEvents="none" style={[TEXT_INPUT, TEXT_INPUT_DATE]} placeholder={"01/02/today"}
            returnKeyType={"next"} editable={false} value={date}/>
        </Button>
        <DateTimePickerModal
          isVisible={showDatePicker}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={() => setShowDatePicker(false)}
        />
        <Text text="Time"/>
        <DropDownPicker
          showArrow
          placeholderStyle={DROPDOWN_PLACEHOLDER_TEXT}
          placeholder="Select an item"
          items={['Morning', 'Noon', 'Evening', 'Night'].map(time => ({label: time, value: time }))}
          defaultValue={time}
          style={DROPDOWN_FIELD}
          dropDownStyle={DROPDOWN_MENU}
          itemStyle={DROPDOWN_ITEM}
          customArrowUp={(size, color) => <Feather name="chevron-up" size={size} color={color} />}
          customArrowDown={(size, color) => <Feather name="chevron-down" size={size} color={color} />}
          onChangeItem={item => setTime(item.value)}
        />
        <Button preset="blank" onPress={() => setChecked(!checked)} style={CHECKBOX_CONTAINER}>
          <Feather style={CHECKBOX} name={checked ? 'check-square' : 'square'} size={18} />
          <Text style={{fontFamily: typography.museo}} text="I agree to checking this box."/>
        </Button>
        <Button style={SUBMIT_BUTTON} textStyle={SUBMIT_BUTTON_TEXT} text={"Submit"}/>
      </View>
    </KeyboardAwareScrollView>
  )
})

const SCROLL_VIEW: ViewStyle = {
  backgroundColor: color.palette.white
}
const FORM_CONTAINER: ViewStyle = {
  paddingHorizontal: 30,
  paddingBottom: 30,
}
const TEXT_INPUT: TextStyle = {
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: color.palette.darkGrey,
  borderRadius: 6,
  padding: 10,
  marginTop: 10,
  marginBottom: 15,
}
const TEXT_INPUT_LARGE: TextStyle = {
  textAlignVertical: "top",
  minHeight: 80,
  maxHeight: Platform.OS === "ios" ? 200 : undefined,
  paddingTop: 10,
}
const TEXT_INPUT_DATE: TextStyle = {
  flex: 1,
}
const DROPDOWN_FIELD: ViewStyle = {
  // override default styles applied by library to match other fields
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: color.palette.darkGrey,
  borderTopRightRadius: 6,
  borderTopLeftRadius: 6,
  borderBottomRightRadius: 6,
  borderBottomLeftRadius: 6,
  paddingHorizontal: 10,
  paddingVertical: Platform.OS === 'ios' ? 1.5 : 9,
  backgroundColor: undefined,
  marginTop: 10,
  marginBottom: 15,
}
const DROPDOWN_MENU: ViewStyle = {
  // override default styles applied by library to match other fields
  backgroundColor: '#fff',
  borderBottomRightRadius: 6,
  borderBottomLeftRadius: 6,
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: color.palette.darkGrey,
  marginTop: 10
}
const DROPDOWN_ITEM: ViewStyle = {
  justifyContent: 'flex-start',
  borderBottomWidth: 1,
  borderBottomColor: color.palette.lighterGrey,
}
const DROPDOWN_PLACEHOLDER_TEXT: TextStyle = {
  color: color.palette.lightGrey
}
const CHECKBOX_CONTAINER: ViewStyle = {
  justifyContent: 'center',
  flexDirection: 'row',
  marginTop: 15,
  marginBottom: 5,
}
const CHECKBOX: ViewStyle = {
  paddingRight: 5,
}
const SUBMIT_BUTTON: ViewStyle = {
  borderRadius: 6,
  paddingTop: 10,
  paddingBottom: 10,
  marginTop: 10,
  marginBottom: 15,
}
const SUBMIT_BUTTON_TEXT: TextStyle = {
  fontSize: 20
}
