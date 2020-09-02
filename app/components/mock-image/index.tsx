import React from 'react';
import { Image, ImageProps } from 'react-native';

// The Omit expression removes the "source" field from the interface
interface MockImageProps extends Omit<ImageProps, 'source'> {
  width: number;
  height: number;
  index?: number;
  category?: string;
}

interface MockImageUrlProps {
  width: number;
  height: number;
  index?: number;
  category?: string;
}

export function MockImage({
  width,
  height,
  category,
  index,
  ...props
}: MockImageProps) {
  const uri = getMockImageUrl({ width, height, category, index });
  return (
    <Image resizeMode={'cover'} source={{ uri, cache: 'reload' }} {...props} />
  );
}

export function getMockImageUrl({
  width = 500,
  height = 500,
  category = 'nature',
  index,
}: MockImageUrlProps): string {
  let uri = `https://loremflickr.com/${width}/${height}/${category}`;
  if (typeof index === 'number') {
    uri += `?lock=${index}`;
  }
  return uri;
}
