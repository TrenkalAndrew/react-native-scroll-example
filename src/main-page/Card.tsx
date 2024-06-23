import React from 'react';

import {StyleSheet} from 'react-native';
import Animated, {SharedValue, useAnimatedStyle} from 'react-native-reanimated';

type TProps = {animatedProgress: SharedValue<number>};

export const Card = ({animatedProgress}: TProps) => {
  const animatedStyles = useAnimatedStyle(() => ({
    width: animatedProgress.value,
    height: animatedProgress.value,
  }));

  return <Animated.View style={[styles.card, animatedStyles]} />;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'red',
    alignSelf: 'center',
  },
});
