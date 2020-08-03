import { TextStyle } from "react-native";
import { color, spacing, typography } from "../../theme";

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  fontFamily: typography.museoThick,
  color: color.text,
  fontSize: 15,
};

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  /**
   * The default text styles.
   */
  default: BASE,
  error: {
    color: color.palette.error,
  } as TextStyle,
  screenTitle: {
    ...BASE,
    fontSize: 35,
    paddingVertical: 10,
    paddingHorizontal: 20,
  } as TextStyle,
  cardHeader: {
    ...BASE,
    fontSize: 16,
    letterSpacing: 0.8,
    paddingBottom: spacing[1],
  } as TextStyle,
  thin: { ...BASE, fontFamily: typography.museo, fontSize: 15 } as TextStyle,
  /**
   * A bold version of the default text.
   */
  bold: { ...BASE, fontWeight: "bold" } as TextStyle,

  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldLabel: { ...BASE, fontSize: 13, color: color.dim } as TextStyle,

  /**
   * A smaller piece of secondard information.
   */
  secondary: { ...BASE, fontSize: 9, color: color.dim } as TextStyle,
};

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets;
