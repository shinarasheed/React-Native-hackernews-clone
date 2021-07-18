import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import store from './src/redux/store';

import TabNavigation from './src/navigation/TabNavigation';
import DrawerNavigator from './src/navigation/DrawerNavigation';
import StackNavigator from './src/navigation/StackNavigation';
import COLORS from './src/constants/colors';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
