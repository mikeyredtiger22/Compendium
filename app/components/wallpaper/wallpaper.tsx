import React from "react";
import { View } from "react-native";
import { presets } from "./wallpaper.presets";
import { WallpaperProps } from "./wallpaper.props";
import { color } from "../../theme";

const defaultColor = color.palette.white;
/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Wallpaper(props: WallpaperProps) {
  // grab the props
  const { preset = "stretch", style: styleOverride, color } = props;

  // assemble the style
  const presetToUse = presets[preset] || presets.stretch;
  const style = {
    ...presetToUse,
    backgroundColor: color || defaultColor,
    ...styleOverride,
  };

  // figure out which image to use
  // const source = backgroundImage || defaultImage

  // return <Image source={source} style={style} />
  return <View style={style} />;
}
