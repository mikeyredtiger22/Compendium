import * as React from "react";
import { useEffect, useState } from "react";
import { TextStyle, View, ViewStyle } from "react-native";
import { Button, Text } from "../";
import { deleteForm, listenToAllForms } from "../../services/database/forms";
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
  metaData: {
    createdDate: number;
    lastModifiedDate: number;
  };
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
          return <FormRow key={formId} formId={formId} form={forms[formId]} />;
        })}
    </>
  );
}

type FormRowProps = {
  form: Form;
  formId: string;
};

const FormRow = (props: FormRowProps) => {
  const lastModified = props.form.metaData?.lastModifiedDate
    ? new Date(props.form.metaData.lastModifiedDate).toLocaleDateString?.()
    : "unknown";
  return (
    <View style={FORM_ROW_CONTAINER}>
      <View style={TEXT_CONTAINER}>
        <Text numberOfLines={1} style={FORM_TITLE}>
          {JSON.stringify(props.form.description)}
        </Text>
        <Text numberOfLines={1} style={FORM_TITLE}>
          {`Last Modified: ${lastModified}`}
        </Text>
      </View>
      <Button preset={"blank"} style={ICON_CONTAINER}>
        <Feather name={"edit"} size={28} style={ICON} />
      </Button>
      <Button
        preset={"blank"}
        style={ICON_CONTAINER}
        onPress={() => deleteForm(props.formId)}
      >
        <MaterialCommunityIcons
          name={"delete-outline"}
          size={33}
          style={ICON}
        />
      </Button>
    </View>
  );
};

const FORM_ROW_CONTAINER: ViewStyle = {
  backgroundColor: "white",
  alignItems: "center",
  flexDirection: "row",
  margin: 8,
  borderWidth: 1,
  borderRadius: 8,
  borderColor: color.palette.lightGrey,
  shadowColor: "rgba(0, 0, 0, 0.15)",
  shadowOffset: { width: 0, height: 5 },
  shadowOpacity: 1,
  shadowRadius: 8,
};
const TEXT_CONTAINER: ViewStyle = {
  flexDirection: "column",
  flex: 1,
  padding: 5,
};
const FORM_TITLE: TextStyle = {
  padding: 5,
  fontSize: 18,
};
const ICON: ViewStyle = {
  padding: 15,
};
const ICON_CONTAINER: ViewStyle = {
  borderLeftWidth: 1,
  borderColor: color.palette.lightGrey,
  justifyContent: "center",
  alignSelf: "stretch",
};
