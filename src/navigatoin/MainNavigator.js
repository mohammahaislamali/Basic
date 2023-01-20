import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
/*

 Always use stack navigation at the root of your project

*/

const MainNavigator = () => { 
    return (
        <NavigationContainer >
             <StackNavigator  /> 
            {/* <DrawerNavigator/> */}
        </NavigationContainer>
    )
}
export default MainNavigator