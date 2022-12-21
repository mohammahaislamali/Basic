import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import colors from '../constanst/colors';
const commonOptions = {
    headerTitle: '',
    headerStyle: {
        backgroundColor: colors.white,
    },
    headerShadowVisible: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerShown: false
};

const StackNavigator = () => {
    const { Navigator, Screen } = createStackNavigator()
    return (
        <Navigator
            screenOptions={{
                // your stack style
            }}
        >
                        
            <Screen
                name='Login'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screen/after_login/Login').default}
            
                options={{
                    ...commonOptions
                }}
                
            />
              <Screen
                name='SinUp'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screen/after_login/SinUp').default}
            
                options={{
                    ...commonOptions
                }}
                
            />
              <Screen
                name='Home'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screen/before_login/Home').default}
            
                options={{
                    ...commonOptions
                }} 
            />
             <Screen
                name='Add'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screen/before_login/Add').default}
            
                options={{
                    ...commonOptions
                }}
                
            />
    
             <Screen
                name='First'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screen/before_login/First').default}
            
                options={{
                    ...commonOptions
                }}
                
            />
        </Navigator>
    )
}

export default StackNavigator