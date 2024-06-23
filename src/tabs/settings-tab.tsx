import React from 'react';

import {Animated, Text, StyleSheet} from 'react-native';
import {SharedValue} from 'react-native-reanimated';
import {useScrollAnimation} from './hooks';
import {MAX_ANIMATION_VALUE, MIN_ANIMATION_VALUE} from './constants';

const array = new Array(100).fill(0);

type TProps = {
  animatedProgress: SharedValue<number>;
};

export const SettingsTab = ({animatedProgress}: TProps) => {
  const {handleScroll} = useScrollAnimation({
    animatedProgress,
    minAnimationValue: MIN_ANIMATION_VALUE,
    maxAnimationValue: MAX_ANIMATION_VALUE,
  });

  return (
    <Animated.View style={styles.wrapper}>
      <Animated.FlatList
        keyExtractor={(_, index) => index.toString()}
        data={array}
        onScroll={handleScroll}
        renderItem={({index}) => <Text style={styles.text}>{index}</Text>}
        style={styles.flatList}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    width: '100%',
  },
  text: {
    textAlign: 'center',
  },
});
