import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native/types';

export type Props = {
  value?: string;
  onChangeText?: (text: string) => void;
  onFocus?: (ev: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: (ev: NativeSyntheticEvent<TextInputFocusEventData>) => void;
};
