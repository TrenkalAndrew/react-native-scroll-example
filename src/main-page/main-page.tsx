import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Tabs} from '../tabs';
import {Card} from './Card';
import {useSharedValue} from 'react-native-reanimated';

export const MainPage = () => {
  const {top} = useSafeAreaInsets();

  const ref = useRef<View>(null);
  const animatedProgress = useSharedValue(150);

  return (
    <View
      style={[
        styles.wrapper,
        {
          paddingTop: top,
        },
      ]}
      ref={ref}>
      <Card animatedProgress={animatedProgress} />
      <Tabs animatedProgress={animatedProgress} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
