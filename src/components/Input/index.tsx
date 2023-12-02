import React, {useCallback, useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native/types';

import type {Props} from './type';

const styles = StyleSheet.create({
  textInput: {
    borderColor: '#d9d9d9',
    borderWidth: 1,
    borderRadius: 6,
    width: 222,
    height: 44,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 11,
    paddingRight: 11,
  },
  focus: {
    borderColor: '#1677ff',
  },
  blur: {},
});

export default function Input(props: Props) {
  const {onChangeText, onFocus, onBlur, value = ''} = props;
  const [isFocus, setFocus] = useState(false);

  const focusHandle = useCallback<
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
  >(
    ev => {
      setFocus(true);
      onFocus?.(ev);
    },
    [onFocus],
  );

  const blurHandle = useCallback<
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
  >(
    ev => {
      setFocus(false);
      onBlur?.(ev);
    },
    [onBlur],
  );

  return (
    <TextInput
      style={[styles.textInput, isFocus ? styles.focus : styles.blur]}
      value={value}
      onFocus={focusHandle}
      onBlur={blurHandle}
      onChangeText={onChangeText ? onChangeText : () => {}}
    />
  );
}
