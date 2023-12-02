import React, {useCallback, useEffect, useState} from 'react';
import {Image, Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {windowWidth} from '@/const';

import type {Props} from './type';

const styles = StyleSheet.create({
  swiperContainer: {
    backgroundColor: 'black',
    padding: 20,
  },
  swiperFooter: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 10,
  },
  swiperImage: {
    width: windowWidth - 16,
    height: windowWidth - 16,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: 'white',
    margin: 8,
  },
  swiperText: {
    fontSize: 24,
    color: 'white',
  },
});

export default function Swiper({list, value}: Props): JSX.Element {
  const length = list.length;
  const [current, setCurrent] = useState<number>(0);
  const prevHandle = useCallback(() => {
    let next = current - 1;
    if (next < 0) {
      next = length - 1;
    }
    setCurrent(next);
  }, [current, length]);

  const nextHandle = useCallback(() => {
    let next = current + 1;
    if (next >= length) {
      next = 0;
    }
    setCurrent(next);
  }, [current, length]);

  useEffect(() => {
    setCurrent(value);
  }, [value]);

  return (
    <View style={styles.swiperContainer}>
      <Image style={styles.swiperImage} source={list[current]} />
      <View style={styles.swiperFooter}>
        <Icon
          name="caret-back-circle"
          size={40}
          color="white"
          onPress={prevHandle}
        />
        <Text style={styles.swiperText}>
          {current + 1} / {length}
        </Text>
        <Icon
          name="caret-forward-circle"
          size={40}
          color="white"
          onPress={nextHandle}
        />
      </View>
    </View>
  );
}
