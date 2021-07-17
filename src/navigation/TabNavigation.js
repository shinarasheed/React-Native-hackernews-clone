import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import COLORS from '../constants/colors';

import {MainStackNavigator, AboutStackNavigator} from './StackNavigation';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'HomeScreen') {
            iconName = 'home';
            size = focused ? 25 : 20;
          } else if (route.name === 'AboutScreen') {
            iconName = 'address-card';
            size = focused ? 25 : 20;
          }

          return <Fontawesome5 name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: COLORS.primary,
        inactiveTintColor: COLORS.dark,
        showLabel: false,
      }}
      barStyle={{backgroundColor: '#fff', paddingHorizontal: 0}}
      activeColor={COLORS.primary}
      inactiveColor={COLORS.dark}
      labeled={false}>
      <Tab.Screen name="HomeScreen" component={MainStackNavigator} />
      <Tab.Screen name="AboutScreen" component={AboutStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
