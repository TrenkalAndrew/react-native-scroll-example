import React from 'react';

import {Animated, StyleSheet} from 'react-native';

type TProps = {animatedProgress: Animated.Value};

export const Card = ({animatedProgress}: TProps) => (
  <Animated.View
    style={[
      styles.card,
      {
        width: animatedProgress,
        height: animatedProgress,
      },
    ]}
  />
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'red',
    alignSelf: 'center',
  },
});
