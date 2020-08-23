import * as React from "react";
import { useEffect, useState } from "react";
import { TextStyle, View, ViewStyle } from "react-native";
import { Button, Text } from "../";
import { listenToAllForms } from "../../services/database/forms";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { color } from "../../theme";

export type Form = {
  name: string;
  email: string;
  phone: string;
  password: string;
  description: string;
  date: number;
  time: string;
  checked: boolean;
};

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function SavedForms() {
  const [forms, setForms] = useState<{ [name: string]: Form }>({});
  useEffect(() => listenToAllForms(setForms), []);
  const formIds = Object.keys(forms);
  return (
    <>
      <Text preset={"screenTitle"}>Saved Forms</Text>
      {formIds &&
        formIds.map(formId => {
          return <FormRow key={formId} form={forms[formId]} />;
        })}
    </>
  );
}

type FormRowProps = {
  form: Form;
};

const FormRow = (props: FormRowProps) => {
  return (
    <View style={FORM_ROW_CONTAINER}>
      <Text numberOfLines={1} style={FORM_TITLE}>
        {JSON.stringify(props.form.description)}
      </Text>
      <Button preset={"blank"} style={ICON_CONTAINER}>
        <Feather name={"edit"} size={28} style={ICON} />
      </Button>
      <View style={ICON_CONTAINER}>
        <MaterialCommunityIcons
          name={"delete-outline"}
          size={33}
          style={ICON}
        />
      </View>
    </View>
  );
};

const FORM_ROW_CONTAINER: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  margin: 5,
  borderWidth: 1,
  borderRadius: 8,
  borderColor: color.palette.lightGrey,
  overflow: "hidden",
};
const FORM_TITLE: TextStyle = {
  flex: 1,
  padding: 10,
  fontSize: 18,
};
const ICON: ViewStyle = {
  padding: 10,
  overflow: "hidden",
};
const ICON_CONTAINER: ViewStyle = {
  borderLeftWidth: 1,
  borderColor: color.palette.lightGrey,
  justifyContent: "center",
};
