import React, {useRef} from 'react';
import {Animated} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text} from 'react-native';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';

const array = new Array(100).fill(0);

const HomeScreen = () => {
  const ref = useRef<Animated.FlatList>(null);

  const pan = Gesture.Pan()
    .onBegin(() => {
      ref.current?.setNativeProps({
        scrollEnabled: false,
      });
    })
    .onChange(({changeY, translationY}) => {
      console.log({changeY, translationY});
    });

  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <GestureDetector gesture={pan}>
        <Animated.FlatList
          ref={ref}
          keyExtractor={(_, index) => index.toString()}
          data={array}
          renderItem={({index}) => (
            <Text style={{textAlign: 'center'}}>{index}</Text>
          )}
          style={{width: '100%'}}
        />
      </GestureDetector>
    </Animated.View>
  );
};

const Tab = createMaterialTopTabNavigator();

export const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Settings" component={HomeScreen} />
  </Tab.Navigator>
);
