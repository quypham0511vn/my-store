import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import Products from '../screen/Products';
//import ProductDetail from '../screen/ProductDetail'
//import Order from '../screen/Order';
import Login from '../screen/Login';

const Stack = createStackNavigator();

function NavigationApp() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login}/>
         
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default NavigationApp;