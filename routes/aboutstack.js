import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import AboutScreen from '../screens/About';




const AboutStack = createStackNavigator(
  );

export default function () {

  return (
    
    <NavigationContainer>
      <AboutStack.Navigator
        screenOptions= {{
          headerStyle: {
          backgroundColor: '#f4511e',
          height: 100,
          },
          headerTintColor: '#fff',}}
      >

        <AboutStack.Screen 
        name='About' 
        component={AboutScreen} 
        options={{
          title: 'About',
          
        }} 
        />
        
       

      </AboutStack.Navigator>
  </NavigationContainer>
    
  );
}

