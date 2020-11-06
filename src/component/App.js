import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import IntroScreen from './IntroScreen';
import SignUpScreen from './RegisterScreen';
import HomeScreen from './HomeScreen';
import AlertScreen from './AlertScreen';
import ListScreen from './ListScreen';
import StoreScreen from './StoresScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="SplashScreen"
          options={{headerShown: false}}
          component={SplashScreen}
        />
        <Stack.Screen
          name="IntroScreen"
          options={{headerShown: false}}
          component={IntroScreen}
        />
        <Stack.Screen
          name="SignUpScreen"
          options={{headerShown: false}}
          component={SignUpScreen}
        />
        <Stack.Screen
          name="HomeScreen"
          options={{headerShown: false}}
          component={HomeScreen}
        />
        <Stack.Screen name="AlertScreen" component={AlertScreen} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="StoreScreen" component={StoreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
