import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';

const AppStack =  createStackNavigator();

const ScreenNav = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="screen1" component={Screen1}/>
        <AppStack.Screen name="screen2" component={Screen2}/>
    </AppStack.Navigator>
)

export default ScreenNav;
