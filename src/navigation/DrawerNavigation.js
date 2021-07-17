import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {AboutStackNavigator} from './StackNavigation';
import TabNavigator from './TabNavigation';
import COLORS from '../constants/colors';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      drawerType="front"
      hideStatusBar={true}
      overlayColor="transparent"
      drawerStyle={{
        backgroundColor: COLORS.secondary,
      }}
      screenOptions={{
        headerShown: true,
        swipeEnabled: false,
        gestureEnabled: true,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: COLORS.secondary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 15,
          fontWeight: 'bold',
        },
      }}>
      <Drawer.Screen
        name="HomeScreen"
        component={TabNavigator}
        options={{
          title: 'HN',
          drawerIcon: ({focused}) => {
            <FontAwesome5Icon
              name="home"
              size={focused ? 25 : 20}
              color={focused ? COLORS.primary : COLORS.dark}
            />;
          },
        }}
      />
      <Drawer.Screen
        name="AboutScreen"
        component={AboutStackNavigator}
        options={{
          title: 'About Me',
          drawerIcon: ({focused}) => {
            <FontAwesome5Icon
              name="address-card"
              size={focused ? 25 : 20}
              color={focused ? COLORS.primary : COLORS.dark}
            />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
