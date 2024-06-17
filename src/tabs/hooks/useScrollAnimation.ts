import {useCallback, useRef} from 'react';
import {Animated, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

const DURATION = 400;

type UseScrollAnimation = {
  animatedProgress: Animated.Value;
  minAnimationValue: number;
  maxAnimationValue: number;
};

export const useScrollAnimation = ({
  animatedProgress,
  minAnimationValue,
  maxAnimationValue,
}: UseScrollAnimation) => {
  const isCollapsed = useRef(false);

  const handleScroll = useCallback(
    ({
      nativeEvent: {contentOffset},
    }: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (contentOffset.y <= 0 && isCollapsed.current) {
        isCollapsed.current = false;
        Animated.timing(animatedProgress, {
          toValue: maxAnimationValue,
          useNativeDriver: false,
          duration: DURATION,
        }).start();
      }

      if (contentOffset.y > 0 && !isCollapsed.current) {
        isCollapsed.current = true;
        Animated.timing(animatedProgress, {
          toValue: minAnimationValue,
          useNativeDriver: false,
          duration: DURATION,
        }).start();
      }
    },
    [animatedProgress, maxAnimationValue, minAnimationValue],
  );

  return {handleScroll};
};
