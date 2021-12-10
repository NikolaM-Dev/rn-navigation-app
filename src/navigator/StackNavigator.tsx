import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Page1Screen from '../screens/Page1Screen';
import Page2Screen from '../screens/Page2Screen';
import Page3Screen from '../screens/Page3Screen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Page1Screen} name="Page1Screen" />
      <Stack.Screen component={Page2Screen} name="Page2Screen" />
      <Stack.Screen component={Page3Screen} name="Page3Screen" />
    </Stack.Navigator>
  );
};

export default StackNavigator;
