import {
  useAnimatedScrollHandler,
  SharedValue,
  withTiming,
  Easing,
  useSharedValue,
} from 'react-native-reanimated';

const DURATION = 400;

type UseScrollAnimation = {
  animatedProgress: SharedValue<number>;
  minAnimationValue: number;
  maxAnimationValue: number;
};

export const useScrollAnimation = ({
  animatedProgress,
  minAnimationValue,
  maxAnimationValue,
}: UseScrollAnimation) => {
  const isCollapsed = useSharedValue(false);

  const handleScroll = useAnimatedScrollHandler({
    onScroll: ({contentOffset}) => {
      if (contentOffset.y <= 0 && isCollapsed.value) {
        isCollapsed.value = false;

        animatedProgress.value = withTiming(maxAnimationValue, {
          duration: DURATION,
          easing: Easing.inOut(Easing.ease),
        });
      }

      if (contentOffset.y > 0 && !isCollapsed.value) {
        isCollapsed.value = true;

        animatedProgress.value = withTiming(minAnimationValue, {
          duration: DURATION,
          easing: Easing.inOut(Easing.ease),
        });
      }
    },
  });

  return {handleScroll};
};
