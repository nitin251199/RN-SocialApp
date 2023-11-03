import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* NAVIGATION ELEMENTS */
import BottomTabs from './bottomTabs';
import AuthStack from './AuthStack';
import {useSelector} from 'react-redux';

export const ROUTE_NAMES = {
  homeScreen: 'HomeScreen',
  homeStack: 'HomeStack',
  home: 'Home',
  chatScreen: 'Chat',
  profileScreen: 'Profile',
  alertScreen: 'Alert',
  newPostScreen: 'NewPost',
  searchScreen: 'Search',
  messagesScreen: 'Messages',
  postScreen: 'Post',
  authStack: 'AuthStack',
};

const Stack = createNativeStackNavigator();

export default function Routes() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={
          !isLoggedIn ? ROUTE_NAMES.authStack : ROUTE_NAMES.homeStack
        }
        screenOptions={{
          headerShown: false,
          // animation: 'slide_from_right',
        }}>
        <Stack.Screen name={ROUTE_NAMES.homeStack} component={BottomTabs} />
        <Stack.Screen name={ROUTE_NAMES.authStack} component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
