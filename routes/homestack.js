import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from '../screens/Home';
import ReviewDetailsScreen from '../screens/ReviewDetailsScreen';



const HomeStack = createStackNavigator(
  );

export default function myStacks() {

  return (
    
    
      <HomeStack.Navigator
        screenOptions= {{
          headerStyle: {
          backgroundColor: '#f4511e',
          height: 100,
          },
          headerTintColor: '#fff',}}
      >

        <HomeStack.Screen 
        name='Home' 
        component={HomeScreen} 
        options={{
          title: 'GameZone',
          
        }} 
        />
        
        <HomeStack.Screen 
          name='Review Details' 
          component={ReviewDetailsScreen}
          options={{title: 'Review Details'}} 
        />

      </HomeStack.Navigator>
 
    
  );
}

