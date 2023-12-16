import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './routes/RootNavigator';
import {LocationProvider} from './context/LocationContext';
import {MenuVisibilityProvider} from './context/MenuContext';
import {UserProvider} from './context/UserContext';
import {ModalProvider} from './context/ModalContext';
import {PoxModalVisibilityProvider} from './context/PoxModalContext';
import {CodeModalProvider} from './context/CodeModalContext';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <UserProvider>
        <MenuVisibilityProvider>
          <PoxModalVisibilityProvider>
            <ModalProvider>
              <CodeModalProvider>
                <LocationProvider>
                  <RootNavigator />
                </LocationProvider>
              </CodeModalProvider>
            </ModalProvider>
          </PoxModalVisibilityProvider>
        </MenuVisibilityProvider>
      </UserProvider>
    </NavigationContainer>
  );
};

export default App;
