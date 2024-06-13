import React from 'react';

import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Tabs} from '../tabs';

const Rect = () => {
  return (
    <View
      style={{
        width: 150,
        height: 150,
        backgroundColor: 'red',
        alignSelf: 'center',
      }}
    />
  );
};

export const MainPage = () => {
  const {top} = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: top,
        flex: 1,
      }}>
      <Rect />
      <Tabs />
    </View>
  );
};
