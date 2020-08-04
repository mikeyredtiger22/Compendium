import React, {
  FunctionComponent as Component,
  RefCallback,
  useState,
} from "react";
import { observer } from "mobx-react-lite";
import {
  Platform,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { Button, Text } from "../components";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDownPicker from "react-native-dropdown-picker";
import { Feather } from "@expo/vector-icons";
import { color, typography } from "../theme";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  useForm,
  Controller,
  Control,
  ValidationRules,
  FieldError,
} from "react-hook-form";

interface ValidatedTextInputProps extends TextInputProps {
  name: string;
  control: Control;
  error: FieldError;
  rules: ValidationRules;
  refCallback?: RefCallback<TextInput>;
  large?: boolean;
}

const ValidatedTextInput = (props: ValidatedTextInputProps) => {
  return (
    <>
      {props.error && (
        <Text preset={"error"}>
          {props.error.message || "This is required."}
        </Text>
      )}
      <Controller
        control={props.control}
        name={props.name}
        rules={props.rules}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={[
              TEXT_INPUT,
              props.error ? TEXT_INPUT_ERROR : {},
              props.large ? TEXT_INPUT_LARGE : {},
            ]}
            ref={props.refCallback}
            returnKeyType={"next"}
            blurOnSubmit={false}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            numberOfLines={props.large ? 3 : undefined}
            multiline={props.large}
            {...props}
          />
        )}
      />
    </>
  );
};

export const FormScreen: Component = observer(function FormScreen() {
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(null);
  const [time, setTime] = useState<string>(null);
  const [checked, setChecked] = useState<boolean>(false);

  const dateError =
    date &&
    // must be at least 1 day in the future
    Math.round((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24)) < 1;

  let refEmail: TextInput;
  let refPhone: TextInput;
  let refPassword: TextInput;
  let refDescription: TextInput;

  const handleConfirm = (date: Date) => {
    setShowDatePicker(false);
    setDate(date);
  };

  const { control, handleSubmit, errors, getValues, formState } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const allFormDataIsValid =
    formState.isValid && date && !dateError && time && checked;

  return (
    <KeyboardAwareScrollView style={SCROLL_VIEW}>
      <Text preset="screenTitle" text="Form" />
      <View style={FORM_CONTAINER}>
        <Text text="Name" />
        <ValidatedTextInput
          name={"name"}
          placeholder={"John Smith"}
          control={control}
          error={errors.name}
          onSubmitEditing={() => {
            refEmail?.focus();
          }}
          rules={{
            required: "Required!",
            minLength: { value: 2, message: "Longer!" },
            maxLength: { value: 100, message: "Shorter!" },
          }}
        />
        <Text text="Email" />
        <ValidatedTextInput
          name={"email"}
          placeholder={"john.s@gmail.com"}
          control={control}
          error={errors.email}
          refCallback={ref => {
            refEmail = ref;
          }}
          onSubmitEditing={() => {
            refPhone?.focus();
          }}
          rules={{
            required: "Required!",
            maxLength: { value: 100, message: "Shorter!" },
            pattern: {
              value: RegExp(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              ),
              message: "Invalid email!",
            },
          }}
        />
        <Text text="Phone Number" />
        <ValidatedTextInput
          name={"phone"}
          placeholder={"0123456789"}
          keyboardType={"number-pad"}
          control={control}
          error={errors.phone}
          refCallback={ref => {
            refPhone = ref;
          }}
          onSubmitEditing={() => {
            refPassword?.focus();
          }}
          rules={{
            required: "Required!",
            minLength: { value: 9, message: "Longer!" },
            maxLength: { value: 12, message: "Shorter!" },
            pattern: {
              value: RegExp(`^(\\(?\\+?[0-9]*\\)?)?[0-9_\\- ()]*$`),
              message: "Invalid phone number!",
            },
          }}
        />
        <Text text="Password" />
        <ValidatedTextInput
          name={"password"}
          placeholder={"Password"}
          secureTextEntry
          control={control}
          error={errors.password}
          refCallback={ref => {
            refPassword = ref;
          }}
          onSubmitEditing={() => {
            refDescription?.focus();
          }}
          rules={{
            required: "Required!",
            minLength: { value: 6, message: "Longer!" },
            maxLength: { value: 50, message: "Shorter!" },
          }}
        />
        <Text text="Description" />
        <ValidatedTextInput
          name={"description"}
          placeholder={"Add a description here..."}
          large
          returnKeyType={"default"}
          control={control}
          error={errors.description}
          refCallback={ref => {
            refDescription = ref;
          }}
          rules={{
            maxLength: { value: 300, message: "Shorter!" },
          }}
        />
        <Text text="Date" />
        {dateError && (
          <Text preset={"error"}>
            {"Date must be at least 1 day in the future"}
          </Text>
        )}
        <Button preset={"blank"} onPress={() => setShowDatePicker(true)}>
          <TextInput
            pointerEvents="none"
            style={[TEXT_INPUT, dateError ? TEXT_INPUT_ERROR : {}]}
            placeholder={"12/12/2020"}
            returnKeyType={"next"}
            editable={false}
            value={date?.toDateString()}
          />
        </Button>
        <DateTimePickerModal
          isVisible={showDatePicker}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={() => setShowDatePicker(false)}
        />
        <Text text="Time" />
        <DropDownPicker
          showArrow
          placeholderStyle={DROPDOWN_PLACEHOLDER_TEXT}
          placeholder="Select an item"
          items={["Morning", "Noon", "Evening", "Night"].map(time => ({
            label: time,
            value: time,
          }))}
          defaultValue={time}
          style={DROPDOWN_FIELD}
          dropDownStyle={DROPDOWN_MENU}
          itemStyle={DROPDOWN_ITEM}
          customArrowUp={(size, color) => (
            <Feather name="chevron-up" size={size} color={color} />
          )}
          customArrowDown={(size, color) => (
            <Feather name="chevron-down" size={size} color={color} />
          )}
          onChangeItem={item => setTime(item.value)}
        />
        <Button
          preset="blank"
          onPress={() => setChecked(!checked)}
          style={CHECKBOX_CONTAINER}
        >
          <Feather
            style={CHECKBOX}
            name={checked ? "check-square" : "square"}
            size={18}
          />
          <Text style={CHECKBOX_TEXT} text="I agree to checking this box." />
        </Button>
        <Button
          style={[
            SUBMIT_BUTTON,
            !allFormDataIsValid ? SUBMIT_BUTTON_DISABLED : {},
          ]}
          textStyle={SUBMIT_BUTTON_TEXT}
          text={"Submit"}
          onPress={() => {
            // handleSubmit method validates all fields
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            handleSubmit(() => {})();
            if (allFormDataIsValid) {
              const allData = {
                ...getValues(),
                date: date.getTime(),
                time,
              };
              console.log("Submitted form values: ", allData);
            }
          }}
        />
      </View>
    </KeyboardAwareScrollView>
  );
});

const SCROLL_VIEW: ViewStyle = {
  backgroundColor: color.palette.white,
};
const FORM_CONTAINER: ViewStyle = {
  paddingHorizontal: 30,
  paddingBottom: 30,
};
const TEXT_INPUT: TextStyle = {
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: color.palette.darkGrey,
  borderRadius: 6,
  padding: 10,
  marginTop: 5,
  marginBottom: 15,
};
const TEXT_INPUT_ERROR: TextStyle = {
  borderColor: color.palette.error,
  borderWidth: 1,
};
const TEXT_INPUT_LARGE: TextStyle = {
  textAlignVertical: "top",
  minHeight: 80,
  maxHeight: Platform.OS === "ios" ? 200 : undefined,
  paddingTop: 10,
};
const DROPDOWN_FIELD: ViewStyle = {
  // override default styles applied by library to match other fields
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: color.palette.darkGrey,
  borderTopRightRadius: 6,
  borderTopLeftRadius: 6,
  borderBottomRightRadius: 6,
  borderBottomLeftRadius: 6,
  paddingHorizontal: 10,
  paddingVertical: Platform.OS === "ios" ? 1.5 : 9,
  backgroundColor: undefined,
  marginTop: 10,
  marginBottom: 15,
};
const DROPDOWN_MENU: ViewStyle = {
  // override default styles applied by library to match other fields
  backgroundColor: "#fff",
  borderBottomRightRadius: 6,
  borderBottomLeftRadius: 6,
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: color.palette.darkGrey,
  marginTop: 10,
};
const DROPDOWN_ITEM: ViewStyle = {
  justifyContent: "flex-start",
  borderBottomWidth: 1,
  borderBottomColor: color.palette.lighterGrey,
};
const DROPDOWN_PLACEHOLDER_TEXT: TextStyle = {
  color: color.palette.lightGrey,
};
const CHECKBOX_CONTAINER: ViewStyle = {
  justifyContent: "center",
  flexDirection: "row",
  marginTop: 15,
  marginBottom: 5,
};
const CHECKBOX: ViewStyle = {
  paddingRight: 5,
};
const CHECKBOX_TEXT: TextStyle = {
  fontFamily: typography.museo,
};
const SUBMIT_BUTTON: ViewStyle = {
  borderRadius: 6,
  paddingTop: 10,
  paddingBottom: 10,
  marginTop: 10,
  marginBottom: 15,
};
const SUBMIT_BUTTON_DISABLED: ViewStyle = {
  backgroundColor: color.palette.lightGrey,
};
const SUBMIT_BUTTON_TEXT: TextStyle = {
  fontSize: 20,
};
