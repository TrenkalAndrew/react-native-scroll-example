import React, {useRef} from 'react';
import {Animated} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text} from 'react-native';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';

const array = new Array(100).fill(0);

type TProps = {
  animatedProgress: Animated.Value;
};

const HomeScreen = ({animatedProgress}: TProps) => {
  const ref = useRef<Animated.FlatList>(null);
  const isCollapsed = useRef(false);

  const pan = Gesture.Pan()
    .onBegin(() => {
      !isCollapsed.current &&
        ref.current?.setNativeProps({
          scrollEnabled: false,
        });
      console.log('begin');
    })
    .onChange(({translationY}) => {
      animatedProgress.setValue(translationY);

      if (translationY < -150 && !isCollapsed.current) {
        isCollapsed.current = true;
      }

      if (isCollapsed.current) {
        ref.current?.setNativeProps({
          scrollEnabled: true,
        });
        ref.current?.scrollToOffset({
          offset: Math.abs(translationY) - 150,
          animated: false,
        });
      }
    });

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.FlatList
          ref={ref}
          keyExtractor={(_, index) => index.toString()}
          data={array}
          onScroll={({nativeEvent: {contentOffset}}) => {
            if (contentOffset.y <= 0 && isCollapsed.current) {
              isCollapsed.current = false;
              Animated.timing(animatedProgress, {
                toValue: 0,
                useNativeDriver: false,
                duration: 400,
              }).start();
            }
          }}
          renderItem={({index}) => (
            <Text style={{textAlign: 'center'}}>{index}</Text>
          )}
          style={{width: '100%'}}
        />
      </Animated.View>
    </GestureDetector>
  );
};

const Tab = createMaterialTopTabNavigator();

export const Tabs = ({animatedProgress}: TProps) => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={() => <HomeScreen animatedProgress={animatedProgress} />}
    />
    <Tab.Screen
      name="Settings"
      component={() => <HomeScreen animatedProgress={animatedProgress} />}
    />
  </Tab.Navigator>
);
