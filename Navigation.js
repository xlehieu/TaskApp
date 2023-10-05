// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screen/Home';
import Screen1 from './Screen/Screen1';
import Screen2 from './Screen/Screen2';

const Stack = createStackNavigator();

function Navigation() {
  return (
      <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
  );
}

export default Navigation;
