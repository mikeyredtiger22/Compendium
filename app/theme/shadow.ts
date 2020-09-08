import { ViewStyle } from 'react-native';
import { color } from './color';

export const defaultShadow: ViewStyle = {
  backgroundColor: color.palette.white,
  elevation: 10,
  shadowColor: 'rgba(0, 0, 0, 0.15)',
  shadowOffset: { width: 0, height: 5 },
  shadowOpacity: 1,
  shadowRadius: 8,
};
