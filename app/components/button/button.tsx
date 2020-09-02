import * as React from 'react';
import {
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import { Text } from '../text/text';
import { mergeAll, flatten } from 'ramda';
import { presets } from '../text/text.presets';
import { spacing } from '../../theme/spacing';
import { color } from '../../theme/color';

export interface ButtonProps extends TouchableOpacityProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: string;

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle | ViewStyle[];

  /**
   * An optional style override useful for the button text.
   */
  textStyle?: TextStyle | TextStyle[];

  /**
   * One of the different types of text presets.
   */
  preset?: ButtonPresetNames;

  /**
   * One of the different types of text presets.
   */
  children?: React.ReactNode;
}

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Button(props: ButtonProps) {
  // grab the props
  const {
    preset = 'primary',
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

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  paddingVertical: spacing[2],
  paddingHorizontal: spacing[2],
  borderRadius: 4,
  justifyContent: 'center',
  alignItems: 'center',
};

const BASE_TEXT: TextStyle = {
  paddingHorizontal: spacing[3],
};

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets = {
  /**
   * A smaller piece of secondard information.
   */
  primary: {
    ...BASE_VIEW,
    backgroundColor: color.palette.darkBlue,
  } as ViewStyle,

  /**
   * A button without extras.
   */
  link: {
    ...BASE_VIEW,
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignItems: 'flex-start',
  } as ViewStyle,

  blank: {} as ViewStyle,
};

export const textPresets = {
  primary: {
    ...BASE_TEXT,
    fontSize: 9,
    color: color.palette.white,
  } as TextStyle,
  link: {
    ...BASE_TEXT,
    color: color.text,
    paddingHorizontal: 0,
    paddingVertical: 0,
  } as TextStyle,
};

/**
 * A list of preset names.
 */
type ButtonPresetNames = keyof typeof viewPresets;
