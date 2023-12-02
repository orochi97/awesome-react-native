import React, {useMemo} from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

import type {ColorMap, Props} from './type';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#1677FF',
    borderColor: '#d9d9d9',
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

const colorMap: ColorMap = {
  default: 'white',
  primary: '#1677FF',
  warning: '#faad14',
  success: '#52c41a',
  error: '#ff4d4f',
};

export default function Button(props: Props) {
  const {onPress, title = 'Save', type = 'default', style} = props;
  const btnStyle = useMemo(() => {
    return {
      ...styles.button,
      backgroundColor: colorMap[type],
    };
  }, [type]);

  const textStyle = useMemo(() => {
    let color = styles.text.color;
    if (type === 'default') {
      color = '#000000';
    }
    return {
      ...styles.text,
      color: color,
    };
  }, [type]);

  return (
    <Pressable style={[btnStyle, style]} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
}
