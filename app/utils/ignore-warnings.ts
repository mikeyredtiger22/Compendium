/**
 * Ignore some yellow box warnings. Some of these are for deprecated functions
 * that we haven't gotten around to replacing yet.
 */
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never',
  'Setting a timer',
  '`object` supplied to `Carousel`,',
]);
