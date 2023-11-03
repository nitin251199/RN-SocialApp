import React, {useEffect} from 'react';

import {LogBox} from 'react-native';

import Routes from './src/navigation/routes';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import configureStore from './src/storage/redux/store';
import {MenuProvider} from 'react-native-popup-menu';

function App() {
  LogBox.ignoreAllLogs();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  let {store, persistor} = configureStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MenuProvider>
          <Routes />
        </MenuProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
