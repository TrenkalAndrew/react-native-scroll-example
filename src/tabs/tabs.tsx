import React from 'react';
import {Animated} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {HomeTab} from './home-tab';
import {SettingsTab} from './settings-tab';

type TProps = {
  animatedProgress: Animated.Value;
};

const Tab = createMaterialTopTabNavigator();

export const Tabs = ({animatedProgress}: TProps) => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={() => <HomeTab animatedProgress={animatedProgress} />}
    />
    <Tab.Screen
      name="Settings"
      component={() => <SettingsTab animatedProgress={animatedProgress} />}
    />
  </Tab.Navigator>
);
