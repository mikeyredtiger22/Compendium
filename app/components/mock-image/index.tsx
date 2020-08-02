import React from "react";
import { Image, ImageProps } from "react-native";

// @ts-ignore
interface MockImageProps extends ImageProps {
  width: number;
  height: number;
  category?: string;
  source?: undefined;
}

export function MockImage({
  width = 500,
  height = 500,
  category = "nature",
  ...props
}: MockImageProps) {
  return (
    <Image
      source={{
        uri: `http://placeimg.com/${width}/${height}/${category}`,
        cache: "reload",
      }}
      {...props}
    />
  );
}
