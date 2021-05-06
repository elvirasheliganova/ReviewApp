import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import AboutScreen from '../screens/About';




const AboutStack = createStackNavigator(
  );

export default function myStacks() {

  return (
    
    
      <AboutStack.Navigator
        screenOptions= {{
          headerStyle: {
          backgroundColor: '#f4511e',
          height: 100,
          },
          headerTintColor: 'blue',}}
      >

        <AboutStack.Screen 
        name='About' 
        component={AboutScreen} 
        options={{
          title: 'About',
          
        }} 
        />
        
       

      </AboutStack.Navigator>
  
    
  );
}

