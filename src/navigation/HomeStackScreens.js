import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* NAVIGATION ELEMENTS */
import PostScreen from '../screens/PostScreen';
import HomeScreen from '../screens/HomeScreen';

export const ROUTE_NAMES = {
  home: 'Home',
  postScreen: 'Post',
};

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTE_NAMES.homeScreen}
      screenOptions={{
        headerShown: false,
        // animation: 'slide_from_right',
      }}>
      <Stack.Screen name={ROUTE_NAMES.home} component={HomeScreen} />
      <Stack.Screen name={ROUTE_NAMES.postScreen} component={PostScreen} />
    </Stack.Navigator>
  );
}
