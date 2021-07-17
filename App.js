import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import store from './src/redux/store';

import DrawerNavigator from './src/navigation/DrawerNavigation';
import COLORS from './src/constants/colors';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" backgroundColor={COLORS.primary} />
          <DrawerNavigator />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
