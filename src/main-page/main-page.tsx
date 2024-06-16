import React, {useRef} from 'react';

import {Animated, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Tabs} from '../tabs';

const Rect = ({animatedProgress}: {animatedProgress: Animated.Value}) => {
  const size = animatedProgress.interpolate({
    inputRange: [-150, 0],
    outputRange: [0, 150],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={{
        width: size,
        height: size,
        backgroundColor: 'red',
        alignSelf: 'center',
      }}
    />
  );
};

export const MainPage = () => {
  const {top} = useSafeAreaInsets();

  const ref = useRef<View>(null);
  const animatedProgress = useRef(new Animated.Value(0)).current;

  return (
    <View
      style={{
        paddingTop: top,
        flex: 1,
      }}
      ref={ref}>
      <Rect animatedProgress={animatedProgress} />
      <Tabs animatedProgress={animatedProgress} />
    </View>
  );
};
