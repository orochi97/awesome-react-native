import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import {windowHeight, windowWidth} from '@/const';

import type {Props} from './type';

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#eee',
    justifyContent: 'center',
    position: 'absolute',
  },
  indicator: {
    marginTop: '-50%',
  },
});

export default function Loading(props: Props) {
  if (!props.loading) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color="#1677FF"
        style={styles.indicator}
      />
    </View>
  );
}
