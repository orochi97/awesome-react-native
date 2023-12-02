import {GestureResponderEvent, StyleProp, TextStyle} from 'react-native/types';

declare const ButtonTypes: readonly [
  'default',
  'primary',
  'warning',
  'success',
  'error',
];
type ButtonType = (typeof ButtonTypes)[number];

export type ColorMap = {
  [k in ButtonType]: string;
};

export type Props = {
  type?: ButtonType;
  title?: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<TextStyle>;
};
