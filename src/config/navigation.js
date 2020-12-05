import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import {Image} from 'react-native';
import Home from "../screen/Home"



const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen name="Todo-App" component={Home} options={ {headerTitle : props => <Image source={require('../../assets/todos.png')} style={{width:50 , height: 50 , resizeMode : "contain" , alignSelf: 'center'}}/>} } />
    
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;