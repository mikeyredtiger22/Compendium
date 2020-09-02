import * as React from 'react';
import { Text as ReactNativeText } from 'react-native';
import { presets } from './text.presets';
import { TextProps } from './text.props';
import { translate } from '../../i18n';
import { mergeAll, flatten } from 'ramda';

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Text(props: TextProps) {
  // grab the props
  const {
    preset = 'default',
    tx,
    txOptions,
    text,
    children,
    style: styleOverride,
    capitalise,
    ...rest
  } = props;

  // figure out which content to use
  const i18nText = tx && translate(tx, txOptions);
  const content = i18nText || text || children;
  const caseStyle = capitalise ? { textTransform: 'uppercase' } : {};

  const style = mergeAll(
    flatten([presets[preset] || presets.default, caseStyle, styleOverride]),
  );

  return (
    // @ts-ignore
    <ReactNativeText {...rest} style={style}>
      {content}
    </ReactNativeText>
  );
}
