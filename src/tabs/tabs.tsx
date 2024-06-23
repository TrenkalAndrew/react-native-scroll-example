import React from 'react';
import {SharedValue} from 'react-native-reanimated';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {HomeTab} from './home-tab';
import {SettingsTab} from './settings-tab';

type TProps = {
  animatedProgress: SharedValue<number>;
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
