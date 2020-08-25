import * as React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../text/text";
import { viewPresets } from "./button.presets";
import { ButtonProps } from "./button.props";
import { mergeAll, flatten } from "ramda";
import { presets } from "../text/text.presets";

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Button(props: ButtonProps) {
  // grab the props
  const {
    preset = "primary",
    tx,
    text,
    style: styleOverride,
    textStyle: textStyleOverride,
    children,
    ...rest
  } = props;

  const viewStyle = mergeAll(
    flatten([viewPresets[preset] || viewPresets.primary, styleOverride]),
  );
  const textStyle = mergeAll(
    flatten([presets[preset] || presets.default, textStyleOverride]),
  );

  const content = children || <Text tx={tx} text={text} style={textStyle} />;

  return (
    <TouchableOpacity style={viewStyle} {...rest}>
      {content}
    </TouchableOpacity>
  );
}
